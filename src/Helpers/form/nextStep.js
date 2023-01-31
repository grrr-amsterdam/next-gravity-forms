import forceValidation from './forceValidation';
import getNextStep from './getNextStep';

export default (
  event,
  props,
  pages,
  formValues,
  activePage,
  setActivePage,
  setPageClicked,
  setTouched,
  setShowPageValidationMsg
) => {
  event.preventDefault();
  const { activePage: beforeNextPage } = props;

  const isPageValidated = forceValidation(
    activePage,
    formValues,
    setShowPageValidationMsg,
    setTouched
  );
  if (!isPageValidated) return false;

  const nextPage = getNextStep(activePage, pages, formValues);

  if (beforeNextPage) {
    beforeNextPage(activePage, formValues, nextPage);
  }
  setActivePage(nextPage);
  setPageClicked(true);
  setShowPageValidationMsg(false);

  setActivePage(nextPage);
  setPageClicked(true);
  setShowPageValidationMsg(false);
};
