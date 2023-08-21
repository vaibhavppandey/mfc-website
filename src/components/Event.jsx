import { ThemeProvider, createTheme, FormControl, MenuItem, Select, Typography, Card, CardContent } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from "react";

function EventCard({ title, body }) {
  return (
    <Card
      sx={{ bgcolor: 'transparent', height: '12rem', width: '28rem', borderRadius: '24px' }}       
      className="rounded-lg w-100"
      raised
    >
      <CardContent className="h-full flex rounded w-100 bg-gradient-to-b from-amber-600 to-amber-400 items-center">
        <img
          src="/image-38@2x.png"
          alt="Event"
          className="w-32 h-32 mr-4"
        />
        <div className="flex-1 flex flex-col">
          <Typography variant="h3">
            {title}
          </Typography>
          <Typography variant="body2">
            {body}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}


export default function Event() {
  const slides = [
    "image-38@2x.png",
    "image-381@2x.png",
    "image-382@2x.png",
    "image-383@2x.png",
    "image-384@2x.png",
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

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="h-screen m-4 flex flex-col justify-center items-center">
        <Typography className="bg-gradient-to-t from-purple-600 to-amber-600 bg-clip-text text-transparent" variant="h3">Check out the Events at MFC</Typography>

        <div className="text-center mt-4">
          <Typography variant="body2">
            MFC VIT Boasts a wide array of successful events conducted throughout<br />
            the year including speaker sessions with renowned technocrats,<br />
            competitive coding events, and many more.
          </Typography>
        </div>

        <div className="text-center mt-4">
          <FormControl sx={{ width: '250px' }}>
            <Select
              className="bg-[#d97706]"
              value={year}
              onChange={handleChange}
              sx={{
                my: 4,
                borderRadius: '50px',
                fontSize: '1.2em',
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

        <EventCard title="ML Marvel" body="you know what, sometimes I wonder if niggaswanna see em fall bro. I wonder if this work yar lol but seriously though what is niggas wanna see me fall?" />

        {/* <div className={styles.carousel}>
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
        </div>
        </div> */}
      </div>
    </ThemeProvider>
  );
};

        // <EventCard title="ML Marvel" body="you know what, sometimes I wonder if niggaswanna see em fall bro. I wonder if this work yar lol but seriously though what is niggas wanna see me fall?"></EventCard>