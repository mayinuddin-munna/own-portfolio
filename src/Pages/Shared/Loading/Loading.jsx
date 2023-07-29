import React from "react";
import Lottie from 'lottie-react'
import loading from '../../../../public/loading.json';

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 68px)",
        "& p": {
          fontSize: "7rem",
          fontWeight: "light",
          margin: "0",
        },
      }}
    >
      <Lottie style={{width:"20rem"}} animationData={loading} loop={true} />
    </div>
  );
};

export default Loading;
