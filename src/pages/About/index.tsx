import { Box} from "@mui/joy";
import { overusedGroteskMedium } from "..";
import BlendedTypography from "@/components/BlendedTypography";

export default function About() {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh', zIndex: 999, flexGrow: 1, padding: '2rem'
    }}>
      <BlendedTypography textTransform={'uppercase'} sx={{
        fontSize: {
          xs: '2rem',
          sm: '5vw'
        },
        fontWeight: 700,
        lineHeight: 1,
      }} level='title-lg'>
        About Me
      </BlendedTypography>
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}>
        <BlendedTypography sx={{
          width: '40vw',
          fontSize: {
            xs: '1rem',
            sm: '1.5vw'
          }
        }} level="body-sm">
          I am a software engineering and data science student based in Vienna, Austria. In my free time, I participate in various competitive programming competitions and serve as the team leader for my school&apos;s Botball team. Additionally, I enjoy powerlifting.
        </BlendedTypography>
      </Box>
    </Box>
  )
}
