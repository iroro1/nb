import React, { useState } from "react";

const Topbar = () => {
  const time = new Date().toLocaleTimeString().slice(0, 4);
  const [currTime, setCurrTime] = useState(time);

  const renderTime = () => {
    const time = new Date().toLocaleTimeString().slice(0, 4);
    setCurrTime(time);
  };
  setInterval(renderTime, 1000);
  return (
    <div className="container">
      <div className="row pt-2 ">
        <div className="col-3">{currTime}</div>
        <div className="col-5"></div>
        <div className="col-3 d-flex">
          <i className="col-3 fa fa-signal"></i>
          <i className="col-3 fa fa-wifi"></i>
          <i className="col-3 fa fa-battery-full"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
