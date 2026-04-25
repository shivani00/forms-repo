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
                // Code Logic
                if (isRuleFired) {
                    createNewFormsListItemXX(data, "FRM 35480", "<form edition date usually XX XX for WC>", "MI/RI Controller Insurance", "add", <displayInd>, <manuscriptInd>, <printInd>, <pulllistInd>, "text", null, null, null, "<display Form nUmber>", "MI/RI Cntrl Ins", <localprintEligibleInd>, null, null, null)
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
