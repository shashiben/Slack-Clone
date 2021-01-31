import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Icon, Input, Menu, Modal } from "semantic-ui-react";
import { createChannel } from "../../actions/channelActions";

const Channel = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channelDetails, setChannelDetails] = useState("");
  const channelsList = useSelector((state) => state.userAuth);
  const { channels } = channelsList;

  const { loading, error, channelInfo } = useSelector(
    (state) => state.createChannel
  );

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (channelName && channelDetails) {
      dispatch(createChannel(channelName, channelDetails));
    }
  };

  const openModal = () => {
    setModal(true);
  };
  const handleDetailsChange = (e) => {
    e.preventDefault();
    setChannelDetails(e.target.value);
  };
  const handleNameChange = (e) => {
    e.preventDefault();
    setChannelName(e.target.value);
  };
  return (
    <React.Fragment>
      <Menu.Menu style={{ paddingBottom: "2em" }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" />
            Channels
          </span>{" "}
          ({channels.length})<Icon name="add" onClick={openModal} />
        </Menu.Item>
      </Menu.Menu>
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Input
                fluid
                label="Enter Name of Channel"
                name="channelName"
                onChange={handleNameChange}
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="About Channel"
                name="channelDetails"
                onChange={handleDetailsChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={handleSubmit}>
            <Icon name="checkmark" /> Add
          </Button>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default Channel;
