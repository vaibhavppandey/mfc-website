import { FormControl, MenuItem, Select } from "@mui/material";
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
  const slideContent = [
    {
      heading: "Event One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum tempore consequuntur culpa asperiores error non eligendi nesciunt cum, quasi earum, harum porro enim. Ea exercitationem beatae corporis nostrum sint.",
    },
    {
      heading: "Event Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum tempore consequuntur culpa asperiores error non eligendi nesciunt cum, quasi earum, harum porro enim. Ea exercitationem beatae corporis nostrum sint.",
    },
    {
      heading: "Event Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum tempore consequuntur culpa asperiores error non eligendi nesciunt cum, quasi earum, harum porro enim. Ea exercitationem beatae corporis nostrum sint.",
    },
  ];

  const indicatorLIs = slides.map((_, index) => (
    <img
      src={
        index === slideIndex ? "dot-indictaor--1.svg" : "dot-indictaor--2.svg"
      }
      style={{
        padding: "4px",
      }}
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
    <div
      className={`${styles.events} bg-[#222] h-full flex flex-col items-center overflow-auto leading-6 p-2`}
    >
      <h1
        className={`${styles.heading} text-center mt-6 font-montserrat text-transparent`}
        style={{
          background: "radial-gradient(circle, #f6842a, #af7af2)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        Events at MFC VIT
      </h1>

      <div
        className={`${styles.about} text-center text-white mt-6 font-raleway w-3/5`}
      >
        <p>
          MFC VIT Boasts A Wide Array Of Successful Events Conducted Throughout
          The Year Including Speaker Sessions With Renowned Technocrats, The
          Year Including Speaker Sessions With Renowned Technocrats, Competitive
          Coding Events, And Many More.
        </p>
      </div>

      <div className={`${styles.year_select} text-center`}>
        <FormControl sx={{ width: "250px" }}>
          <Select
            className="bg-[#ff6a00]"
            value={year}
            onChange={handleChange}
            sx={{
              my: 3,
              borderRadius: "50px",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "1.2em",
              height: "2.5em",
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

      <div
        className={`${styles.carousel} w-3/5 m-3 p-4 relative`}
        style={{
          "border-radius": "36px",
          background: "linear-gradient(180deg, #f9a826, #fcc8d2 100%)",
        }}
      >
        <div
          className={`${styles.content} flex items-center py-2 font-raleway`}
        >
          <img
            className={`${styles.col_1} object-contain h-auto w-1/2`}
            src={slides[slideIndex + 0]}
          />

          <div
            className={`${styles.box_border} box-border w-[0.04rem] h-[16rem] border-r-[0.7px] border-solid border-saddlebrown mx-2`}
          ></div>

          <div className={`${styles.col_2} text-center w-1/2`}>
            <h2 className="my-2">{slideContent[slideIndex].heading}</h2>
            <p>{slideContent[slideIndex].description}</p>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center h-8">
        <div className="flex items-center">
          <img
            className="cursor-pointer hover:scale-110"
            src="arrow-left.svg"
            onClick={prevSlide}
          />
          <div className="flex flex-row justify-between">{indicatorLIs}</div>
          <img
            className="cursor-pointer hover:scale-110"
            src="arrow-right.svg"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};
