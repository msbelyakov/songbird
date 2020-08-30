import React from 'react';
import QuestionPanel from './QuestionPanel/QuestionPanel';
import AnswerPanel from './AnswerPanel/AnswerPanel';
import DescPanel from './DescPanel/DescPanel';
import NextBtn from './NextBtn/NextBtn';

function Main(props) {
  
  return (
    <main className="main">
      <QuestionPanel state = {props.state} />
      <AnswerPanel index = {props.index} attempt = {props.attempt} />
      <DescPanel state = {props.state} />
      <NextBtn action = {props.action}/>
    </main>
  );
}

export default Main;