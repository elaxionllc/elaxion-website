import React, { useState, useEffect } from "react";
import { Slide, SlideProps } from "@mui/material";
import { useInView } from "react-intersection-observer";

const CustomScrollSlide = ({ direction, timeout, children }: SlideProps) => {
  const [ref, inView] = useInView({
    threshold: 0, // Triggers when the element becomes fully visible
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      // The element is in view, start or restart the animation
      setAnimate(true);
    } else {
      // The element is out of view, reset the animation
      setAnimate(false);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Slide in={animate} direction={direction} timeout={timeout} unmountOnExit>
        {children}
      </Slide>
    </div>
  );
};

export default CustomScrollSlide;
