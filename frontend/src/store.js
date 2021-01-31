import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userAuthReducer } from "./reducers/userReducers";
import {
  createChannelReducer,
  getAlLChannelsReducer,
  setCurrentChannelReducer,
} from "./reducers/channelReducers";

const reducer = combineReducers({
  userAuth: userAuthReducer,
  createChannel: createChannelReducer,
  getAllChannels: getAlLChannelsReducer,
  setCurrentChannel: setCurrentChannelReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const channelsListFromStorage = localStorage.getItem("channels")
  ? JSON.parse(localStorage.getItem("channels"))
  : [];

const initialState = {
  userAuth: {
    userInfo: userInfoFromStorage,
    channels: channelsListFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
