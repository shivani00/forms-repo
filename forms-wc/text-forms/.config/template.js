module.exports = {
    "id": "<uniqueid-aplhanumeric-with hyphen>",
    "name": "<Form Number>",
    "description": "<Form Title>",
    "ruleVersions": [{
        "versionId": "<uniquevalue-onlyalphabets>",
        "versionalias": "v1",
        "versondescription": "",
        "criteria": {
            "garagingState": "<usually undefined or else if its a single state then we can add the stateCd> ",
            "transactionProcess": "<undefined>",
            "minEntryDate": "<undefined>",
            "maxEntryDate": "<undefined>",
            "businessRuleGroupingCd": "<undefined>",
            "govState": "<usually undefined or else if its a single state then we can add the stateCd>",
            "issuingBusUnit": "<undefined>",
            "policyFormCd": "<undefined>",
            "businessRuleGroupingRollUpCd": "<undefined>",
            "eligibleFilingCodes": "<undefined>",
            "ineligibleFiligCodes": "<undefined>",
            "locState": "<usually undefined or else if its a single state then we can add the stateCd>",
        },
        "custom": {},
        "priority": "<usually it takes value 10>",
        "enabled": true,
        "effectiveDate": "<EffectiveDate>",
        "expiryDate": "<default value 2080-12-31>",
        "meta": {},
        "rule": function () {
            executeCondition()
            function executeCondition() {
                var isRuleFired = false;
			Code Logic
                if (RuleFired) {
                    createNewFormsListItemXX(data, "<form number with space after every 2 characters>", "<form edition date usually XX XX for WC>", "<form title>", "<action default its add>", <displayInd>, <manuscriptInd>, <printInd>, <pulllistInd>, "<formtype>", <applicableStateCd usually null>, <handlingTypecd usually null>, <occurrenceId usually null>,"<display Form nUmber>", "<form shortname>", <localprintEligibleInd>, <documentCategoryCd usually null>, <documentTitleTxt usually null>, <processBehaviourCd usually null>)
		}
	}
},
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
}]
}
