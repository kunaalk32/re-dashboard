import React from "react";

const TableauEmbed = ({ src, title }) => {
  console.log(src);
  return (
    <div className="tableau-container">
      <iframe
        src={src}
        width="100%"
        height="600px"
        allowFullScreen={true}
        title={title}
      ></iframe>
    </div>
  );
};

export default TableauEmbed;
