import {
  Container,
  Grid,
  Link,
  Typography,
  CardActionArea,
  Divider,
} from "@mui/material";
import React from "react";
import Heading from "./Heading";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
const AboutUs = () => {
  return (
    <Container
      maxWidth="lg"
      component="div"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 4,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item xs={12} sm={6}>
          {/* card imag  */}
          <Card sx={{ maxWidth: 400 }} className="kader-gradiant">
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image="/kader.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  color="#fff"
                >
                  Dr. Abdul Kader
                </Typography>
                <Typography variant="body2" color="#fff">
                  Chairman of Basic Aid Hosptial
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            color="#fff"
            gutterBottom
            sx={{ fontSize: { xs: "20px", md: "35px" }, fontWeight: "bold" }}
          >
            বেসিক এইড হসপিটাল
          </Typography>
          <div
            style={{
              height: "2px",
              width: "20%",
              background: "#fff",
              marginTop: { xs: "15px", sm: "-15px" },
              marginBottom: "15px",
            }}
          ></div>
          <>
            <Typography
              variant="p"
              component={"p"}
              color={"#EDEDED"}
              textAlign={"justify"}
            >
              আমরা পুরো ব্যক্তির যত্ন নিই, প্রতিটি ব্যক্তির জীবনের জটিলতা এবং
              তাদের জীবন ও স্বাস্থ্যের মান উন্নত করার সর্বোত্তম উপায়।আমরা পুরো
              ব্যক্তির যত্ন নিই, প্রতিটি ব্যক্তির জীবনের জটিলতা এবং তাদের জীবন ও
              স্বাস্থ্যের মান উন্নত করার সর্বোত্তম উপায়।আমরা পুরো ব্যক্তির যত্ন
              নিই, প্রতিটি ব্যক্তির জীবনের জটিলতা এবং তাদের জীবন ও স্বাস্থ্যের
              মান উন্নত করার সর্বোত্তম উপায়। আমরা পুরো ব্যক্তির যত্ন নিই,
              প্রতিটি ব্যক্তির জীবনের জটিলতা এবং তাদের জীবন ও স্বাস্থ্যের মান
              উন্নত করার সর্বোত্তম উপায়।আমরা পুরো ব্যক্তির যত্ন নিই, প্রতিটি
              ব্যক্তির জীবনের জটিলতা এবং তাদের জীবন ও স্বাস্থ্যের মান উন্নত করার
              সর্বোত্তম উপায়।আমরা পুরো ব্যক্তির যত্ন নিই, প্রতিটি ব্যক্তির
              জীবনের জটিলতা এবং তাদের জীবন ও স্বাস্থ্যের মান উন্নত করার
              সর্বোত্তম উপায়।
            </Typography>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
