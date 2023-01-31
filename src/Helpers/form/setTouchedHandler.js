export default (id, touched, setTouched) => {
  setTouched({ ...touched, [id]: true });
};
