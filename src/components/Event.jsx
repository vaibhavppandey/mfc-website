import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import styles from "./event.module.css";

export const Event = () => {
  const [year, setYear] = useState("2023");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className={styles.event}>
      <div className={styles.heading}>
        <h1 style={{ color: "#ffbc59" }}>Events</h1>
      </div>

      <div className={styles.about}>
        <p>
          MFC VIT Boasts A Wide Array Of Successful Events Conducted Throughout
        </p>
        <p>The Year Including Speaker Sessions With Renowned Technocrats,</p>
        <p>Competitive Coding Events, And Many More.</p>
      </div>

      <div className={styles.year}>
        <FormControl>
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={year}
            onChange={handleChange}
            style={{
              backgroundColor: "#ff6a00",
            }}
          >
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="carousel"></div>
    </div>
  );
};
