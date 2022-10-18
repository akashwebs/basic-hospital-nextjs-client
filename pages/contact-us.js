import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Heading from "../Components/Heading";
import Image from "next/image";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import emailjs from "@emailjs/browser";

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qdzy3ne",
        "template_pvoe49y",
        form.current,
        "8xB3OO6LTpJMX5uc_"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            return <Alert severity="success">This is a success message!</Alert>;
          }
        },
        (error) => {
          if (error.text) {
            alert("please try again ", error.text);
          }
        }
      );
  };

  return (
    <Box bgcolor={""} color={"#000"}>
      <Heading>যোগাযোগ করুন</Heading>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ height: "100%" }}>
              <Box
                p={4}
                bgcolor={"#5db2ff"}
                color="#fff"
                sx={{ height: "100%" }}
              >
                <Typography
                  variant="h5"
                  component={"h5"}
                  sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2, mb: 2 }}
                >
                  Send Message
                </Typography>
                <Box
                  component="form"
                  ref={form}
                  onSubmit={sendEmail}
                  // noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    required
                    id="outlined-required"
                    label="Your Name"
                    fullWidth
                    color="success"
                    name="user_name"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Your Email Address"
                    fullWidth
                    color="success"
                    sx={{ margin: "10px 0" }}
                    type={"email"}
                    name="user_email"
                  />

                  <TextField
                    placeholder="Your Messages"
                    multiline
                    maxRows={6}
                    minRows={3}
                    fullWidth
                    name="message"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={3} bgcolor={"#5db2ff"} color="#fff">
              <Paper>
                <Box textAlign={"center"}>
                  <Image
                    src="/hospital-image.jpg"
                    width={400}
                    height={450}
                  ></Image>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* -----------addreess------------- */}
        <Grid container spacing={5} my={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              p={4}
              sx={{
                borderRadius: "25px",
                backgroundColor: "#090748",
                color: "#fff",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <PhoneForwardedIcon
                  sx={{ fontSize: "40px" }}
                ></PhoneForwardedIcon>
                <Typography
                  variant="p"
                  component={"span"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginLeft: "5px",
                    marginBottom: "15px",
                  }}
                >
                  Call Us
                </Typography>
              </Box>
              <Typography
                variant="p"
                component={"span"}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginLeft: "5px",
                }}
              >
                +8801854950227 <br />
                +8801758594748
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              p={4}
              sx={{
                borderRadius: "25px",
                backgroundColor: "#090748",
                color: "#fff",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <EditLocationAltIcon
                  sx={{ fontSize: "40px" }}
                ></EditLocationAltIcon>
                <Typography
                  variant="p"
                  component={"span"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginLeft: "5px",
                    marginBottom: "15px",
                  }}
                >
                  Location
                </Typography>
              </Box>
              <Typography
                variant="p"
                component={"span"}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Basic Hospital, Rahimanagar, Kachua, Chandpur
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              p={4}
              sx={{
                borderRadius: "25px",
                backgroundColor: "#090748",
                color: "#fff",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <AccessTimeFilledIcon
                  sx={{ fontSize: "40px" }}
                ></AccessTimeFilledIcon>
                <Typography
                  variant="p"
                  component={"span"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginLeft: "5px",
                    marginBottom: "15px",
                  }}
                >
                  24/7 Days
                </Typography>
              </Box>
              <Typography
                variant="p"
                component={"span"}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginLeft: "5px",
                }}
              >
                Always Open
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default contact;
