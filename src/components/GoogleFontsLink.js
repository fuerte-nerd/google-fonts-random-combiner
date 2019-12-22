import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import WebFont from "webfontloader";
import { hideSection } from "../redux/actions";

function GoogleFontsLink(props) {
  useEffect(() => {
    if (props.currentFonts.heading.font && props.currentFonts.body.font)
      WebFont.load({
        google: {
          families: [
            props.currentFonts.heading.font.family,
            props.currentFonts.body.font.family
          ]
        },
        active: () => {
          props.dispatch(hideSection("heading", false));
          props.dispatch(hideSection("body", false));
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.link]);
  return props.currentFonts.heading.font && props.currentFonts.body.font ? (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href={props.link} />
      </Helmet>
    </HelmetProvider>
  ) : null;
}

const mapStateToProps = state => ({
  currentFonts: state.data.currentFonts,
  link: `https://fonts.googleapis.com/css?family=${state.data.currentFonts.heading.link}|${state.data.currentFonts.body.link}`
});

export default connect(mapStateToProps)(GoogleFontsLink);
