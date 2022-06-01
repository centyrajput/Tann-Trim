import React from "react";
import "../components/Gridprop.css";
export const Gridprop = ({ sorc, h1, p1, p2, p3 }) => {
  const sourc = sorc;
  const title = h1;
  const para1 = p1;
  const para2 = p2;
  const para3 = p3;
  return (
    <div>
      <div className="g">
        <div className="g1">
          <img src={sourc} alt="" />
        </div>
        <h1>{title}</h1>
        <div className="g2">
          <p>{para1}</p>
          <p className="p2">{para2}</p>
          <p className="p3">{para3}</p>
          <i class="fa-solid fa-cart-arrow-down gicon"></i>
        </div>
      </div>
    </div>
  );
};
export default Gridprop;
