import React from "react";
import { Outlet } from "react-router-dom";

// custom components
import Container from "../../components/Container";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { OutletCont } from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Content>
        <Sidebar />
        <OutletCont>
          <Outlet />
        </OutletCont>
      </Content>
    </Container>
  );
}
