module.exports = {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "name": "WA12002233(00)-Test",
    "description": "MI/RI Controlled Insurance",
    "ruleVersions": [{
        "versionId": "vabcdefghijklmnopqrstuvwxyzabcde",
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
            "locState": undefined
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
				
                if (hasCoverage(data.policy.workCompCovPart.simpleCovPartCovList.coverageProvided, "MCDMI") && (hasStateCd(data, "MI") || hasStateCd(data, "RI"))) {
                    if (compareDates(data.effectiveDate, "2027-01-01") >= 0) {
                        isRuleFired = true;
                    }
                }
				
                if (isRuleFired) {
                    createNewFormsListItemXX(data, "FR 35 480", "XX XX", "MI/RI Controlled Insurance", "add", true, true, true, true, "text", null, null, null, "FRM 35480", "MI/RI Cntrl Ins", true, null, null, null)
		        }
	        }
        },
        "notes": `
                        Form Title: MI/RI Controlled Insurance
                        Form Type: text
                        Implemented: 2026-01-01
                        LOB-ReleaseDt-Story#-ID: WC-2026-01-01-WA12002233(00)
                        CIT:
                        Initial Implementation: 2026-01-01
                        Conditions for the form to derive (Spydr rules)
                        AS OF: 2026-01-01
                        Upates:`,
        "tests":[]
    }]
}