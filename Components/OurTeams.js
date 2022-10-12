import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const OurTeams = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Heading> পরিচালকগন</Heading>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Paper sx={{ height: "100%" }}>
            <Box
              id={"porcihalok"}
              p={2}
              bgcolor={"#556cd6"}
              textAlign="center"
              color="#fff"
              sx={{ height: "100%" }}
            >
              <Image
                src="/Dr._Selina_Husna_Banu.jpg"
                width={400}
                height={250}
              ></Image>
              <Typography variant="h6" component={"h6"} textAlign="center">
                ডাঃ আয়াতুজ্জামান খান
              </Typography>
              <Typography variant="p" textAlign="center" component={"p"}>
                ল্যাব স্পেশালিস্ট
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper sx={{ height: "100%" }}>
            <Box
              id={"porcihalok"}
              p={2}
              bgcolor={"#556cd6"}
              textAlign="center"
              color="#fff"
              sx={{ height: "100%" }}
            >
              <Image
                src="/Dr._Selina_Husna_Banu.jpg"
                width={400}
                height={250}
              ></Image>
              <Typography variant="h6" component={"h6"} textAlign="center">
                ডাঃ আয়াতুজ্জামান খান
              </Typography>
              <Typography variant="p" textAlign="center" component={"p"}>
                ল্যাব স্পেশালিস্ট
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper sx={{ height: "100%" }}>
            <Box
              id={"porcihalok"}
              p={2}
              bgcolor={"#556cd6"}
              textAlign="center"
              color="#fff"
              sx={{ height: "100%" }}
            >
              <Image
                src="/Dr._Selina_Husna_Banu.jpg"
                width={400}
                height={250}
              ></Image>
              <Typography variant="h6" component={"h6"} textAlign="center">
                ডাঃ আয়াতুজ্জামান খান
              </Typography>
              <Typography variant="p" textAlign="center" component={"p"}>
                ল্যাব স্পেশালিস্ট
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper sx={{ height: "100%" }}>
            <Box
              id={"porcihalok"}
              p={2}
              bgcolor={"#556cd6"}
              textAlign="center"
              color="#fff"
              sx={{ height: "100%" }}
            >
              <Image
                src="/Dr._Selina_Husna_Banu.jpg"
                width={400}
                height={250}
              ></Image>
              <Typography variant="h6" component={"h6"} textAlign="center">
                ডাঃ আয়াতুজ্জামান খান
              </Typography>
              <Typography variant="p" textAlign="center" component={"p"}>
                ল্যাব স্পেশালিস্ট
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurTeams;
