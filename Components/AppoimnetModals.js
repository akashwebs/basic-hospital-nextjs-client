import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const AppoimnetModals = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{ overflow: "scroll" }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Divider
            id="transition-modal-title"
            className="text-color"
            sx={{ fontSize: "1.5rem" }}
          >
            অ্যাপয়েন্টমেন্ট করুন
          </Divider>
          <br />
          <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
            columns={{ xs: 1, sm: 1, md: 8 }}
          >
            <Grid item xs={2} sm={4} md={4} sx={{ height: "100%" }}>
              <Item>
                <Image
                  src="https://dhakadoctor-sg.s3.amazonaws.com/media/doctor_profile/Dr._Selina_Husna_Banu.jpg"
                  alt="Picture of the author"
                  width={344}
                  height={239}
                />
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{ color: "#000" }}
                >
                  শিশু নিউরোলজি বিশেষজ্ঞ
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} sx={{ height: "100%" }}>
              <Item>
                <div>
                  <Typography
                    variant="h5"
                    component={"h5"}
                    sx={{
                      color: "#000",
                      fontSize: "1.3rem",
                      marginTop: "15px",
                    }}
                  >
                    ​ডাঃ শেখ মারুফুজ্জামান
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{ color: "#000", fontSize: ".9rem", marginTop: "5px" }}
                  >
                    এমবিবিএস, এমডি (কার্ডিওলজি)
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{
                      color: "#000",
                      fontSize: "1.3rem",
                      marginTop: "35px",
                    }}
                  >
                    রোগী দেখেনঃ শনিবার - বৃহস্পতিবার
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{ color: "#000", fontSize: "1.3rem", marginTop: "5px" }}
                  >
                    দুপুর ৩টা - রাত ৮টা
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{
                      color: "#000",
                      fontSize: "1.3rem",
                      marginTop: "35px",
                    }}
                  >
                    সিরিয়ােলর জন্যঃ 01818 410 710
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{ color: "#000", fontSize: "1.3rem", marginTop: "5px" }}
                  >
                    রুম নাম্বারঃ ২০২
                  </Typography>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppoimnetModals;
