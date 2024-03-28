import { Box, BoxProps, styled } from "@mui/joy";

export default styled((props: BoxProps) => <Box sx={{ display: 'flex', paddingY: 5, width: '100vw', flexGrow: 1, justifyContent: 'center' }} {...props}>
  {props.children}
</Box>)((() => ({
})))

