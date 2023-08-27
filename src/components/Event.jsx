import { Button, FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import styles from "./event.module.css";

export const Event = () => {
  const slides = [
    "slide-image@2x.png",
    "rectangle-3014@2x.png",
    "rectangle-36@2x.png",
  ];

  const [year, setYear] = useState("2023");
  const [slideIndex, setSlideIndex] = useState(0);

  const indicatorLIs = slides.map((_, index) => (
    <img
      src={
        index === slideIndex ? "dot-indictaor--1.svg" : "dot-indictaor--2.svg"
      }
      alt="Slide Indicator"
    />
  ));

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
    <div className={styles.events}>
      <div className="mt-16"></div>
      <h1 className={styles.heading}>Events at MFC VIT</h1>

      <div className={styles.about}>
        <p>
          MFC VIT Boasts A Wide Array Of Successful Events Conducted Throughout
        </p>
        <p>The Year Including Speaker Sessions With Renowned Technocrats,</p>
        <p>Competitive Coding Events, And Many More.</p>
      </div>

      <div className={styles.year_select}>
        <FormControl sx={{ width: "250px" }}>
          <Select
            className="bg-[#ff6a00] font-montserrat"
            value={year}
            onChange={handleChange}
            sx={{
              my: 4,
              borderRadius: "50px",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "1.2em",
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

      <div className={styles.carousel}>
        {/* <p className={styles.slide_count}>{slideIndex + 1} / {slides.length}</p> */}
        <div className={styles.content}>
          <img className={styles.col_1} src={slides[slideIndex + 0]} />
          <div class="box-border w-[0.04rem] h-[16rem] border-r-[0.7px] border-solid border-saddlebrown mx-2"></div>
          {/* <div class="box-border h-full w-[1px] border-r-[1px] border-solid border-black mx-[1px]"></div> */}
          <div className={styles.col_2}>
            <h1 className="text-black">Event Name</h1>
            <p className="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              ipsa, quae molestiae maxime culpa unde aliquam velit, dolore dicta
              cupiditate odio. Accusantium nihil quam aliquam reprehenderit
              officia iusto ducimus nesciunt.
            </p>
          </div>
        </div>
        {/* <Button className={styles.register}>Register for Event</Button> */}
      </div>
      <div className="flex w-full justify-center h-8">
        <div className="flex justify-between items-center w-1/4">
          <img src="arrow-left.svg" onClick={prevSlide} />
          <div className="flex flex-row justify-between w-1/4 ">
            {indicatorLIs}
          </div>
          <img src="arrow-right.svg" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};
