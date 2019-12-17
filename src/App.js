import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import { Helmet } from "react-helmet";
import WebFont from "webfontloader";
import "./App.scss";

import Heading from "./components/Heading";
import Content from "./components/Content";
import EditTextModal from "./components/EditTextModal";
import CodeModal from "./components/CodeModal";

function App() {
  const [state, setState] = useState({
    currentFonts: {
      heading: {
        font: "",
        link: "",
        locked: false
      },
      body: {
        font: "",
        link: "",
        locked: false
      }
    },
    data: null,
    link: "",
    isShowing: {
      heading: false,
      body: false
    },
    editTextModalIsOpen: false,
    codeModalIsOpen: false,
    text: {
      heading: "Lorem ipsum dolor sit.",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste quos facere aliquam facilis quis totam pariatur ipsum saepe possimus soluta necessitatibus, expedita nihil quisquam sint. Sit voluptatibus neque repudiandae omnis at provident accusantium dolores! Commodi, nemo quaerat alias dolorem atque cupiditate illum vero reiciendis molestiae nesciunt impedit tempora voluptatibus voluptates quidem facere excepturi quibusdam saepe laudantium neque rerum! Ipsam."
    }
  });

  const getFonts = () => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status != 200 && xhr.readyState == 4) {
          reject(xhr.responseText);
        }
      };
      xhr.open(
        "GET",
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAZPt82j4_tyfPLEeWYVp14aXp5SM1-PME",
        true
      );
      xhr.send();
    });
  };

  const getRandomFont = target => {
    if (state.data) {
      const randomNumber = Math.floor(Math.random() * state.data.items.length);
      const selectedFont = state.data.items[randomNumber];
      const temp = Object.assign({}, state);
      temp.currentFonts[target].font = selectedFont;
      setState(temp);
    }
  };

  const toggleEditTextModal = () => {
    setState({
      ...state,
      editTextModalIsOpen: !state.editTextModalIsOpen
    });
  };

  const toggleCodeModal = () => {
    setState({
      ...state,
      codeModalIsOpen: !state.codeModalIsOpen
    });
  };

  const handleChange = e => {
    const newData = Object.assign({}, state);
    newData.text[e.target.getAttribute("section")] = e.target.value;
    setState(newData);
  };

  const handleClick = e => {
    switch (e.target.id) {
      case "refresh":
        const newData = Object.assign({}, state);
        if (!state.currentFonts.heading.locked) {
          newData.isShowing.heading = false;
          setState(newData);
          getRandomFont("heading");
        }
        if (!state.currentFonts.body.locked) {
          newData.isShowing.body = false;
          setState(newData);
          getRandomFont("body");
        }
        break;

      case "edit-text":
        toggleEditTextModal();
        break;

      case "get-code":
        toggleCodeModal();
        break;
      default:
        break;
    }
  };

  const revealContent = () => {
    const newData = Object.assign({}, state);
    newData.isShowing.heading = true;
    newData.isShowing.body = true;
    setState(newData);
  };

  useEffect(() => {
    if (state.currentFonts.body.font && state.currentFonts.heading.font) {
      const newData = Object.assign({}, state);
      newData.currentFonts.body.link = newData.currentFonts.body.font.family.replace(
        / /g,
        "+"
      );
      newData.currentFonts.heading.link = newData.currentFonts.heading.font.family.replace(
        / /g,
        "+"
      );
      newData.link = `https://fonts.googleapis.com/css?family=${newData.currentFonts.heading.link}|${newData.currentFonts.body.link}`;
      setState(newData);

      WebFont.load({
        google: {
          families: [
            newData.currentFonts.heading.font.family,
            newData.currentFonts.body.font.family
          ]
        },
        active: () => {
          revealContent();
        }
      });
    }
  }, [state.currentFonts.body.font, state.currentFonts.heading.font]);

  useEffect(() => {
    getFonts().then(fonts => {
      setState({
        ...state,
        data: fonts
      });
    });
  }, []);

  useEffect(() => {
    getRandomFont("heading");
    getRandomFont("body");
  }, [state.data]);

  return (
    <div className="App">
      <EditTextModal
        state={state}
        toggleModal={toggleEditTextModal}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <CodeModal
        state={state}
        toggleModal={toggleCodeModal}
        handleClick={handleClick}
      />

      {state.link ? (
        <Helmet>
          <link rel="stylesheet" href={state.link} />
        </Helmet>
      ) : null}
      <Container>
        <Heading click={handleClick} />
        <Content state={state} />
      </Container>
    </div>
  );
}

export default App;
