import {
  CHANNEL_CREATE_FAIL,
  CHANNEL_CREATE_REQUEST,
  CHANNEL_CREATE_SUCCESS,
  CHANNEL_FETCH_FAIL,
  CHANNEL_FETCH_REQUEST,
  CHANNEL_FETCH_SUCCESS,
  SET_CURRENT_CHANNEL,
} from "../constants/channelConstants";
import axios from "axios";
export const createChannel = (name, details) => async (dispatch, getState) => {
  try {
    console.log(
      `Creating new Channel with Channel Name:${name} and channelDetails are:${details}`
    );
    dispatch({
      type: CHANNEL_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const {
      userAuth: { userInfo },
    } = getState();
    const username = userInfo.name;
    const image = userInfo.image;
    const createdBy = userInfo._id;
    console.log(userInfo);

    const { data } = await axios.post(
      "/channels/addChannel",
      { name, details, createdBy, username, image },
      config
    );

    dispatch({
      type: CHANNEL_CREATE_SUCCESS,
      payload: data,
    });

    const tempChannels = JSON.parse(localStorage.getItem("channels")) ?? [];
    tempChannels.push(data);
    localStorage.setItem("channels", JSON.stringify(tempChannels));
  } catch (error) {
    dispatch({
      type: CHANNEL_CREATE_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getChannelsList = () => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_FETCH_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/channels/", config);

    dispatch({
      type: CHANNEL_FETCH_SUCCESS,
      payload: data,
    });
    localStorage.setItem("channels", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CHANNEL_FETCH_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const setCurrentChannelAction = (channel) => (dispatch) => {
  dispatch({ type: SET_CURRENT_CHANNEL, payload: channel });
};
