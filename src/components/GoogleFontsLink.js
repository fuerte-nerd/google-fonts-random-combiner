import React, {useEffect} from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import WebFont from "webfontloader";
import { hideSection} from '../redux/actions'

function GoogleFontsLink(props) {
    useEffect(()=>{
        if(props.currentFonts.heading.font && props.currentFonts.body.font)
        WebFont.load({
            google: {
              families: [
                props.currentFonts.heading.font.family,
                props.currentFonts.body.font.family
              ]
            },
            active: () => {
              console.log("loaded");
              props.dispatch(hideSection('heading', false))
              props.dispatch(hideSection('body', false))

            }
          });
    }, [props.link])
  return props.currentFonts.heading.font && props.currentFonts.body.font ? (
    <Helmet>
      <link rel="stylesheet" href={props.link} />
    </Helmet>
  ) : null;
}

const mapStateToProps = state => ({
  currentFonts: state.data.currentFonts,
  link: `https://fonts.googleapis.com/css?family=${state.data.currentFonts.heading.link}|${state.data.currentFonts.body.link}`
});

export default connect(mapStateToProps)(GoogleFontsLink);
