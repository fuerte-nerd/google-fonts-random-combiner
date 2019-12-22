import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadFonts, changeFont } from "./redux/actions";
import { Container } from "reactstrap";
import "./App.scss";

import Content from "./components/Content";
import GoogleFontsLink from "./components/GoogleFontsLink";
import EditTextModal from "./components/EditTextModal";
import CodeModal from "./components/CodeModal";
import Tools from "./components/Tools"

function App(props) {
  useEffect(() => {
    new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status !== 200 && xhr.readyState === 4) {
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

  return (
    <div className="App" style={{
      background: props.bgColor,
      color: props.textColor,
      minHeight: '100vh',
      width: '100vw',
      transition: 'all .15s'
    }}>
      <GoogleFontsLink />
      <EditTextModal />
      <CodeModal />
      <Tools randomFontGetter={getRandomFont} />
      <Container>
        <Content />
      </Container>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    data: state.data.data,
    currentFonts: state.data.currentFonts,
    bgColor: state.uI.colors.background,
    textColor: state.uI.colors.text
  };
};
export default connect(mapStateToProps)(App);
