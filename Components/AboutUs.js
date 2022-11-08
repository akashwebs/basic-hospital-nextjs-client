import {
  Container,
  Grid,
  Link,
  Typography,
  CardActionArea,
  Divider,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import "swiper/css";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

// import "../styles/Header.css";
import { Autoplay, EffectCreative, Pagination } from "swiper";

const AboutUs = ({ color }) => {
  return (
    <Container
      maxWidth="lg"
      component="div"
      sx={{
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
                  color={color ? color : "#111"}
                >
                  Abdul Kader
                </Typography>
                <Typography variant="body2" color={color ? color : "#111"}>
                  Chairman of Basic Aid Hosptial
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            color={color ? color : "#111"}
            gutterBottom
            sx={{ fontSize: { xs: "20px", md: "35px" }, fontWeight: "bold" }}
          >
            বেসিক এইড হসপিটাল
          </Typography>
          <div
            style={{
              height: "2px",
              width: "20%",
              background: color ? color : "#111",
              marginTop: { xs: "15px", sm: "-15px" },
              marginBottom: "15px",
            }}
          ></div>
          <>
            <Typography
              variant="p"
              component={"p"}
              color={color ? color : "#111"}
              textAlign={"justify"}
              fontSize={18}
            >
              বেসিক এইড এন্ড হসপিটাল হল একটি পূর্ণ-পরিষেবা হাসপাতাল যা বিস্তৃত
              পরিসরের ইনপেশেন্ট এবং বহির্বিভাগের রোগীদের পরিষেবা প্রদান করে।
              আমরা আমাদের রোগীদের সর্বোচ্চ মানের যত্ন এবং গ্রাহক পরিষেবা প্রদান
              করতে প্রতিশ্রুতিবদ্ধ। আমাদের হাসপাতালের বৈশিষ্ট্যগুলির মধ্যে
              রয়েছে: ব্যক্তিগত রোগীর কক্ষ একটি অত্যাধুনিক জরুরী বিভাগ একটি
              পূর্ণ-পরিষেবা পরীক্ষাগার আমরা বিস্তৃত পরিসরের পরিষেবা দেই এবং
              উদ্ভূত যে কোনও পরিস্থিতি মোকাবেলায় সজ্জিত। আপনি একটি রুটিন
              চেক-আপের জন্য আসছেন বা জরুরী যত্নের প্রয়োজন কিনা, আমরা আপনার জন্য
              এখানে আছি। আমাদের কর্মীরা অত্যন্ত দক্ষ এবং অভিজ্ঞ পেশাদারদের নিয়ে
              গঠিত যারা আপনাকে সর্বোত্তম সম্ভাব্য যত্ন প্রদানের জন্য নিবেদিত।
              আপনার প্রয়োজনীয় চিকিৎসা নিশ্চিত করতে আমরা সর্বশেষ প্রযুক্তি এবং
              সরঞ্জাম ব্যবহার করি। আমরা বুঝি যে হাসপাতালে আসা একটি চাপের
              অভিজ্ঞতা হতে পারে। সেজন্য আমরা আপনার থাকার যতটা সম্ভব আরামদায়ক
              এবং আরামদায়ক করার জন্য আমরা যা করতে পারি তা করি। আমাদের সাথে
              আপনার থাকার যতটা সম্ভব আনন্দদায়ক করতে আমরা বিভিন্ন ধরনের
              সুযোগ-সুবিধা এবং পরিষেবা অফার করি। আমরা এলাকার একটি নেতৃস্থানীয়
              হাসপাতাল হিসাবে গর্বিত এবং আপনাকে সর্বোত্তম সম্ভাব্য যত্ন প্রদান
              করতে প্রতিশ্রুতিবদ্ধ। আমাদের হাসপাতাল সম্পর্কে আরও জানতে এবং আমরা
              কীভাবে আপনাকে সাহায্য করতে পারি তা জানতে আজই আমাদের সাথে যোগাযোগ
              করুন।
            </Typography>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
