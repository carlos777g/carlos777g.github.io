import { useEffect, useState } from "react";

export const useDynamicFavicon = (initialHex) => {
  const [hexColor, setHexColor] = useState(initialHex);

  useEffect(() => {
    const handleThemeUpdate = (event) => {
      setHexColor(event.detail);
    };

    window.addEventListener("theme-changed", handleThemeUpdate);

    return () => window.removeEventListener("theme-changed", handleThemeUpdate);
  }, []);

  useEffect(() => {
    if (!hexColor) return;

    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill="${hexColor}" d="M1 3.5A2.5 2.5 0 0 1 3.5 1h7A2.5 2.5 0 0 1 13 3.5v2.732c-.326.14-.631.343-.897.609L12 6.944V5H2v5.5A1.5 1.5 0 0 0 3.5 12h3.486c-.227.3-.4.639-.51 1H3.5A2.5 2.5 0 0 1 1 10.5zm9.354 4.646c.084.084.131.19.143.3l-2.55 2.551a.5.5 0 0 1-.3-.85L9.292 8.5L7.646 6.854a.5.5 0 1 1 .708-.708zm-4-2a.5.5 0 0 1 0 .708L4.707 8.5l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0m1.626 6.231l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"/>
      </svg>
    `;

    const encodedSvg = encodeURIComponent(svgString);
    const dataUri = `data:image/svg+xml,${encodedSvg}`;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.type = "image/svg+xml";
    link.href = dataUri;
  }, [hexColor]);
};
