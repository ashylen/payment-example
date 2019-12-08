import React from "react";

import Header from "../../components/Header/Header";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainTemplate;
