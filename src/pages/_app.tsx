import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Box, CssBaseline, CssVarsProvider, useColorScheme } from '@mui/joy'
import theme from "@/theme";
import { useEffect, useRef, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState();

  return (
    <CssVarsProvider disableTransitionOnChange theme={theme}>
      <CssBaseline />
      <Component {...pageProps} colorScheme={colorScheme} setColorScheme={setColorScheme} />
    </CssVarsProvider>
  )
}
