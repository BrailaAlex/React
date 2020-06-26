import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, totalitems, itemsPerPage }) => {
  let isPrevPageAvailable = false;
  let isNextPageAvailable = false;

  const pagesQuantity = Math.ceil(totalitems / itemsPerPage);

  if (currentPage === 0) {
    isPrevPageAvailable = true;
  }

  if (currentPage === pagesQuantity - 1) {
    isNextPageAvailable = true;
  }
  // debugger;
  return (
  <div className="pagination">
      <button className="btn"
        disabled={isPrevPageAvailable}
      onClick={goPrev}>{`${isPrevPageAvailable}` || '←'}</button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn"
        disabled={isNextPageAvailable}
    onClick={goNext}>{`${isPrevPageAvailable}` || '→'}</button>
  </div>
  )
}


export default Pagination;