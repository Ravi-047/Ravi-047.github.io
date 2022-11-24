import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MiniProject = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div style={{ width: "50%", margin: "auto" }}>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {arr.map((item, index) => (
            <div
              key={index}
              style={{ border: "2px solid red", padding: "40px" }}
            >
              {item}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MiniProject;
