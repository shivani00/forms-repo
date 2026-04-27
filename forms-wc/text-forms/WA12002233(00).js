module.exports = {
    "id": "<uniqueid-aplhanumeric-with hyphen>",
    "name": "FRM 35480",
    "description": "MI/RI Controller Insurance",
    "ruleVersions": [{
        "versionId": "<uniquevalue-onlyalphabets>",
        "versionalias": "v1",
        "versondescription": "",
        "criteria": {
            "garagingState": "undefined",
            "transactionProcess": "undefined",
            "minEntryDate": "undefined",
            "maxEntryDate": "undefined",
            "businessRuleGroupingCd": "undefined",
            "govState": "undefined",
            "issuingBusUnit": "undefined",
            "policyFormCd": "undefined",
            "businessRuleGroupingRollUpCd": "undefined",
            "eligibleFilingCodes": "undefined",
            "ineligibleFiligCodes": "undefined",
            "locState": "undefined"
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
                    hasCoverage(data, "MCDMI")
                ) {
                    isRuleFired = true;
                }
                if (isRuleFired) {
                    createNewFormsListItemXX(data, "FRM 35480", "XX XX", "MI/RI Controller Insurance", "add", undefined, undefined, undefined, undefined, "text", null, null, null, "FRM 35480", "MI/RI Cntrl Ins", undefined, null, null, null);
                }
            }
        }
    }],
    "notes":
    'Form Title:
    Form Type:
    Implemented:
    LOB-ReleaseDt-Story#-ID
    CIT:
    Initial Implementation:
    Conditions for the form to derive (Spydr rules)
    AS OF:
    Upates:',
    "tests":[]
};
