module.exports = {
    "id": "WA12002233-00-WC",
    "name": "FRM 35480",
    "description": "MI/RI Controlled Insurance",
    "ruleVersions": [{
        "versionId": "vWA12002233",
        "versionalias": "v1",
        "versondescription": "",
        "criteria": {
            "garagingState": undefined,
            "transactionProcess": undefined,
            "minEntryDate": undefined,
            "maxEntryDate": undefined,
            "businessRuleGroupingCd": undefined,
            "govState": undefined,
            "issuingBusUnit": undefined,
            "policyFormCd": undefined,
            "businessRuleGroupingRollUpCd": undefined,
            "eligibleFilingCodes": undefined,
            "ineligibleFiligCodes": undefined,
            "locState": undefined,
        },
        "custom": {},
        "priority": 10,
        "enabled": true,
        "effectiveDate": "2026-01-01",
        "expiryDate": "2080-12-31",
        "meta": {},
        "rule": function () {
            executeCondition()
            function executeCondition() {
                var isRuleFired = false;
				// Code Logic - To have empoty checks on conditiona and then add conditions - states, coverages, effective dates etc.
				if (
  hasCoverage(data, "MCDMI") &&
  (hasStateCd(data, "MI") || hasStateCd(data, "RI")) &&
  compareDates(data.effectiveDate, "2026-01-01")
) {
  isRuleFired = true;
}
                if (isRuleFired) {
                    createNewFormsListItemXX(data, "FRM 35 48 0", "XX XX", "MI/RI Controlled Insurance", "add", true, false, true, false, "text", null, null, null,"FRM 35480", "MI/RI Cntrl Ins", true, null, null, null)
		}
	}
},
                        "notes": `
                        Form Title: MI/RI Controlled Insurance
                        Form Type: text
                        Implemented: 2026-01-01
                        LOB-ReleaseDt-Story#-ID: WC-2026-01-01-WA12002233
                        CIT:
                        Initial Implementation: 2026-01-01
                        Conditions for the form to derive (Spydr rules): Coverage MCDMI, States MI or RI, Effective Date >= 2026-01-01
                        AS OF: 2026-01-01
                        Upates:`,
                        "tests":[]
}]
}
