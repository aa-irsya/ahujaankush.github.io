import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { IconButton, useColorScheme } from "@mui/joy";
import { useEffect, useState } from "react";

export default function ThemeToggle({ setColorScheme }: { setColorScheme: Function }) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setColorScheme(mode);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      size="md"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
          setColorScheme("dark")
        } else {
          setMode("light");
          setColorScheme("light");
        }
      }}
      sx={{
        boxShadow: "sm",
      }}
    >
      {mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
    </IconButton>
  );
}
