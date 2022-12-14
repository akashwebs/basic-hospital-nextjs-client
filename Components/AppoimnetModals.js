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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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
const AppoimnetModals = ({ open, setOpen, modalDoctor: doctor }) => {
  const [copyText, setCopyText] = React.useState(null);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setCopyText(null);
  }, [doctor]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const textCopy = (data) => {
    const a = navigator.clipboard.writeText(data);
    if (a) {
      setCopyText("copied");
    }
  };

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
        <Box sx={style} id="modal-in-mobile-size">
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "25px",
              width: "25px",
              height: "25px",
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <Divider
            id="transition-modal-title"
            className="text-color"
            sx={{ fontSize: "1.5rem" }}
          >
            ???????????????????????????????????????????????? ????????????
          </Divider>
          <br />
          <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
            columns={{ xs: 1, sm: 1, md: 8 }}
          >
            <Grid item xs={2} sm={4} md={4} sx={{ height: "100%" }}>
              <Item variant="none">
                <Image
                  src={doctor?.img}
                  alt="Picture of the author"
                  width={344}
                  height={239}
                />
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{ color: "#000", fontSize: { xs: "1rem", sm: "1.5rem" } }}
                >
                  {doctor?.depertmentName}
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
                    {doctor?.doctorName}
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{ color: "#000", fontSize: ".9rem", marginTop: "5px" }}
                  >
                    {doctor?.degree}
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{
                      color: "#000",
                      marginTop: { xs: "20px", sm: "35px" },
                      fontSize: { xs: "1rem", sm: "1.3rem" },
                    }}
                  >
                    ???????????? ?????????????????? <br /> {doctor?.seeDays}
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{
                      color: "#000",
                      marginTop: "5px",
                      fontSize: { xs: "1rem", sm: "1.3rem" },
                    }}
                  >
                    {doctor?.seeTimes}
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{
                      color: "#000",
                      marginTop: { xs: "15px", sm: "35px" },
                      fontSize: { xs: "1rem", sm: "1.3rem" },
                      fontWeight: "bold",
                    }}
                  >
                    ?????????????????????????????? ???????????????<br></br>{" "}
                    <span onClick={() => textCopy(doctor?.serialNumber)}>
                      {doctor?.serialNumber}{" "}
                      <span style={{ cursor: "pointer" }}>
                        <ContentCopyIcon fontSize="12" />
                      </span>
                      <p
                        style={{
                          color: "green",
                          marginLeft: "15px",
                          fontSize: ".8rem",
                        }}
                      >
                        {copyText}
                      </p>
                    </span>
                  </Typography>
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{
                      color: "#000",
                      marginTop: "5px",
                      fontSize: { xs: "1rem", sm: "1.3rem" },
                    }}
                  >
                    ????????? ???????????????????????? {doctor?.roomNumber}
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
