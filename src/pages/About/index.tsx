import { Box } from "@mui/joy";
import TypographyStyled from "@/components/TypographyStyled";

export default function About() {
  return (
    <Box sx={{
      flexGrow: 1, backgroundColor: 'background.surface', borderTopLeftRadius: 35, borderTopRightRadius: 35, zIndex: 2, paddingTop: '35px',
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '2rem'
      }}>
        <TypographyStyled textTransform={'uppercase'} sx={{
          fontSize: {
            xs: '2rem',
            sm: '5vw'
          },
          fontWeight: 700,
          lineHeight: 1,
        }} level='title-lg'>
          About Me
        </TypographyStyled>
        <Box sx={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
          <TypographyStyled sx={{
            width: '40vw',
            fontSize: {
              xs: '1rem',
              sm: '1.5vw'
            }
          }} level="body-sm">
            I am a software engineering and data science student based in Vienna, Austria. In my free time, I participate in various competitive programming competitions and serve as the team leader for my school&apos;s Botball team. Additionally, I enjoy powerlifting.
          </TypographyStyled>
        </Box>
      </Box>
    </Box>
  )
}
