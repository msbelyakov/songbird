import React from 'react';
//import birdsData from '../data';
import imgQuestions from './questionImg.jpg';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import {birdsData} from '../../data';


function Question(props) {
  let birdName;
  let birdImg;
  if (props.state.rightChoose === true) {
    birdName = birdsData[props.state.index][props.state.id-1].name;
    birdImg = birdsData[props.state.index][props.state.id-1].image;
  }
    else {
      birdName = '******';
      birdImg = imgQuestions;
    }
  
  return (
    <div className="questionPanel">
      <div className="imgQuestions">
        <img src={birdImg} alt="question"/>
      </div>
      <div className="rightSide">
        <h2 className="birdName">{birdName}</h2>
        <AudioPlayer index = {props.state.index} id = {props.state.id-1} />
      </div>
    </div>

  );
}

export default Question;