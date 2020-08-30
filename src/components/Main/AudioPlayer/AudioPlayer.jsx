import React from 'react';
import Audio from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {birdsData} from '../../data';

function AudioPlayer(props) {
  const lnk =  birdsData[props.index][props.id].audio;
  return (
    <Audio className="audioPlayer"
      autoPlayAfterSrcChange = {false}
      showVolumeControl = {false}
      showLoopControl = {false}
      showSkipControls = {false}
      showJumpControls = {false}
      showDownloadProgress = {false}
      src = {lnk}
    />
  );
}

export default AudioPlayer;