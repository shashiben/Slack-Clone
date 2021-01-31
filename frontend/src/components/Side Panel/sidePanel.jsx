import React from "react";
import { Menu } from "semantic-ui-react";
import Channel from "./channel";
import UserPanel from "./userPanel";

const SidePanel = () => {
  return (
    <>
      Side Pannel
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fontSize: "1.2rem" }}
      >
        <UserPanel />
        <Channel />
      </Menu>
    </>
  );
};

export default SidePanel;
