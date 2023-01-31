import React from 'react';

export default ({ pagination, activePage, firstPageCssClass }) => {
  let value;
  const { pages, type } = pagination;

  switch (type) {
    case 'percentage':
      value = `${100 / pages.length * activePage}%`;
      break;
    case 'steps':
      value = pages.join(' ');
      break;
  }

  return (
    <div>
      {type === 'percentage' && firstPageCssClass === 'progress-bar' ? (
        <progress max="100" value={100 / pages.length * activePage}/>
      ) : value}
    </div>
  );
};
