import React from "react";

const TableauEmbed = ({ src, title }) => {
  console.log(src);
  return (
    <div className="tableau-container">
      <iframe
        src={src}
        className="w-full"
        height="600px"
        allowFullScreen={true}
        title={title}
      ></iframe>
    </div>
  );
};

export default TableauEmbed;
