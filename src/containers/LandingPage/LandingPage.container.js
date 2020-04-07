import React, { Component } from "react";
import { LandingPageWrapper, LandingPageTitle, SampleWrapper } from "./LandingPage.container.style";
import LandingSample from "../../components/LandingSample/LandingSample.component";
import Button from "../../components/Button/Button.component";

export default class LandingPageContainer extends Component {

  renderLandingSample = () => [1,2,3,4]
    .map(id => <LandingSample 
          onClick={() =>{
            this.props.history.push(`/${id}`);
            console.log('object')
          }}
          key={id}
        />)

  render() {
    return (
      <LandingPageWrapper>
        <LandingPageTitle>
          <h1>Build your business with our free website templates</h1>

          <p>
            Choose from our layout collection designed for business, industry
            and personal website needs. Launch your website today.
          </p>
          <div>
            <Button onClick={()=>{
              this.props.history.push('/templates')
            }}>Get Your Templates</Button>
          </div>

        </LandingPageTitle>
        <SampleWrapper>
          {this.renderLandingSample()}
          
        </SampleWrapper>
      </LandingPageWrapper>
    );
  }
}
