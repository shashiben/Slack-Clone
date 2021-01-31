import {
  CHANNEL_CREATE_FAIL,
  CHANNEL_CREATE_REQUEST,
  CHANNEL_CREATE_SUCCESS,
} from "../constants/channelConstants";

export const createChannelReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANNEL_CREATE_REQUEST:
      return { loading: true };
    case CHANNEL_CREATE_SUCCESS:
      return { loading: false, channelInfo: action.payload };
    case CHANNEL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
