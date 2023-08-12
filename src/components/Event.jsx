import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import styles from "./event.module.css";

export const Event = () => {
  const slides = [
    "slide-image@2x.png",
    "rectangle-3014@2x.png",
    "slide-image1@2x.png",
  ];

  const [year, setYear] = useState("2023");
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    if (slideIndex === 0) setSlideIndex(slides.length - 1);
    else setSlideIndex(slideIndex - 1);
  };

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className={styles.event}>
      <div className={styles.heading}>
        <h1 className="text-goldenrod text-center">Events</h1>
      </div>

      <div className="text-center mt-4">
        <p>
          MFC VIT Boasts A Wide Array Of Successful Events Conducted Throughout
        </p>
        <p>The Year Including Speaker Sessions With Renowned Technocrats,</p>
        <p>Competitive Coding Events, And Many More.</p>
      </div>

      <div className="text-center mt-4">
        <FormControl>
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            className="bg-orange"
            labelId="year-select-label"
            id="year-select"
            value={year}
            onChange={handleChange}
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

      <div className={styles.carousel}>
        <div className={`${styles["slideshow-container"]}`}>
          <div className={styles.slide}>
            <div className={styles.numbertext}>
              {slideIndex} / {slides.length}
            </div>
            <img src={slides[slideIndex + 0]} />
            <div className={styles.text}>Caption Text</div>
          </div>

          <a className={styles.prev} onClick={prevSlide}>
            {"<"}
          </a>
          <a className={styles.next} onClick={nextSlide}>
            {">"}
          </a>
        </div>

        {/* <div className={`${styles["nav"]} text-center`}>
          <span className={styles.dot} onClick={() => {}}></span>
          <span className={styles.dot} onClick={() => {}}></span>
          <span className={styles.dot} onClick={() => {}}></span>
        </div> */}
      </div>
    </div>
  );
};
