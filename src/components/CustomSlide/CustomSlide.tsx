import { Slide } from "@mui/material";
import { useState, useEffect } from "react";

const CustomSlide = ({
    in: In = true,
    timeout = 1000,
    delay = 0,
    ...props
  }) => {
    const [isIn, setIsIn] = useState(In && delay === 0);
  
    useEffect(() => {
      if (delay > 0) {
        setTimeout(() => setIsIn(true), delay);
      }
    });
  
    return (
      <Slide in={isIn} timeout={timeout} {...props} >
        {props.children}
      </Slide>
    );
  };

  export default CustomSlide