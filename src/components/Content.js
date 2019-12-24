import React from "react";
import { connect } from "react-redux";
import { Transition, animated } from "react-spring/renderprops";

function Content(props) {
  return props.currentFonts.heading.font && props.currentFonts.body.font ? (
    <>
      <div className="mt-4" style={{
        minHeight: '4rem'
      }}> 
        <Transition
          items={props.isShowing.heading}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ display: "none" }}
        >
          {show =>
            show &&
            (rsProps => (
              <animated.div style={rsProps}>
                <h2
                  id="text-heading"
                  style={{
                    fontFamily: props.currentFonts.heading.font.family,
                    fontSize: "2.5rem"
                  }}
                >
                  {props.text.heading}
                </h2>
              </animated.div>
            ))
          }
        </Transition>
      </div>
      <div>
        <Transition
          items={props.isShowing.body}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ display: "none" }}
        >
          {show =>
            show &&
            (rsProps => (
              <animated.div style={rsProps}>
                <p
                  id="text-body"
                  style={{
                    fontFamily: props.currentFonts.body.font.family
                  }}
                >
                  {props.text.body}
                </p>
              </animated.div>
            ))
          }
        </Transition>
      </div>
    </>
  ) : null;
}

const mapStateToProps = state => ({

  isShowing: {
    heading: state.uI.heading.isShowing,
    body: state.uI.body.isShowing
  },
  currentFonts: state.data.currentFonts,
  text: state.data.text
});

export default connect(mapStateToProps)(Content);
