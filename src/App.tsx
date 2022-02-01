import React from 'react';

import VisitBar from "./comps/VisitBar";
import Clock from "./comps/Clock";
import BackgroundImage from "./comps/BackgroundImage";

import { GlobalStyle } from './media/styled/App';

export default function App() {
  return (
    <>
      <VisitBar />
      <BackgroundImage />
      <Clock />
      <GlobalStyle />
    </>
  );
};
