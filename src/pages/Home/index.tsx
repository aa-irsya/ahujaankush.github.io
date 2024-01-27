import { Email, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/joy";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import { overusedGroteskMedium } from "..";

export default function Home() {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, minHeight: '100vh', zIndex: 999, padding: '2rem'
    }}>
      <Typography textTransform={'uppercase'} sx={{
        fontSize: {
          xs: '2rem',
          sm: '8vw',
        },
        fontFamily: overusedGroteskMedium.style.fontFamily,
        fontWeight: 700,
        lineHeight: 1
      }} level='title-lg'>
        <Typography sx={{ display: 'block' }}>
          Ankush Ahuja
        </Typography>
        <Typography sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '5vw'
          },
          display: 'block'
        }}>
          <Typewriter
            words={['Software Engineer', 'Data Scientist', 'Robotics Ethusiast']}
            cursor
            loop={0}
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </Typography>
      </Typography>
      <Typography sx={{
        fontSize: {
          xs: '1rem',
          sm: '2vw'
        }
      }} level="body-sm">
        Software Engineering & Data Science student<br />
        based in Vienna, Austria.
      </Typography>
    </Box>
  )
}
