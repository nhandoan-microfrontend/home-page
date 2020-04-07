import React from "react";
import { SampleDiv, SampleWrapper } from "./LandingSample.component.style";
import Button from "../Button/Button.component";

const LandingSample = ({onClick}) => {
  return (
    <SampleWrapper>

      <SampleDiv onClick={onClick}>
        <img
          src="https://w3lcdn.w3layouts.com/wp-content/uploads/2019/06/infinitude-386x241.jpg"
          alt="sample"
        ></img>

        <div className="overlay">
          <Button styles ={{
            padding: '5px 10px',
            fontSize: '1rem',
          }}
          >View Page</Button>
        </div>
      </SampleDiv>
    </SampleWrapper>
  );
};

export default LandingSample;
