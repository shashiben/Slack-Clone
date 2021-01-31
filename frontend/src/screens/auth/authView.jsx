import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { auth } from "../../actions/userActions";
import "./auth.css";
const AuthView = () => {
  const dispacth = useDispatch();
  const history = useHistory();
  const userAuth = useSelector((state) => state.userAuth);
  const { loading, error, userInfo } = userAuth;
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const { name, email, imageUrl, googleId } = response.profileObj;
    dispacth(auth(name, email, imageUrl, googleId));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo]);

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="orange" textAlign="center">
          <Icon name="code branch" color="violet" />
          NSD SOLUTIONS
        </Header>
        <Form size="large">
          <Segment stacked>
            <GoogleLogin
              clientId="605061519014-82go5els68io3u8p3c3a2pbnm4bjqnov.apps.googleusercontent.com"
              buttonText="Sign In with Google "
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default AuthView;
