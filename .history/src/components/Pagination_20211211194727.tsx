import React, { useEffect, useState } from "react";

interface Props {
  data: any;
  RenderComponent: any;
  pageLimit: any;
  dataLimit: any;
}

export const Pagination: React.FC<Props> = ({
  data,
  RenderComponent,
  pageLimit,
  dataLimit,
}) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [currentPage]);

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return <div></div>;
};
