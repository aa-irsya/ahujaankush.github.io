import Section from "@/components/Section";
import { flexBasis } from "@/constants";
import { ArticleSharp, CodeSharp, InfoSharp, ReportSharp } from "@mui/icons-material";
import { Box, Button, Chip, Link, Typography } from "@mui/joy";
import { Typewriter } from "react-simple-typewriter";

function TextLeft() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Chip size="lg" variant="outlined" color="success" startDecorator={<InfoSharp />}>Currently working on Kayf! <Link color={'success'}>Learn More -&gt;</Link></Chip>
        <Typography level="h1" sx={{ fontSize: '6rem' }}>
          Ankush Ahuja
        </Typography>
        <Typography level="h2" sx={{ fontSize: '4.5rem' }}>
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
      </Box>
      <Typography level="body-lg">
        High school student specializing in Software Engineering & Data Science, <br />based in Vienna, Austria. I also enjoy powerlifting.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: 2, marginY: 2 }}>
        <Button endDecorator={<CodeSharp />} size="lg" variant="outlined">
          Projects
        </Button>
        <Button component='a' href='Resume.pdf' endDecorator={<ArticleSharp />} size="lg" variant="outlined" color="neutral">
          Resume
        </Button>
      </Box>
    </Box>
  )
}

export default function Home() {
  return (
    <Section sx={{ height: '70vh', alignItems: 'flex-end', backgroundColor: 'background.surface' }}>
      <Box sx={{ display: 'flex', flexBasis: flexBasis, flexDirection: 'row', paddingY: 8 }}>
        <Box sx={{ width: '75%' }}>
          <TextLeft />
        </Box>
      </Box>
    </Section >
  )
}
