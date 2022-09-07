import React from "react";
import { useNavigate } from "react-router-dom";

// custom components
import { SideItem, Title } from "../styles";

export default function SidebarItem(props) {
  const navigate = useNavigate();
  return (
    <SideItem
      onClick={() => {
        navigate(props.item.path);
      }}
    >
      {props.item.icon}
      <Title open={props.open}>{props.item.title}</Title>
    </SideItem>
  );
}
