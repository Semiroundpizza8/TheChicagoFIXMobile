import React from 'react';
import { connect } from 'react-redux';
import { CarouselComponent } from './';
export const AboutComponent = () => {
  return (
    <div style={{ width: '100vw', height: '80vh', backgroundColor: 'red' }}>
      <CarouselComponent />

      <div>
        <h1>About Us</h1>
        <p>
          At the CFM we have an appreciation for how physically strenuous construction work can be. We also  understand the true cost of an injury both from the perspective of the worker and the contractor.
          We know that the blue collar workers building our city have families depending on them, and when an injury occurs it has a ripple down effect to all aspects of family life.  Our goal is to get ahead of injuries and begin treating them at the early signs of discomfort to prevent them from becoming a chronic injury.  This improves the employees quality of life both on the job site and at home.
          We also understand the impact that workers compensation injuries have on a contractor.  Lost work time injuries can have a dramatic effect on a company’s Experience Modification Rating, Workers Compensation Premiums, and OSHA rates.  An increase in any of these statistics can  significantly affect a company’s ability to remain competitive.  At the CFM we do everything we can to prevent injuries, but when they do occur to we cooperate with the contractor to manage them in the best interest of all parties.
        </p>
        
      </div>
    </div>
  )
};

export default connect()(AboutComponent);
