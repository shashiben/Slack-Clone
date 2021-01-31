import React from "react";
import { Menu } from "semantic-ui-react";
import Channel from "./channel";
import UserPanel from "./userPanel";

const SidePanel = () => {
  return (
    <>
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        stye={{ background: "#4c3c4c", fontSize: "1.2rem" }}
      >
        <UserPanel />
        <Channel />
      </Menu>
    </>
  );
};

export default SidePanel;
