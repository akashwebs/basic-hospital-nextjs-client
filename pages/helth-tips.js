import { Box, Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Heading from "../Components/Heading";
import HealthSinglePage from "../Components/HealthSinglePage";
import Loading from "../Components/Loading";

import { healthTips } from "../lib/helper";

const helth = () => {
  const { data: healths, isLoading } = useQuery(["health-tips"], healthTips);

  return (
    <Box sx={{ px: { xs: 1, md: 8 } }}>
      <Heading>স্বাস্থ্য টিপস</Heading>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Grid container spacing={4}>
          {healths?.map((health) => {
            return (
              <HealthSinglePage
                health={health}
                key={health._id}
              ></HealthSinglePage>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default helth;
