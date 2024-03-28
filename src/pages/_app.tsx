import "@/styles/globals.css";
import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CssVarsProvider
      defaultMode="dark"
      disableTransitionOnChange
    >
      <Box sx={{backgroundColor: 'background.body'}}>
        <Component {...pageProps} />
      </Box>
      <CssBaseline />
    </CssVarsProvider>
  )
}
