import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Heading from "./Heading";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import AppoimnetModals from "./AppoimnetModals";
import { OpenInNew } from "@mui/icons-material";
import React, { useState } from "react";
import Loading from "./Loading";

const AllDoctors = ({ doctors, doctorsLoading }) => {
  const [open, setOpen] = React.useState(false);
  const [modalDoctor, setModalDoctor] = useState({});

  const handleOpen = (data) => {
    setOpen(true);
    setModalDoctor(data);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  }));

  return (
    <Container maxWidth="xl">
      <Heading>বিশেষজ্ঞ চিকিৎসকগন</Heading>
      {doctorsLoading ? (
        <Loading></Loading>
      ) : (
        <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 16 }}
          >
            {doctors?.map((doctor, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item variant="div" component="div" sx={{ height: "100%" }}>
                  <Card sx={{ maxWidth: 500, height: "100%" }}>
                    <div style={{ height: "100%" }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={doctor?.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="p"
                          className="text-color"
                          sx={{ fontWeight: "700" }}
                        >
                          {doctor?.expert}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h5"
                          className=""
                          sx={{ fontWeight: "900", fontSize: "1.3rem" }}
                        >
                          {doctor?.doctorName}
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          color="text.primary"
                          sx={{ fontSize: ".7rem", fontWeight: "600" }}
                        >
                          {doctor?.degree}
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          color="text.primary"
                          sx={{
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            marginTop: "1rem",
                          }}
                        >
                          {doctor?.currentposition}
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          color="text.primary"
                          sx={{
                            fontSize: ".8rem",
                            fontWeight: "600",
                            marginTop: ".3rem",
                          }}
                        >
                          {doctor?.depertmentName}
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          color="text.primary"
                          sx={{
                            fontSize: ".8rem",
                            fontWeight: "600",
                            marginTop: ".3rem",
                          }}
                        >
                          {doctor?.hospitalName}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            width: "100%",
                            marginTop: "20px",
                            fontSize: "1.2rem",
                          }}
                          size="large"
                          onClick={() => handleOpen(doctor)}
                          className="bg-black"
                        >
                          অ্যাপয়েন্টমেন্ট করুন
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <AppoimnetModals
        modalDoctor={modalDoctor}
        setOpen={setOpen}
        open={open}
      ></AppoimnetModals>
    </Container>
  );
};

export default AllDoctors;
