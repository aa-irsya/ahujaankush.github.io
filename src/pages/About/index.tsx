import { Box, Typography } from "@mui/joy";
import { overusedGroteskMedium } from "..";

export default function About() {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh', zIndex: 999, flexGrow: 1, padding: '2rem'
    }}>
      <Typography textTransform={'uppercase'} sx={{
        fontSize: {
          xs: '2rem',
          sm: '5vw'
        },
        fontFamily: overusedGroteskMedium.style.fontFamily,
        fontWeight: 700,
        lineHeight: 1
      }} level='title-lg'>
        About Me
      </Typography>
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}>
        <Typography sx={{
          width: '40vw',
          fontSize: {
            xs: '1rem',
            sm: '1.5vw'
          }
        }} level="body-sm">
          I am a software engineering and data science student based in Vienna, Austria. In my free time, I participate in various competitive programming competitions and serve as the team leader for my school&apos;s Botball team. Additionally, I enjoy powerlifting.
        </Typography>
      </Box>
    </Box>
  )
}
