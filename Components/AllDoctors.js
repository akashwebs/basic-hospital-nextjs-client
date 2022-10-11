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
import React from "react";

const AllDoctors = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  }));

  return (
    <Container maxWidth="xl">
      <Heading>বিশেষজ্ঞ চিকিৎসকগন</Heading>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 16 }}
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item variant="div" component="div">
                <Card sx={{ maxWidth: 500 }}>
                  <div>
                    <CardMedia
                      component="img"
                      height="250"
                      image="https://dhakadoctor-sg.s3.amazonaws.com/media/doctor_profile/Dr._Selina_Husna_Banu.jpg"
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
                        শিশু নিউরোলজি বিশেষজ্ঞ
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        className=""
                        sx={{ fontWeight: "900", fontSize: "1.3rem" }}
                      >
                        অধ্যাপক ডাঃ সেলিনা হুসনা বানু
                      </Typography>
                      <Typography
                        variant="p"
                        component="p"
                        color="text.primary"
                        sx={{ fontSize: ".7rem", fontWeight: "600" }}
                      >
                        এমবিবিএস, ডি.সি.এইচ, পি.এইচ.ডি (ইউ.সি.এল )
                      </Typography>
                      <Typography
                        variant="p"
                        component="p"
                        color="text.primary"
                        sx={{
                          fontSize: ".8rem",
                          fontWeight: "600",
                          marginTop: "1rem",
                        }}
                      >
                        অধ্যাপক ও বিভাগীয়
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
                        ডিপার্টমেন্ট অফ নিউরোলজি এন্ড ডেভেলপমেন্ট
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
                        ডাঃ এম আর খান শিশু হাসপাতাল এন্ড ইনস্টিটিউট অফ চাইল্ড
                        হেলথ
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{ width: "100%", marginTop: "20px" }}
                        size="large"
                        onClick={handleOpen}
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
      <AppoimnetModals setOpen={setOpen} open={open}></AppoimnetModals>
    </Container>
  );
};

export default AllDoctors;
