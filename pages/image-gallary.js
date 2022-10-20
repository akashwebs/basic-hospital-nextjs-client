import { Box, Container } from "@mui/system";
import React from "react";
import Heading from "../Components/Heading";
import ImageGallary from "../Components/ImageGallary";
import { useQuery } from "@tanstack/react-query";
import { gallaryImages } from "../lib/helper";
import Loading from "../Components/Loading";

const Imagegallary = () => {
  const { data: images, isLoading: imagesLoading } = useQuery(
    ["about-employees"],
    gallaryImages
  );

  if (imagesLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Heading>Image Gallary</Heading>
        <Box>
          <ImageGallary images={images}></ImageGallary>
        </Box>
      </Container>
    </>
  );
};

export default Imagegallary;
