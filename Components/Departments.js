import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Link from "next/link";

const Departments = () => {
  const [department, setDepartment] = React.useState("all");

  const specialists = [
    { keyName: "department", value: "মেডিসিন বিশেষজ্ঞ", name: "medicine" },
    {
      keyName: "department",
      value: "কার্ডিওলজি বিশেষজ্ঞ",
      name: "cardiology",
    },
    {
      keyName: "department",
      value: "নেফ্রোলজি বিশেষজ্ঞ",
      name: "nephrology",
    },
    {
      keyName: "department",
      value: "স্ত্রীরোগ বিশেষজ্ঞ",
      name: "gynecologist",
    },
    { keyName: "department", value: "শিশু বিশেষজ্ঞ", name: "pediatrician" },
    {
      keyName: "department",
      value: "গ্যাস্ট্রোএন্টারোলজি বিশেষজ্ঞ",
      name: "gastroenterology",
    },
    {
      keyName: "department",
      value: "ডায়াবেটিস বিশেষজ্ঞ",
      name: "diabetologist",
    },
    {
      keyName: "department",
      value: "অর্থোপেডিকস বিশেষজ্ঞ",
      name: "orthopedics",
    },
    {
      keyName: "department",
      value: "চর্ম যৌন বিশেষজ্ঞ",
      name: "dermatologist",
    },
    {
      keyName: "department",
      value: "নিউরোলজিস্ট বিশেষজ্ঞ",
      name: "neurologist",
    },
  ];
  let searchQuery = "all";


  return (
    <Paper
      component="form"
      sx={{
        p: "10px 1px 10px 8px",
        display: "flex",
        alignItems: "center",
        mr: { sm: 0, md: 2 },
        mb: 2,
        mt: 2,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Search Specialist</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Select Department"
          onChange={(e) => setDepartment(e.target.value)}
          className=""
          sx={{ outline: "0", border: "0" }}
        >
          {specialists.map((sp, index) => (
            <MenuItem key={index} value={sp.name}>
              {sp.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Link href={`/search-doctors/${department}`}>
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default Departments;
