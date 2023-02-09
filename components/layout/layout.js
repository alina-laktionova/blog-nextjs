import React from 'react';
import MainNavigation from "@/components/layout/main-navigation";

const Layout = (props) => {
  return (
    <>
     <MainNavigation/>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;