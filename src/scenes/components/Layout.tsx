import React from "react";
import Alerts from "./Alerts";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Alerts />
      {children}
    </>
  );
};

export default Layout;
