import { useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { themeColors } from "../constants/colors";
import uofaLogo from "../assets/UofA.jpeg";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box ref={ref} sx={{ maxWidth: 900, mx: "auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: themeColors.text,
            mb: 6,
            textAlign: "center",
          }}
        >
          Education
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            border: `1px solid ${themeColors.surfaceBorder}`,
            borderLeft: `3px solid ${themeColors.accent}`,
            backgroundColor: themeColors.surface,
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: themeColors.accent,
              backgroundColor: themeColors.surfaceHover,
              transform: "translateX(4px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 1,
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                src={uofaLogo}
                alt="University of Alberta"
                variant="rounded"
                sx={{
                  width: 44,
                  height: 44,
                  border: `1px solid ${themeColors.surfaceBorder}`,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: themeColors.text,
                    fontSize: "1.05rem",
                  }}
                >
                  B.Sc. in Computing Science, Specialization
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: themeColors.accent, fontWeight: 500 }}
                >
                  University of Alberta
                </Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="body2"
                sx={{ color: themeColors.textMuted, fontSize: "0.8rem" }}
              >
                Sep 2020 - Jun 2025
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: themeColors.textSubtle, fontSize: "0.75rem" }}
              >
                Edmonton, AB
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: themeColors.textMuted,
              mt: 2,
              fontSize: "0.85rem",
            }}
          >
            GPA: 3.4 / 4.0
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Education;
