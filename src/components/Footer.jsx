import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#2f3542",
        color: "white",
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        display:"flex",
        justifyContent:"center"
      }}
    >
      <Typography variant="body2">
        Copy rights
      </Typography>
      <Typography variant="body2" sx={{marginLeft:1}}>
        © {new Date().getFullYear()} Shah Tech Hub. All rights reserved.
      </Typography>
      <Box sx={{fontFamily:"sans-serif",fontSize:13}}>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Privacy</Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Terms</Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Contact</Link>
      </Box>
    </Box>
  );
}

export default Footer;
