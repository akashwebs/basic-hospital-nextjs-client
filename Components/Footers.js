import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Image from "next/image";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#fff" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="#">
        Basic Aid Hosital
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footers = () => {
  return (
    <Container
      maxWidth="xl"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 4,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="#fff" gutterBottom>
            বেসিক এইড হসপিটাল
          </Typography>
          <Image src={"/logo.png"} width={100} height={100}></Image>
          <>
            <Typography variant="p" component={"p"} color={"#EDEDED"}>
              মানবসেবাই আমাদের ধর্ম মানবসেবাই আমাদের ধর্ম মানবসেবাই আমাদের ধর্ম
              মানবসেবাই আমাদের ধর্ম মানবসেবাই আমাদের ধর্ম মানবসেবাই আমাদের ধর্ম
              মানবসেবাই আমাদের ধর্ম
            </Typography>
          </>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="#fff" gutterBottom>
            আমাদের সেবা সমূহ
          </Typography>
          <ul>
            <li>
              <Link href="#" variant="subtitle1" color="#EDEDED">
                জরুরি বিভাগ
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="#EDEDED">
                ডেন্টাল
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="#EDEDED">
                ডায়াগনিস্টিক সেন্টার
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="#EDEDED">
                মা ও শিশু রোগ বিশেষজ্ঞ
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="#EDEDED">
                অ্যাম্বুলেন্স সার্ভিস
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="#fff" gutterBottom>
            গুরুত্বপূর্ণ তথ্য সমূহ
          </Typography>
          <ul>
            <li>
              <div>
                <Typography variant="p" component={"p"}>
                  অ্যাম্বুলেন্স সার্ভিস
                </Typography>
                <Typography variant="p" component={"p"}>
                  01716-129375
                </Typography>
              </div>
            </li>
            <li>
              <div>
                <Typography variant="p" component={"p"}>
                  পুলিশ(কচুয়া)
                </Typography>
                <Typography variant="p" component={"p"}>
                  01716-xxxxxxx
                </Typography>
              </div>
            </li>
            <li>
              <div>
                <Typography variant="p" component={"p"}>
                  ফায়ার সার্ভিস(কচুয়া)
                </Typography>
                <Typography variant="p" component={"p"}>
                  01716-xxxxxxx
                </Typography>
              </div>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="#fff" gutterBottom>
            যোগাযোগ করুন
          </Typography>
          <ul>
            <li>
              <div variant="subtitle1" color="#EDEDED">
                <Typography variant="p" component={"p"}>
                  যোকোন প্রয়োজনে
                </Typography>
                <Typography variant="p" component={"p"}>
                  01716-xxxxxxxx
                </Typography>
              </div>
            </li>
            <li>
              <div variant="subtitle1" color="#EDEDED">
                <Typography variant="p" component={"p"}>
                  ডাক্তারের সিরিয়ালের জন্য
                </Typography>
                <Typography variant="p" component={"p"}>
                  01716-xxxxxxx
                </Typography>
              </div>
            </li>
          </ul>

          <Typography
            variant="p"
            component={"p"}
            sx={{ py: 1, fontSize: "16px" }}
          >
            Follow Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Image src={"/facebook.png"} width={150} height={70}></Image>
            </Grid>
            <Grid item xs={4}>
              <Image src={"/app-store.png"} width={150} height={70}></Image>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Footers;