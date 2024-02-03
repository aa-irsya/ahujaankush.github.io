import { Box, Card, CardContent, CardCover, Skeleton, Typography } from "@mui/joy";
import TypographyStyled from "@/components/TypographyStyled";

interface Project {
  title: string;
  img: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'DataVis',
    img: '',
    description: "Placeholder",
  },
  {
    title: 'Waczy',
    img: '',
    description: "Placeholder",
  },
  {
    title: 'Awesome Dotfiles',
    img: '',
    description: "Placeholder",
  },
  {
    title: 'C++ Botball API',
    img: '',
    description: "Placeholder",
  },
]

export default function Projects() {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', height: '100vh', padding: '2rem', flexGrow: 1, backgroundColor: 'background.surface', zIndex: 3
    }}>
      <TypographyStyled textTransform={'uppercase'} sx={{
        fontSize: {
          xs: '2rem',
          sm: '5vw'
        },
        fontWeight: 700,
        lineHeight: 1,
      }} level='title-lg'>
        Projects
      </TypographyStyled>
      <Box sx={{
        paddingTop: '2rem',
        display: 'flex',
        overflowY: 'auto',
        flexDirection: 'column',
        rowGap: '2rem',
        flexGrow: 1,
      }}>
        {
          projects.map((e, i) => {
            let content = [
              <Card sx={{
                display: 'flex',
                width: { xs: '100%', lg: '50%', },
                flexGrow: 1,
              }}
                key={i + '_' + 1}>
                <CardCover>
                  <img
                    src={e.img}
                    loading="lazy"
                    alt={e.title}
                  />
                </CardCover>
                <CardContent sx={{ display: 'flex', flexGrow: 1, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: (i % 2) == 0 ? 'flex-start' : 'flex-end' }}>
                  <Typography
                    level="body-lg"
                    fontWeight="lg"
                    textColor="#fff"
                  >
                    {e.title}
                  </Typography>
                </CardContent>
              </Card>,
              <Box key={i + '_' + 2}>
                <TypographyStyled sx={{
                  display: 'block',
                  textTransform: 'uppercase',
                  fontSize: {
                    xs: '1.4rem',
                    sm: '5vw'
                  },
                }}>
                  {e.title}
                </TypographyStyled>
                <TypographyStyled sx={{
                  width: { xs: '100%', lg: '40vw' },
                  fontSize: {
                    xs: '1rem',
                    sm: '1.5vw'
                  }
                }} level="body-sm">
                  {e.description}
                </TypographyStyled>
              </Box>

            ]
            return (
              <Box sx={{
                display: 'flex', flexGrow: 1, columnGap: '5rem', rowGap: '1rem', minHeight: '100%', flexDirection: {
                  xs: (i + 1) % 2 == 0 ? 'column-reverse' : 'column',
                  lg: 'row'
                }
              }} key={i}>
                {
                  ((i + 1) % 2 == 0) ? (
                    <>
                      {content[0]}
                      {content[1]}
                    </>
                  ) : (
                    <>
                      {content[1]}
                      {content[0]}
                    </>
                  )
                }
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}
