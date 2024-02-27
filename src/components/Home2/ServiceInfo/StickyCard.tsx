import { useState } from "react";
import {
  Card,
  CardActions,
  Button,
  Box,
  IconButton,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Collapse
} from "@mui/material";
import {
  FavoriteBorderRounded,
  ShareOutlined,
  MoreVert
} from "@mui/icons-material";

const StickyCard = () => {
  const [expanded, setExpanded] = useState(false);

  const expandedHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card sx={{ maxWidth: 400, width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "darkblue" }} aria-label="recipe">
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Software Technologies"
        subheader="TypeScript"
      />
      <CardContent>
        <Typography>
          TypeScript code converts to JavaScript, which runs anywhere JavaScript
          runs: In a browser, on Node.js or Deno and in your apps
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography>
            TypeScript stands in an unusual relationship to JavaScript.
            TypeScript offers all of JavaScript’s features, and an additional
            layer on top of these: TypeScript’s type system. For example,
            JavaScript provides language primitives like string and number, but
            it doesn’t check that you’ve consistently assigned these. TypeScript
            does.
          </Typography>
        </Collapse>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "1rem"
        }}
      >
        <CardActions>
          <Button onClick={expandedHandler} size="small">
            {expanded ? "Read Less" : "Read More"}
          </Button>
        </CardActions>

        <Box>
          <IconButton>
            <FavoriteBorderRounded />
          </IconButton>
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default StickyCard