import React, { Fragment } from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import {birdsData} from '../../data';



function DescPanel(props) {
  let content;
  if (props.state.rightChoose === false && props.state.attemptCount ===5) {
    content = <div className="content"> 
                Послушайте запись и попробуйте отгадать, какая это птица
              </div>
  } else {
      content = <Fragment>
                  <div className="imgQuestions">
                    <img src={birdsData[props.state.index][props.state.curId-1].image} alt="bird"/>
                  </div>
                  <div className="rightSide">
                    <div className="birdName">{birdsData[props.state.index][props.state.curId-1].name}</div>
                    <div className="birdNameLat">{birdsData[props.state.index][props.state.curId-1].species}</div>
                    <AudioPlayer index = {props.state.index} id = {props.state.curId-1} />
                    <div className="birdDescr">{birdsData[props.state.index][props.state.curId-1].description}</div>
                  </div>
                  
                </Fragment>
    }

  return (
    <div className="descPanel">
      {content}      
    </div>

  );
}

export default DescPanel;