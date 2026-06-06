import { useEffect, useState } from "react";

export default function BackToUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
  <button
  className={`scroll-top ${visible ? "show" : ""}`}
  onClick={scrollToTop}
  aria-label="Back to top"
>
    ↑
  <span className="tooltip">Back to top</span>
  </button>

  );
}
