import React from 'react';
import { connect } from 'react-redux';

const PictureBackgroundCreator = (props) => {
  const imageBackgroundStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'flex-start',
    padding: '2em',
    color: 'white',
    width: '50vw',
    height: '40vh',
    alignItems: 'flex-start'
  };

  const backgroundColor = props.url ? {
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  } : {
    backgroundColor: '#0e121c'
  }
  return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ ...imageBackgroundStyle, ...backgroundColor}}>
          {props.children}
        </div>
      </div>
    )

}

export const PictureInfo = () => (
  <div style={{ display: 'flex', flexFlow: 'row wrap'}}>
    <PictureBackgroundCreator url="./assets/Red1.jpg">
      <h1>Immediate Injury Assessment</h1>
      <p>We will be there to assess and treat on –site any musculoskeletal injuries that may be plaguing your employees. With us, your employees will avoid the long wait times of the emergency departments and walk-in clinics as well as avoiding unnecessary medical treatment.</p>
    </PictureBackgroundCreator>
    <PictureBackgroundCreator>
      <h1>Wellness Screenings</h1>
      <p>We will come to your offices or jobsites and screen your employees’ vital signs, cholesterol levels, and blood glucose levels. Our staff will then advise your employees on what is needed in order to get their levels to an appropriate healthy level.</p>
    </PictureBackgroundCreator>
    <PictureBackgroundCreator>
      <h1>Strength/Conditioning</h1>
      <p>Our certified personal trainers will come out to your jobsites to lead your employees in a group stretch and warm sessions in order to prepare their bodies for an injury free work day. Our trainers will stay on site to advise your employees on appropriate fitness and diet routines to reach their goals in a healthy and sustainable manner.</p>
    </PictureBackgroundCreator>
    <PictureBackgroundCreator url="./assets/Red2.jpg">
      <h1>Preventative Care</h1>
      <p>We will teach your employees proper lifting and moving techniques in order to avoid the most common workplace injuries including low back pain, cervical strain, and repetitive injuries.</p>
    </PictureBackgroundCreator>
  </div>
)
export default connect()(PictureInfo);
