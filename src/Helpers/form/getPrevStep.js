const getPrevStep = (activePage, pages, formValues) => {
  let prevPage = activePage - 1;

  const prevPageId = pages[activePage - 3] || 0;

  // if there is conditional login
  if (formValues[prevPageId] && formValues[prevPageId].hideField === true) {
    prevPage = getPrevStep(prevPage);
  }

  return prevPage;
};

export default getPrevStep;
