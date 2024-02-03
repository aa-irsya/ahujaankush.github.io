import { Box, Typography } from "@mui/joy";
import { Typewriter } from "react-simple-typewriter";
import StyledTypgraphy from "@/components/TypographyStyled";

export default function Home({ colorScheme, setColorScheme }: { colorScheme: string, setColorScheme: Function }) {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, minHeight: '100vh', zIndex: 1, padding: '2rem'
    }}>
      <Box className="backgroundGradient" sx={{
        position: 'absolute',
        margin: 'auto',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -999,
        opacity: colorScheme == 'dark' ? 0.2 : 0.5,
        backgroundImage: 'linear-gradient(to right, #ff8a30 0%, #F7467B 25%, #B467F9 50%, #2BFCFC 75%, #00FFB1 100%)'
      }}></Box>
      <StyledTypgraphy textTransform={'uppercase'} sx={{
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
      </StyledTypgraphy>
      <StyledTypgraphy sx={{
        fontSize: {
          xs: '1rem',
          sm: '2vw'
        },
        color: 'white',
        mixBlendMode: 'difference',
      }} level="body-sm">
        Software Engineering & Data Science student<br />
        based in Vienna, Austria.
      </StyledTypgraphy>
    </Box>
  )
}
