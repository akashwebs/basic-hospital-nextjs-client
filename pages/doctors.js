import React from "react";
import AllDoctors from "../Components/AllDoctors";
import { allDoctors } from "../lib/helper";
import { useQuery } from "@tanstack/react-query";
const doctors = () => {
  const { data: doctors, isLoading: doctorsLoading } = useQuery(
    ["doctors"],
    allDoctors
  );

  return (
    <div>
      <AllDoctors doctors={doctors}></AllDoctors>
    </div>
  );
};

export default doctors;
