import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ColorPanel from "../../components/Color Panel/colorPanel";
import MessagePanel from "../../components/Message Panel/messagesPanel";
import MetaPanel from "../../components/Meta Panel/metaPanel";
import SidePanel from "../../components/Side Panel/sidePanel";
import { getChannelsList } from "../../actions/channelActions";
import "./home.css";
const HomeView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannelsList());
  }, []);

  return (
    <Grid columns="equal" className="app" style={{ background: "#43cc43" }}>
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
