import { flexBasis } from "@/constants";
import { EmailSharp } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/joy";
import Image from "next/image";

export default function Navigation() {
  return (
    <Box sx={{
      position: 'fixed',
      flexGrow: 1,
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2
    }}>
      <Box
        sx={{
          flexBasis: `${flexBasis}`,
          display: 'flex'
        }}
      >
        {
          // /*
          <Image alt="Logo" src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" width={40} height={40} loading="lazy" style={{ display: 'flex', justifySelf: 'flex-start' }} />
          // */
        }
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1, columnGap: 3 }}>
          <Button color="neutral" variant="outlined" sx={{ border: 'none' }}>
            Projects
          </Button>
          <Button component='a' href='Resume.pdf' color="neutral" variant="outlined" sx={{ border: 'none' }}>
            Resume
          </Button>
          <Button component='a' href='mailto:aahuja06@proton.me' endDecorator={<EmailSharp />}>
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
