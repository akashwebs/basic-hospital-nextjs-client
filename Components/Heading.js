import { Divider, Typography } from "@mui/material";
import React from "react";

const Heading = ({ children }) => {
  return (
    <Divider>
      <Typography
        variant="h5"
        component={"h5"}
        // sx={{ textAlign: "center", fontSize: "3rem", margin: "25px 0 10px" }}
        className="text-5xl my-8"
      >
        {children}
      </Typography>
    </Divider>
  );
};

export default Heading;
