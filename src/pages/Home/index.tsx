import { Box, IconButton, Stack, Typography } from "@mui/joy";
import { Typewriter } from "react-simple-typewriter";
import BlendedTypography from "@/components/BlendedTypography";

export default function Home() {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, minHeight: '100vh', zIndex: 999, padding: '2rem'
    }}>
      <BlendedTypography textTransform={'uppercase'} sx={{
        fontSize: {
          xs: '2rem',
          sm: '8vw',
        },
        fontWeight: 700,
        lineHeight: 0.6,
        paddingY: 2,
      }} level='title-lg'>
        <Typography sx={{
          display: 'block',
        }}>
          Ankush Ahuja
        </Typography>
        <Typography sx={{
          display: 'bock',
          fontSize: {
            xs: '1.4rem',
            sm: '5vw'
          },
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
      </BlendedTypography>
      <BlendedTypography sx={{
        fontSize: {
          xs: '1rem',
          sm: '2vw'
        },
        color: 'white',
        mixBlendMode: 'difference',
      }} level="body-sm">
        Software Engineering & Data Science student<br />
        based in Vienna, Austria.
      </BlendedTypography>
    </Box>
  )
}
