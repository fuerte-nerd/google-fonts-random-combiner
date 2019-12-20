import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadFonts, changeFont } from "./redux/actions";
import { Container, Button, Nav, NavItem, NavLink } from "reactstrap";
import { Helmet } from "react-helmet";
import "./App.scss";
import WebFont from "webfontloader";

import Heading from "./components/Heading";
import Content from "./components/Content";
import GoogleFontsLink from "./components/GoogleFontsLink";
import EditTextModal from "./components/EditTextModal";
import LockButtons from "./components/LockButtons";
import CodeModal from "./components/CodeModal";

function App(props) {
  useEffect(() => {
    new Promise((resolve, reject) => {
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
    }).then(fonts => {
      props.dispatch(loadFonts(fonts));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRandomFont("heading");
    getRandomFont("body");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

  const getRandomFont = target => {
    if (props.data) {
      const randomNumber = Math.floor(Math.random() * props.data.items.length);
      const selectedFont = props.data.items[randomNumber];
      const link = selectedFont.family.replace(/ /g, "+");
      props.dispatch(changeFont(selectedFont, link, target));
    }
  };

  // const revealContent = () => {
  //   const newData = Object.assign({}, state);
  //   newData.isShowing.heading = true;
  //   newData.isShowing.body = true;
  //   setState(newData);
  // };

  return (
    <div className="App">
      <GoogleFontsLink />
      <EditTextModal />
      <CodeModal />
      <LockButtons />
      <Container>
        <Heading randomFontGetter={getRandomFont} />
        <Content />
      </Container>
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data.data,
    currentFonts: state.data.currentFonts
  };
};
export default connect(mapStateToProps)(App);
