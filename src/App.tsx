import React from 'react';

import Bookmarks from "./comps/Bookmarks";
import Clock from "./comps/Clock";
import BackgroundImage from "./comps/BackgroundImage";

import { GlobalStyle } from './media/styled/App';

export default function App() {
  return (
    <>
      <BackgroundImage />
      <Bookmarks />
      <Clock />
      <GlobalStyle />
    </>
  );
};
