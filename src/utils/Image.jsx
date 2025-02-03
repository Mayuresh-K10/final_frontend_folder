import React, { useState } from "react";

const Image = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // console.log(isLoaded);

  return (
    <div style={{ width: "auto", height: "auto" }}>
      <img
        src={src}
        alt={alt}
        style={{
          height: "100%",
          width: "100%",
          filter: isLoaded ? "none" : "blur(10px)",
          transition: "filter 0.3s ease-in-out",
          objectFit: "cover",
        }}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export { Image };
