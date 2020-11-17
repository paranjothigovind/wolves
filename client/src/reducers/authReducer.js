import { SET_CURRENT_USER, USER_LOADING, SHOW_TUTOR, SET_USER_TYPE } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  isUserType: {},
  user: {},
  loading: false,
  tutor: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_USER_TYPE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        isUserType: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case SHOW_TUTOR:
      return {
        ...state,
        // isAuthenticated: !isEmpty(action.payload),
        tutor: action.payload
      }
    default:
      return state;
  }
}
