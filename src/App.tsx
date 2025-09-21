import { useRef } from "react";
import Hero from "./components/Hero";
import ContentTabs from "./components/ContentTabs";

function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMoveToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Hero handleMoveToContent={handleMoveToContent}/>
      <div ref={contentRef}>
        <ContentTabs />
      </div>
    </>
  );
}

export default App;
