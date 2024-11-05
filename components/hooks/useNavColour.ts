import { useState, useEffect } from "react";

export const useNavColour = (): string => {
  const [navColour, setNavColour] = useState("text-black");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;

    // Determine the scroll position for the conditions
    if (scrollY < windowHeight * 0.95) {
      setNavColour("text-black"); // Black text until 95vh
    } else if (
      scrollY >= windowHeight * 0.95 &&
      scrollY < totalHeight - windowHeight * 1.2
    ) {
      setNavColour("text-white"); // White text between 95vh and 120vh from bottom
    } else {
      setNavColour("text-black"); // Black text when at the Contact section (after 120vh)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return navColour;
};
