import { Box, Container } from "@mui/system";
import React from "react";
import Heading from "../Components/Heading";
import ImageGallary from "../Components/ImageGallary";
import { useQuery } from "@tanstack/react-query";
import { gallaryImages } from "../lib/helper";
import Loading from "../Components/Loading";

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const Imagegallary = () => {
  const { data: images, isLoading: imagesLoading } = useQuery(
    ["about-employees"],
    gallaryImages
  );

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(images?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(images?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, images]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % images?.length;
    setItemOffset(newOffset);
  };

  if (imagesLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Heading>Image Gallary</Heading>
        <Box>
          <ImageGallary images={currentItems}></ImageGallary>
        </Box>
      </Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="btn-group pagination"
        pageLinkClassName="btn btn-sm"
        previousLinkClassName="btn-sm btn"
        nextLinkClassName="btn btn-sm"
        activeClassName="pagination-active"
      />
    </>
  );
};

export default Imagegallary;
