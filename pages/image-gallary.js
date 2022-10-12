import { Box, Container } from "@mui/system";
import React from "react";
import Heading from "../Components/Heading";
import ImageGallary from "../Components/ImageGallary";

const imagegallary = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Heading>Image Gallary</Heading>
        <Box>
          <ImageGallary></ImageGallary>
        </Box>
      </Container>
    </>
  );
};

export default imagegallary;
