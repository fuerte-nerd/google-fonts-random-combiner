import React from "react";
import { connect } from "react-redux";
import { toggleCredits } from "../redux/actions";
import { Transition } from "react-spring/renderprops";

function Credits(props) {
  const handleClick = () => {
    props.dispatch(toggleCredits());
  };
  //   if (props.isShowing) {
  return (
    <Transition
      items={props.isShowing}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ duration: 100}}
    >
      {show =>
        show &&
        (props => (
          <div
            className="text-light"
            style={{
              ...props,
              position: "fixed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background: "rgba(0,0,0,.9)",
              zIndex: 2000
            }}
            onClick={handleClick}
          >
            <div>
              <h1
                style={{
                  display: "inline-block"
                }}
              >
                Google Fonts Random Combiner
              </h1>
              {` `}
              <small>(v1.0.0)</small>
              <p className="lead">
                Helping you to find unique font combinations quickly!
              </p>
              <p>
                Concept, design and production by{" "}
                <a href="mailto:fuertenerd@gmail.com">Fuerte Nerd</a>.
              </p>
              <p>
                <small>&copy; 2019 Fuerte Nerd</small>
              </p>
            </div>
          </div>
        ))
      }
    </Transition>
  );
}

const mapStateToProps = state => ({
  isShowing: state.uI.showCredits
});
export default connect(mapStateToProps)(Credits);
