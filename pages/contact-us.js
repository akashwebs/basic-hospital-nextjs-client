import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Heading from "../Components/Heading";
import Image from "next/image";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    required
                    id="outlined-required"
                    label="Your Name"
                    fullWidth
                    color="success"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Your Email Address"
                    fullWidth
                    color="success"
                    sx={{ margin: "10px 0" }}
                  />

                  <TextField
                    placeholder="Your Messages"
                    multiline
                    rows={5}
                    maxRows={6}
                    fullWidth
                  />
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Message
                </Button>
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
                    height={400}
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
