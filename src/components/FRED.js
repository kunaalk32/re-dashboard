import React from "react";

function FRED({ src, title, height }) {
  return (
    <iframe
      src={src}
      frameborder="0"
      className="w-full"
      style={{ overflow: "hidden", height: height }}
      allowTransparency="true"
      loading="lazy"
      title={title}
    ></iframe>
  );
}

export default FRED;
