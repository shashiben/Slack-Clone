import {
  CHANNEL_CREATE_FAIL,
  CHANNEL_CREATE_REQUEST,
  CHANNEL_CREATE_SUCCESS,
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

    localStorage.setItem(
      "channels",
      JSON.stringify(
        JSON.parse((localStorage.getItem("channels") ?? []).push(data))
      )
    );
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
