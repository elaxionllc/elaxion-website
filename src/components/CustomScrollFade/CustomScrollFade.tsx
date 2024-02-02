import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const CustomScrollFade = ({ ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <Fade
      in={inView}
      {...props}
      timeout={props.timeout ?? 700}
      ref={ref}
      
      easing={{
        enter: "cubic-bezier(1, 0.03, 0.46, 0.99)",
        exit: "cubic-bezier(1, 0.03, 0.46, 0.99)",
      }}
    >
      <span className="act">{props.children}</span>
    </Fade>
  );
};

export default CustomScrollFade;
