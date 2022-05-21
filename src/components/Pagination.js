import React, { useEffect, useState } from "react";
import "../scss/pagination.scss";
import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <ul className="list-of-rep">
      {currentItems &&
        currentItems.map((rep, i) => (
          <li className="list-of-rep__item item" key={i}>
            <a className="item__name" href={rep.html_url} target="_blank">
              {rep.name}
            </a>
            <div className="item__description">
              {rep.description === null
                ? "There isn't any description"
                : rep.description}
            </div>
          </li>
        ))}
    </ul>
  );
}

const Pagination = ({ repos }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 4;
    setCurrentItems(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / 4));
  }, [itemOffset, 4]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % repos.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="pag">
      <Items currentItems={currentItems} />
      <div className="pages-container">
        <div className="pages">
          <ReactPaginate
            pageLinkClassName="iter"
            activeClassName="it active"
            breakClassName="it break-me"
            containerClassName="pagination"
            disabledClassName="it disabled-page"
            nextClassName="it next"
            previousClassName="it previous"
            className="pagination"

            pageClassName="it"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< prev"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
