import { Box, Typography, IconButton, Stack } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { themeColors } from "../constants/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        textAlign: "center",
        borderTop: `1px solid ${themeColors.surfaceBorder}`,
      }}
    >
      <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mb: 3 }}>
        <IconButton
          href="https://github.com/SCWinter259"
          target="_blank"
          size="small"
          sx={{
            color: themeColors.textSubtle,
            transition: "all 0.3s ease",
            "&:hover": { color: themeColors.accent },
          }}
        >
          <FaGithub size={18} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/casper-nguyen-298302215/"
          target="_blank"
          size="small"
          sx={{
            color: themeColors.textSubtle,
            transition: "all 0.3s ease",
            "&:hover": { color: themeColors.accent },
          }}
        >
          <FaLinkedin size={18} />
        </IconButton>
        <IconButton
          href="mailto:nguyentrungycs@gmail.com"
          size="small"
          sx={{
            color: themeColors.textSubtle,
            transition: "all 0.3s ease",
            "&:hover": { color: themeColors.accent },
          }}
        >
          <HiOutlineMail size={18} />
        </IconButton>
      </Stack>

      <Typography
        variant="body2"
        sx={{ color: themeColors.textSubtle, fontSize: "0.8rem" }}
      >
        Built with React & TypeScript
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: themeColors.textSubtle, fontSize: "0.75rem", mt: 0.5, opacity: 0.7 }}
      >
        Thanks for scrolling this far.
      </Typography>
    </Box>
  );
};

export default Footer;
