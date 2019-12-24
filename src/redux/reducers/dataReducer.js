import { CHANGE_FONT, CHANGE_TEXT, TOGGLE_LOCK_FONT, LOAD_FONTS } from "../types";

const initialState = {
  data: null,
  currentFonts: {
    heading: {
      font: null,
      link: "",
      locked: false
    },
    body: {
      font: null,
      link: "",
      locked: false
    }
  },
  text: {
    heading: "Lorem ipsum dolor sit",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste quos facere aliquam facilis quis totam pariatur ipsum saepe possimus soluta necessitatibus, expedita nihil quisquam sint. Sit voluptatibus neque repudiandae omnis at provident accusantium dolores! Commodi, nemo quaerat alias dolorem atque cupiditate illum vero reiciendis molestiae nesciunt impedit tempora voluptatibus voluptates quidem facere excepturi quibusdam saepe laudantium neque rerum! Ipsam."
  }
};

export default (state = initialState, action) => {
  let data = Object.assign({}, state);

  switch (action.type) {
    case LOAD_FONTS:
      data.data = action.payload.fonts;
      return data;

    case CHANGE_FONT:
      data.currentFonts[action.payload.section].font = action.payload.font;
      data.currentFonts[action.payload.section].link = action.payload.link
      return data;

    case CHANGE_TEXT:
      data.text[action.payload.section] = action.payload.text;
      return data;

    case TOGGLE_LOCK_FONT:
      data.currentFonts[action.payload].locked = !data.currentFonts[
        action.payload].locked;
      return data;
      
    default:
      return data;
  }
};
