import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "sans-serif", fontWeight: 'bold' }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "sans-serif" }} variant="h4">
          Built using MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;
