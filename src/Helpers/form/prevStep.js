import getPrevStep from './getPrevStep';

export default (formValues, pages, activePage, setActivePage, setPageClicked) => {
  const prevPage = getPrevStep(activePage, pages, formValues) || 1;
  setActivePage(prevPage);
  setPageClicked(true);
};
