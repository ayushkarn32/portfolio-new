import React, { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default DefaultLayout;
