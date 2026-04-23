import { useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import { themeColors } from "./constants/colors";

function App() {
  // Scroll progress bar
  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress");
    const handleScroll = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Snap scroll: resistance at hero/content boundary, then fast snap
  const useSnapScroll = useCallback(() => {
    let delta = 0;
    let snapping = false;
    let resetTimer: ReturnType<typeof setTimeout>;
    const WHEEL_THRESHOLD = 150;

    const snapTo = (y: number) => {
      snapping = true;
      delta = 0;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => {
        snapping = false;
      }, 900);
    };

    // Wheel handler — intercepts scroll in the snap zones
    const onWheel = (e: WheelEvent) => {
      if (snapping) {
        e.preventDefault();
        return;
      }

      const y = window.scrollY;
      const h = window.innerHeight;

      // At hero, scrolling down
      if (y < h * 0.15 && e.deltaY > 0) {
        e.preventDefault();
        delta += e.deltaY;
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          delta = 0;
        }, 400);
        if (delta > WHEEL_THRESHOLD) snapTo(h);
        return;
      }

      // Near content top, scrolling up toward hero
      if (y >= h * 0.85 && y <= h * 1.3 && e.deltaY < 0) {
        e.preventDefault();
        delta += e.deltaY;
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          delta = 0;
        }, 400);
        if (delta < -WHEEL_THRESHOLD) snapTo(0);
        return;
      }

      delta = 0;
    };

    // Touch handler — same logic for mobile swipes
    let touchStartY = 0;
    let touchDelta = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (snapping) return;
      touchStartY = e.touches[0].clientY;
      touchDelta = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (snapping) {
        e.preventDefault();
        return;
      }

      const currentY = e.touches[0].clientY;
      const swipe = touchStartY - currentY; // positive = swiping up (scroll down)
      const y = window.scrollY;
      const h = window.innerHeight;

      if (y < h * 0.15 && swipe > 0) {
        e.preventDefault();
        touchDelta = swipe;
      } else if (y >= h * 0.85 && y <= h * 1.3 && swipe < 0) {
        e.preventDefault();
        touchDelta = swipe;
      }
    };

    const onTouchEnd = () => {
      if (snapping) return;
      const y = window.scrollY;
      const h = window.innerHeight;
      const TOUCH_THRESHOLD = 60;

      if (y < h * 0.15 && touchDelta > TOUCH_THRESHOLD) {
        snapTo(h);
      } else if (y >= h * 0.85 && y <= h * 1.3 && touchDelta < -TOUCH_THRESHOLD) {
        snapTo(0);
      }
      touchDelta = 0;
    };

    // Settle snap: if scroll stops in the forbidden zone, snap to nearest edge
    let settleTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      if (snapping) return;
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const y = window.scrollY;
        const h = window.innerHeight;
        if (y > 10 && y < h - 10) {
          snapTo(y < h * 0.5 ? 0 : h);
        }
      }, 200);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(resetTimer);
      clearTimeout(settleTimer);
    };
  }, []);

  useEffect(() => {
    return useSnapScroll();
  }, [useSnapScroll]);

  return (
    <Box sx={{ backgroundColor: themeColors.bg, minHeight: "100vh" }}>
      <div id="scroll-progress" />
      <Navbar />
      <Hero />

      <Box id="about" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 6 } }}>
        <AboutMe />
      </Box>

      <Box id="projects" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 6 } }}>
        <Projects />
      </Box>

      <Box
        id="experience"
        sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 6 } }}
      >
        <Experiences />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
