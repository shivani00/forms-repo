module.exports = {
  name: "createNewFormsListItemXX",
  description: "",
  fn: (
    data,
    formNbr,
    editionDt,
    formName,
    action,
    displayInd,
    manuscriptInd,
    printInd,
    pullListInd,
    typeCd,
    applicableStateCd,
    formShortNm,
    localPrintEligibleInd,
    documentCategoryCd,
    documentTitleTxt,
    processBehaviorCd,
    occurrenceId,
    handlingTypeCd,
    displayFormNbr
  ) => {

    let formLookupEdition = editionDt;

    if (occurrenceId) {
      formLookupEdition += occurrenceId;
    }

    // Check if form already exists
    let form = getFormsListItemDerivedForCurrentTransaction(
      data,
      formNbr,
      formLookupEdition
    );

    if (form) {
      updateFormsListItemDerivedForCurrentTransaction(
        data,
        form,
        applicableStateCd
      );
      return null;
    }

    // Create new item
    let newItem = {
      formNbr: formNbr,
      editionDt: editionDt,
      formName: formName,
      action: action
    };

    // Optional fields
    if (handlingTypeCd != null) newItem.handlingTypeCd = handlingTypeCd;
    if (displayInd != null) newItem.displayInd = displayInd;
    if (manuscriptInd != null) newItem.manuscriptInd = manuscriptInd;
    if (printInd != null) newItem.printInd = printInd;
    if (pullListInd != null) newItem.pullListInd = pullListInd;
    if (typeCd != null) newItem.typeCd = typeCd;
    if (applicableStateCd != null) newItem.applicableStateCd = applicableStateCd;
    if (occurrenceId != null) newItem.occurrenceId = occurrenceId;
    if (displayFormNbr != null) newItem.displayFormNbr = displayFormNbr;
    if (formShortNm != null) newItem.formShortNm = formShortNm;
    if (localPrintEligibleInd != null)
      newItem.localPrintEligibleInd = localPrintEligibleInd;
    if (documentCategoryCd != null)
      newItem.documentCategoryCd = documentCategoryCd;

    newItem.documentTitleTxt = documentTitleTxt;

    if (processBehaviorCd != null)
      newItem.processBehaviorCd = processBehaviorCd;

    updateTransactionFormList(data, newItem);

    return newItem;
  }
};