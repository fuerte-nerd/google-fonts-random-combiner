import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'

export default function Content(props) {
    return (
        <>
          <div className="mt-4">
          <Transition
            items={props.state.isShowing.heading}
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
                      fontFamily: props.state.currentFonts.heading.font.family,
                      fontSize: "2.5rem"
                    }}
                  >
                    {props.state.text.heading}
                  </h2>
                </animated.div>
              ))
            }
          </Transition>
          </div>
          <div>
            <Transition
              items={props.state.isShowing.body}
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
                        fontFamily: props.state.currentFonts.body.font.family
                      }}
                    >
                      {props.state.text.body}
                    </p>
                  </animated.div>
                ))
              }
            </Transition>
          </div>  
        </>
    )
}
