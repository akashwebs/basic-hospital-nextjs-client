import React from "react";
import AllDoctors from "../Components/AllDoctors";
import { allDoctors } from "../lib/helper";
import { useQuery } from "@tanstack/react-query";
const Doctors = () => {
  const { data: doctors, isLoading: doctorsLoading } = useQuery(
    ["doctors"],
    allDoctors
  );

  return (
    <div>
      <AllDoctors
        doctors={doctors}
        doctorsLoading={doctorsLoading}
      ></AllDoctors>
    </div>
  );
};

export default Doctors;
