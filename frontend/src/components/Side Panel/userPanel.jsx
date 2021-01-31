import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Grid, Header, Icon, Image } from "semantic-ui-react";
import { USER_LOGOUT } from "../../constants/userConstants";

const UserPanel = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const { userInfo } = userAuth;
  const logout = () => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
  };
  const dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{userInfo.name}</strong>
        </span>
      ),
      disabled: true,
    },

    {
      key: "logOut",
      text: (
        <GoogleLogout
          clientId="605061519014-82go5els68io3u8p3c3a2pbnm4bjqnov.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      ),
    },
  ];
  return (
    <div>
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>NSD Chat</Header.Content>
            </Header>
          </Grid.Row>
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown
              trigger={
                <span>
                  <Image src={userInfo.image} spaced="right" avatar />
                  {userInfo.name}
                </span>
              }
              options={dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default UserPanel;
