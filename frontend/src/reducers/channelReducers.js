import {
  CHANNEL_CREATE_FAIL,
  CHANNEL_CREATE_REQUEST,
  CHANNEL_CREATE_RESET,
  CHANNEL_CREATE_SUCCESS,
  CHANNEL_FETCH_FAIL,
  CHANNEL_FETCH_REQUEST,
  CHANNEL_FETCH_RESET,
  CHANNEL_FETCH_SUCCESS,
  SET_CURRENT_CHANNEL,
} from "../constants/channelConstants";

export const createChannelReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANNEL_CREATE_REQUEST:
      return { loading: true };
    case CHANNEL_CREATE_SUCCESS:
      return { loading: false, channelInfo: action.payload };
    case CHANNEL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CHANNEL_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const getAlLChannelsReducer = (state = { channels: [] }, action) => {
  switch (action.type) {
    case CHANNEL_FETCH_REQUEST:
      return { loading: true };
    case CHANNEL_FETCH_SUCCESS:
      return { loading: false, channels: action.payload };
    case CHANNEL_FETCH_FAIL:
      return { loading: false, error: action.payload };
    case CHANNEL_FETCH_RESET:
      return {};
    default:
      return state;
  }
};
export const setCurrentChannelReducer = (
  state = { currentChannel: null },
  action
) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return { ...state, currentChannel: action.payload };
    default:
      return state;
  }
};
