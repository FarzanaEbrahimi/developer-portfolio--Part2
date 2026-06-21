import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        (window.scrollY / totalHeight) * 100;

      setScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={Math.round(scroll)}
      className="fixed top-0 left-0 h-1.5 bg-primary z-50 transition-all duration-200 shadow-[0_0_15px_#06a2c2]"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgress;