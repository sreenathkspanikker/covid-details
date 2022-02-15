import React from 'react'
import { easeBounce } from "d3-ease";
import {AnimatedProgressProvider} from "./";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const Cahrt = (props) => {

  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={props.percent}
      duration={1}
      easingFunction={easeBounce}
      repeat={true}
      width="100"
      className="app-chart"
    >
      {value => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            value={value}
            text={`${roundedValue}%`}
            styles={buildStyles({ pathTransition: "none" })}
            strokeWidth="15"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            styles={buildStyles({
              // Colors
              pathColor: props.pathColor,
              textColor: props.textColor,
              trailColor: '#383b3d',
              backgroundColor: '#383b3d',
            })}
          />
        );
      }}
    </AnimatedProgressProvider>
  )
}
