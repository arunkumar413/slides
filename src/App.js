import React, { useState } from "react";
import "./styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./w3css.css";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from './slides/Slide4';

import { Box, Grid, Typography } from "@material-ui/core";
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  var slides = [
    { component: <Slide1 />, title: "Welcome to slide1" },
    { component: <Slide2 />, title: "Welcome to Slide2 " },
    { component: <Slide3 />, title: "Welcome to Slide2 " },
    { component: <Slide4 />, title: "Welcome to Slide2 " }

  ];

  return (
    <div className="App w3-vivid-purplish-blue">
      <Grid
        container
        direction="row"
        justify="center"
        style={{ height: "95vh" }}
      >
        <Grid xs={12} item>{slides[currentSlide].component}</Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item>
            <Typography variant="caption">
              {slides[currentSlide].title}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="caption">
              {" "}
              {currentSlide + 1 + "/" + slides.length + "slides"}
            </Typography>
          </Grid>

          <Grid item>
            <ArrowBackIosIcon
              color="primary"
              fontSize="large"
              onClick={() =>
                currentSlide == 0
                  ? setCurrentSlide(0)
                  : setCurrentSlide(currentSlide - 1)
              }
            />
          </Grid>

          <Grid item>
            <ArrowForwardIosIcon
              color="primary"
              fontSize="large"
              onClick={() =>
                currentSlide === slides.length - 1
                  ? setCurrentSlide(slides.length - 1)
                  : setCurrentSlide(currentSlide + 1)
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
