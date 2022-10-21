import { Divider, Typography } from "@mui/material";
import React from "react";

const Heading = ({ children, color }) => {
  return (
    <Divider>
      <Typography
        variant="h6"
        color={color ? color : "#fff"}
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
          background: color ? color : "#fff",
          marginTop: "-15px",
          marginBottom: "20px",
        }}
      ></div>
    </Divider>
  );
};

export default Heading;
