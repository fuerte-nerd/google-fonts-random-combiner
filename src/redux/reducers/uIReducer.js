import {
  TOGGLE_MODAL,
  TOGGLE_SHOW_SECTION,
  TOGGLE_LOCK_FONT,
  TOGGLE_COLORPICKER,
  CHANGE_COLOR,
  TOGGLE_CREDITS
} from "../types";

const initialState = {
  heading: {
    isShowing: false,
    isLocked: false
  },
  body: {
    isShowing: false,
    isLocked: false
  },
  modals: {
    editText: {
      isOpen: false
    },
    code: {
      isOpen: false
    }
  },
  colorPickers: {
    text: false,
    background: false
  },
  colors: {
    text: "#222222",
    background: "#fafafa"
  },
  showCredits: false
};

export default (state = initialState, action) => {
  let data = Object.assign({}, state);

  switch (action.type) {
    case TOGGLE_MODAL:
      data.modals[action.payload].isOpen = !data.modals[action.payload].isOpen;
      return data;

    case TOGGLE_SHOW_SECTION:
      data[action.payload.section].isShowing = !action.payload.hide;
      return data;

    case TOGGLE_LOCK_FONT:
      data[action.payload].isLocked = !data[action.payload].isLocked;
      return data;

    case TOGGLE_COLORPICKER:
      data.colorPickers[action.payload] = !data.colorPickers[action.payload];
      return data;

    case CHANGE_COLOR:
      data.colors[action.payload.section] = action.payload.color;
      return data;

    case TOGGLE_CREDITS:
      data.showCredits = !data.showCredits;
      return data;
      
    default:
      return data;
  }
};
