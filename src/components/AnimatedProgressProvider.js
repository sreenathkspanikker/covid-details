/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from "react";
import { Animate } from "react-move";

export const AnimatedProgressProvider = (props) => {
    const [isAnimated, setAnimated] = useState(false)    
    const [interval, setIntervals] = useState(undefined)  

    useEffect(() => {
      let isLoad = true;
      if (isLoad && props) {
          if (props.repeat) {
            setIntervals(() => {
                window.setInterval(() => {
                    setAnimated(!isAnimated)
                  }, props.duration * 1000);
            })  
          } else {
            setAnimated(!isAnimated)
          }
      }
      return () => {
        clearInterval(interval);
        isLoad = false
      }
    }, [props])

    return (
        <Animate
            start={() => ({ value: props.valueStart })}
            update={() => ({
            value: [ isAnimated ? props.valueEnd : props.valueStart],
            timing: {
                duration: props.duration * 1000,
                ease: props.easingFunction
            }
            })}
        >
            {({ value }) => props.children(value)}
      </Animate>
    )
}