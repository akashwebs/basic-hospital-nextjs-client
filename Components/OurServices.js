import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import Departments from "./Departments";

const OurServices = () => {
  return (
    <Box bgcolor={"#83c4ff"}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box pt={4}>
              <Box sx={{ display: { sm: "none", md: "block" } }}>
                <LocalPharmacyIcon sx={{ fontSize: "50px" }} />
              </Box>
              <Typography
                variant="h5"
                component={"h5"}
                sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2 }}
              >
                বিশেষজ্ঞ চিকিৎসক খুজুঁন
              </Typography>
              {/* <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2 }}
              >
                সার্বক্ষণিক বিশেষজ্ঞ ডাক্তার দ্বারা রোগীদের সেবা প্রদান করা হয়।
              </Typography> */}
            </Box>
            <Departments></Departments>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper>
              <Box p={4} bgcolor={"#5db2ff"} color="#fff">
                <PhoneForwardedIcon sx={{ fontSize: "50px" }} />
                <Typography
                  variant="h5"
                  component={"h5"}
                  sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2 }}
                >
                  জরুরি সেবা
                </Typography>
                <Typography
                  variant="p"
                  component={"p"}
                  sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2 }}
                >
                  যে কোনো জরুরী স্বাস্থ্য সেবা পেতে যোগাযোগ করুন 017-xxxxxxxxx
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box p={4}>
              <MedicalServicesIcon sx={{ fontSize: "50px" }} />
              <Typography
                variant="h5"
                component={"h5"}
                sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2 }}
              >
                ডায়গনিস্টিক পরীক্ষা
              </Typography>
              <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize: "1rem", fontWeight: "bold", mt: 2 }}
              >
                অত্যাধুনিক মেশিন দ্বারা অভিজ্ঞ ডাক্তার দিয়ে রোগ নির্ণয় করা হয় ।
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
