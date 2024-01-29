import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Box, CssBaseline, CssVarsProvider, useColorScheme } from '@mui/joy'
import { useEffect, useRef, useState } from 'react'

const webGLFluidEnhanced = require('webgl-fluid-enhanced');

export default function App({ Component, pageProps }: AppProps) {

  const [colorScheme, setColorScheme] = useState();

  const divRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMouseEvent = (event: MouseEvent) => {
    canvasRef.current?.dispatchEvent(new MouseEvent(event.type, event))
  };


  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      COLOR_PALETTE: [
        "#f7467b",
        "#ff67f9",
        "#00ffb1",
        "#1addb0",
        "#53befc",
        "#2798e4",
        "#ffc857",
        "#ff8a30",
        "#B467F9",
        "#9554ff",
        "#2BCAFC",
        "#2bfcfc",
      ],
      BACK_COLOR: colorScheme == 'light' ? '#ffffff' : '#000000',
      CURL: 1,
      COLOR_UPDATE_SPEED: 10,
      BLOOM: false,
      DENSITY_DISSIPATION: 0.2,
      VELOCITY_DISSIPATION: 0.2,
      SUNRAYS: 2
    });
  }, [colorScheme])

  useEffect(() => {
    divRef.current?.addEventListener('click', handleMouseEvent);
    divRef.current?.addEventListener('mousemove', handleMouseEvent);
    divRef.current?.addEventListener('mousedown', handleMouseEvent);
    divRef.current?.addEventListener('mouseup', handleMouseEvent);
    divRef.current?.addEventListener('mouseover', handleMouseEvent);
    divRef.current?.addEventListener('mouseout', handleMouseEvent);
    if (canvasRef.current != null) {
      canvasRef.current.style.filter = 'blur(10px)'
      canvasRef.current.addEventListener('click', () => { webGLFluidEnhanced.splats() })
    }
  }, [])

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', left: 0, right: 0, position: 'absolute', zIndex: -999, backgroundColor: 'transparent' }} />
      <div ref={divRef}>
        <Component {...pageProps} setColorScheme={setColorScheme} />
      </div>
    </CssVarsProvider>
  )
}
