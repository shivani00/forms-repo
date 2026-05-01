module.exports = {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "name": "WA12002233(00)",
    "description": "MI/RI Controlled Insurance Form",
    "ruleVersions": [{
        "versionId": "vqwertyuiopasdfghjklzxcvbnm123456",
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

                if (
                    hasCoverage(data, "MCDMI") &&
                    (hasStateCd(data, "MI") || hasStateCd(data, "RI")) &&
                    (
                        data.effectiveDate && compareDates(data.effectiveDate, "2026-01-01")
                    )
                ) {
                    isRuleFired = true;
                }

                if (isRuleFired) {
                    createNewFormsListItemXX(data, "FRM 35480", "XX XX", "MI/RI Controlled Insurance Form", "add", true, false, true, true, "text", null, null, null, "FRM 35480", "MI/RI Cntrl Ins", true, null, null, null)
                }
            }
        },
        "notes": `
                        Form Title: MI/RI Controlled Insurance Form
                        Form Type: text
                        Implemented: Yes
                        LOB-ReleaseDt-Story#-ID: WC-2026-01-01-WA12002233(00)
                        CIT:
                        Initial Implementation: 2026-01-01
                        Conditions for the form to derive (Spydr rules)
                        AS OF: 2026-01-01
                        Upates: Initial creation
                        `,
        "tests": []
    }]
}