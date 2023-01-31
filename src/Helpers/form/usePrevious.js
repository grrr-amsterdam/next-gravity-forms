import { useEffect, useRef } from 'react';

export default (data) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = data;
  }, [data]);
  return ref.current;
};
