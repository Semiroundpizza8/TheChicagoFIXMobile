import React from 'react';
import { connect } from 'react-redux';

const pictureBackgroundCreator = (url, header, text, left) => {
  let imageBackgroundStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '2em',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '40vw',
    height: '40vh'
  };

  let sideBlock = {
    backgroundColor: '#0e121c',
    color: 'white',
    width: '60vw',
    height: '40vh',
    padding: '3vw'
  }
  return left ? (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div style={sideBlock}>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
      <div style={imageBackgroundStyle} />
    </div>
  ) : (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={imageBackgroundStyle} />
        <div style={sideBlock}>
          <h1>{header}</h1>
          <p>{text}</p>
        </div>
      </div>
    )

}

export const PictureInfo = () => (
  <div>
    {pictureBackgroundCreator('./assets/Orange1.jpg', 'Immediate Injury Assessment', 'We will be there to assess and treat on –site any musculoskeletal injuries that may be plaguing your employees. With us, your employees will avoid the long wait times of the emergency departments and walk-in clinics as well as avoiding unnecessary medical treatment.', true)}
    {pictureBackgroundCreator('./assets/Red1.jpg', 'Wellness Screenings', 'We will come to your offices or jobsites and screen your employees’ vital signs, cholesterol levels, and blood glucose levels. Our staff will then advise your employees on what is needed in order to get their levels to an appropriate healthy level.')}
    {pictureBackgroundCreator('./assets/Red2.jpg', 'Job Specific Strength/Conditioning', 'Our certified personal trainers will come out to your jobsites to lead your employees in a group stretch and warm sessions in order to prepare their bodies for an injury free work day. Our trainers will stay on site to advise your employees on appropriate fitness and diet routines to reach their goals in a healthy and sustainable manner.', true)}
    {pictureBackgroundCreator('./assets/Orange2.jpg', 'Preventative Care', 'We will teach your employees proper lifting and moving techniques in order to avoid the most common workplace injuries including low back pain, cervical strain, and repetitive injuries.')}
  </div>
)
export default connect()(PictureInfo);
