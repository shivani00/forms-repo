const rule = require("../text-forms/WA1200223300.js");

// Mock helper functions
const hasCoverage = jest.fn();
const hasStateCd = jest.fn();
const compareDates = jest.fn();
const createNewFormsListItemXX = jest.fn();

global.hasCoverage = hasCoverage;
global.hasStateCd = hasStateCd;
global.compareDates = compareDates;
global.createNewFormsListItemXX = createNewFormsListItemXX;

describe('WA12002233(00) - MI/RI Controlled Insurance', () => {
    let data;

    beforeEach(() => {
        // Reset mocks before each test
        hasCoverage.mockClear();
        hasStateCd.mockClear();
        compareDates.mockClear();
        createNewFormsListItemXX.mockClear();

        // Default mock data for a positive scenario
        data = {
            effectiveDate: "2027-01-01",
            policy: {
                workCompCovPart: {
                    simpleCovPartCovList: {
                        coverageProvided: [
                            { sourceCoverageCd: { code: "MCDMI" } },
                            { sourceCoverageCd: { code: "OTHER" } }
                        ]
                    }
                }
            },
            stateCd: "MI" // Or "RI"
        };

        // Default mock implementations for positive scenario
        hasCoverage.mockReturnValue(true);
        hasStateCd.mockImplementation((data, state) => data.stateCd === state);
        compareDates.mockReturnValue(0); // 0 means dates are equal, >=0 means on or after
    });

    // Positive Test Case: Rule should fire when all conditions are met
    test('should fire when coverage, state (MI), and effective date conditions are met', () => {
        rule.ruleVersions[0].rule();
        expect(hasCoverage).toHaveBeenCalledWith(data.policy.workCompCovPart.simpleCovPartCovList.coverageProvided, "MCDMI");
        expect(hasStateCd).toHaveBeenCalledWith(data, "MI");
        expect(compareDates).toHaveBeenCalledWith(data.effectiveDate, "2027-01-01");
        expect(createNewFormsListItemXX).toHaveBeenCalledWith(
            data, "FR 35 480", "XX XX", "MI/RI Controlled Insurance", "add", true, true, true, true, "text", null, null, null, "FRM 35480", "MI/RI Cntrl Ins", true, null, null, null
        );
    });

    test('should fire when coverage, state (RI), and effective date conditions are met', () => {
        data.stateCd = "RI";
        rule.ruleVersions[0].rule();
        expect(hasCoverage).toHaveBeenCalledWith(data.policy.workCompCovPart.simpleCovPartCovList.coverageProvided, "MCDMI");
        expect(hasStateCd).toHaveBeenCalledWith(data, "RI");
        expect(compareDates).toHaveBeenCalledWith(data.effectiveDate, "2027-01-01");
        expect(createNewFormsListItemXX).toHaveBeenCalledTimes(1);
    });

    // Negative Test Case 1: Coverage condition not met
    test('should not fire when coverage condition is not met', () => {
        hasCoverage.mockReturnValue(false);
        rule.ruleVersions[0].rule();
        expect(hasCoverage).toHaveBeenCalledWith(data.policy.workCompCovPart.simpleCovPartCovList.coverageProvided, "MCDMI");
        expect(createNewFormsListItemXX).not.toHaveBeenCalled();
    });

    // Negative Test Case 2: State condition not met (neither MI nor RI)
    test('should not fire when state condition is not met (not MI or RI)', () => {
        data.stateCd = "CA"; // Neither MI nor RI
        rule.ruleVersions[0].rule();
        expect(hasStateCd).toHaveBeenCalledWith(data, "MI");
        expect(hasStateCd).toHaveBeenCalledWith(data, "RI");
        expect(createNewFormsListItemXX).not.toHaveBeenCalled();
    });

    // Negative Test Case 3: Effective date condition not met (before 2027-01-01)
    test('should not fire when effective date is before 2027-01-01', () => {
        compareDates.mockReturnValue(-1); // -1 means date is before
        rule.ruleVersions[0].rule();
        expect(compareDates).toHaveBeenCalledWith(data.effectiveDate, "2027-01-01");
        expect(createNewFormsListItemXX).not.toHaveBeenCalled();
    });

    // Negative Test Case 4: Missing effectiveDate in data
    test('should not fire if effectiveDate is missing in data', () => {
        data.effectiveDate = undefined;
        compareDates.mockImplementation(() => {
            // Simulate behavior if effectiveDate is undefined, compareDates might return NaN or throw error
            // For this test, we'll assume it results in a condition not met (e.g., returns < 0 or causes the outer if to fail)
            return -1;
        });
        rule.ruleVersions[0].rule();
        expect(compareDates).toHaveBeenCalledWith(undefined, "2027-01-01");
        expect(createNewFormsListItemXX).not.toHaveBeenCalled();
    });
});