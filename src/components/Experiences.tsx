import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/ExperienceData";
import ExperienceTile from "./ExperienceTile";
import { themeColors } from "../constants/colors";

const Experiences = () => {
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
          Experience
        </Typography>
      </motion.div>

      <Box sx={{ position: "relative" }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: "absolute",
            left: 20,
            top: 0,
            bottom: 0,
            width: 2,
            background: `linear-gradient(to bottom, ${themeColors.accent}, ${themeColors.accentBright}, transparent)`,
            display: { xs: "none", sm: "block" },
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <Box sx={{ position: "relative", pl: { xs: 0, sm: 7 } }}>
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 15,
                    top: 24,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: themeColors.accent,
                    border: `2px solid ${themeColors.bg}`,
                    boxShadow: `0 0 12px ${themeColors.accent}`,
                    zIndex: 2,
                    display: { xs: "none", sm: "block" },
                  }}
                />
                <ExperienceTile exp={exp} />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experiences;
