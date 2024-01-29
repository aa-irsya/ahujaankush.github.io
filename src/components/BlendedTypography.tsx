import { overusedGroteskMedium } from "@/pages";
import { Typography, styled } from "@mui/joy";

export default styled(Typography)(({ theme }) => ({
  fontFamily: overusedGroteskMedium.style.fontFamily,
  color: 'white',
  mixBlendMode: 'difference',
}))
