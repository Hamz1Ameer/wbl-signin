"use client";
import React from "react";
import YouTube from "react-youtube";

const page = () => {
  return (
    <div>
      <YouTube videoId="2g811Eo7K8U" title={'New video'} opts={{ height: "600", width: "640" }} />
    </div>
  );
};

export default page;
