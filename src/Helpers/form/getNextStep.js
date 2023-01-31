const getNextStep = (activePage, pages, formValues) => {
  let nextPage = activePage + 1;

  const nextPageId = pages[activePage - 1];

  // if no next page
  if (!formValues[nextPageId]) {
    return false;
  }

  // if there is conditional login
  if (formValues[nextPageId].hideField === true) {
    nextPage = getNextStep(nextPage);
  }

  return nextPage;
};

export default getNextStep;
