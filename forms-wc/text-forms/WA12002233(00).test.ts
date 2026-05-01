const rule = require("../WA1200223300.js");

// Mock helper functions
const hasCoverage = (data, coverageCode) => {
  if (!data || !data.policy || !data.policy.workCompCovPart || !data.policy.workCompCovPart.simpleCovPartCovList) {
    return false;
  }
  return data.policy.workCompCovPart.simpleCovPartCovList.some(
    (cov) => cov.sourceCoverageCd && cov.sourceCoverageCd.code === coverageCode
  );
};

const hasStateCd = (data, stateCode) => {
  return data && data.stateCd === stateCode;
};

const compareDates = (date1, date2) => {
  if (!date1 || !date2) return false;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getTime() >= d2.getTime();
};

// Mock createNewFormsListItemXX function
const createNewFormsListItemXX = jest.fn();

describe("WA12002233(00) - MI/RI Controlled Insurance Form", () => {
  let data;
  let isRuleFired;

  beforeEach(() => {
    // Reset mocks before each test
    createNewFormsListItemXX.mockClear();
    isRuleFired = false; // Reset isRuleFired for each test
    global.hasCoverage = hasCoverage;
    global.hasStateCd = hasStateCd;
    global.compareDates = compareDates;
    global.createNewFormsListItemXX = createNewFormsListItemXX;
  });

  // Positive Test Case
  test("should fire when all conditions are met (MI state)", () => {
    data = {
      policy: {
        workCompCovPart: {
          simpleCovPartCovList: [
            { sourceCoverageCd: { code: "MCDMI" } }
          ]
        }
      },
      stateCd: "MI",
      effectiveDate: "2026-01-01"
    };

    // Simulate rule execution
    rule.ruleVersions[0].rule.call({ data });

    // Check if createNewFormsListItemXX was called
    expect(createNewFormsListItemXX).toHaveBeenCalledTimes(1);
    expect(createNewFormsListItemXX).toHaveBeenCalledWith(
      data,
      "FRM 35480",
      "XX XX",
      "MI/RI Controlled Insurance Form",
      "add",
      true,
      false,
      true,
      true,
      "text",
      null,
      null,
      null,
      "FRM 35480",
      "MI/RI Cntrl Ins",
      true,
      null,
      null,
      null
    );
  });

  test("should fire when all conditions are met (RI state)", () => {
    data = {
      policy: {
        workCompCovPart: {
          simpleCovPartCovList: [
            { sourceCoverageCd: { code: "MCDMI" } }
          ]
        }
      },
      stateCd: "RI",
      effectiveDate: "2026-01-01"
    };

    // Simulate rule execution
    rule.ruleVersions[0].rule.call({ data });

    // Check if createNewFormsListItemXX was called
    expect(createNewFormsListItemXX).toHaveBeenCalledTimes(1);
  });

  // Negative Test Case: State mismatch
  test("should not fire when state is not MI or RI", () => {
    data = {
      policy: {
        workCompCovPart: {
          simpleCovPartCovList: [
            { sourceCoverageCd: { code: "MCDMI" } }
          ]
        }
      },
      stateCd: "CA", // Not MI or RI
      effectiveDate: "2026-01-01"
    };

    // Simulate rule execution
    rule.ruleVersions[0].rule.call({ data });

    // Check if createNewFormsListItemXX was not called
    expect(createNewFormsListItemXX).not.toHaveBeenCalled();
  });

  // Negative Test Case: Coverage mismatch
  test("should not fire when coverage is not MCDMI", () => {
    data = {
      policy: {
        workCompCovPart: {
          simpleCovPartCovList: [
            { sourceCoverageCd: { code: "SOMEOTHERCOV" } }
          ]
        }
      },
      stateCd: "MI",
      effectiveDate: "2026-01-01"
    };

    // Simulate rule execution
    rule.ruleVersions[0].rule.call({ data });

    // Check if createNewFormsListItemXX was not called
    expect(createNewFormsListItemXX).not.toHaveBeenCalled();
  });

  // Negative Test Case: Effective date before
  test("should not fire when effective date is before 2026-01-01", () => {
    data = {
      policy: {
        workCompCovPart: {
          simpleCovPartCovList: [
            { sourceCoverageCd: { code: "MCDMI" } }
          ]
        }
      },
      stateCd: "MI",
      effectiveDate: "2025-12-31" // Before effective date
    };

    // Simulate rule execution
    rule.ruleVersions[0].rule.call({ data });

    // Check if createNewFormsListItemXX was not called
    expect(createNewFormsListItemXX).not.toHaveBeenCalled();
  });

  // Negative Test Case: Missing effective date
  test("should not fire when effective date is missing", () => {
    data = {
      policy: {
        workCompCovPart: {
          simpleCovPartCovList: [
            { sourceCoverageCd: { code: "MCDMI" } }
          ]
        }
      },
      stateCd: "MI",
      effectiveDate: undefined
    };

    // Simulate rule execution
    rule.ruleVersions[0].rule.call({ data });

    // Check if createNewFormsListItemXX was not called
    expect(createNewFormsListItemXX).not.toHaveBeenCalled();
  });
});