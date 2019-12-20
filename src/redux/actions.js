import {
  CHANGE_FONT,
  TOGGLE_LOCK_FONT,
  CHANGE_TEXT,
  TOGGLE_MODAL,
  TOGGLE_SHOW_SECTION,
  LOAD_FONTS
} from "./types";

export const loadFonts = fonts => ({
  type: LOAD_FONTS,
  payload: {
    fonts,
  }
});

export const changeFont = (font, link, section) => ({
  type: CHANGE_FONT,
  payload: {
    font,
    link,
    section
  }
});

export const toggleLock = section => ({
  type: TOGGLE_LOCK_FONT,
  payload: section
});

export const updateText = (text, section) => ({
  type: CHANGE_TEXT,
  payload: {
    text,
    section
  }
});

export const toggleModal = modal => ({
  type: TOGGLE_MODAL,
  payload: modal
});

export const hideSection = (section, hide) => ({
  type: TOGGLE_SHOW_SECTION,
  payload: {
    section,
    hide
  }
});
