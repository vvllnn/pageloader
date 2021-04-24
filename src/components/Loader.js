import React, { useEffect } from "react";
import Image from "./Image";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="loader">
      <div className="loader-inner">
        <ImageBlock id="image-1" />
        <div className="transition-image">
          <img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt="random alt"
          />
        </div>
        <ImageBlock id="image-3" />
        <ImageBlock id="image-4" />
        <ImageBlock id="image-5" />
      </div>
    </div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </div>
  );
};
export default Loader;
