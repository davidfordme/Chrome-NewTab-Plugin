import React from 'react';

import "./media/scss/App"

import VisitBar from "./comps/VisitBar";
import Clock from "./comps/Clock";
import BackgroundImage from "./comps/BackgroundImage";

export default function App() {
  return (
    <>
      <VisitBar />
      <BackgroundImage />
      <Clock />
    </>
  );
};
