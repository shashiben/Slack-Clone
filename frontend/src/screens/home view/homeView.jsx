import React from "react";
import { Grid } from "semantic-ui-react";
import ColorPanel from "../../components/Color Panel/colorPanel";
import MessagePanel from "../../components/Message Panel/messagesPanel";
import MetaPanel from "../../components/Meta Panel/metaPanel";
import SidePanel from "../../components/Side Panel/sidePanel";
import "./home.css";
const HomeView = () => {

  return (
    <Grid
      columns="equal"
      className="app"
      style={{ background: "#eee"}}
      verticalAlign="middle"
      stretched
    >
      <ColorPanel />
      <SidePanel />
      <Grid.Column style={{ marginLeft: 320 }}>
        <MessagePanel />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

export default HomeView;
