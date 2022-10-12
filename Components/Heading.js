import { Divider, Typography } from "@mui/material";
import React from "react";

const Heading = ({ children }) => {
  return (
    <Divider>
   
        <Typography
          variant="h6"
          color="#fff"
          gutterBottom
          sx={{
            fontSize: { xs: "20px", md: "35px" },
            fontWeight: "bold",
            mt: 4,
          }}
        >
          {children}
        </Typography>
        <div
          style={{
            height: "2px",
            width: "45%",
            background: "#fff",
            marginTop: { xs: "15px", sm: "-15px" },
            marginBottom: "15px",
          }}
        ></div>
   
    </Divider>
  );
};

export default Heading;
