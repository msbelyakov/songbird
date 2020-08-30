import React from 'react';
import { questions } from '../data';

function Header(props) {
  let arrQuestion;
  arrQuestion = questions.map((item, index) => {
    let activeItem='activeItem';
    if (index > 0) activeItem=''
    return (
    <div className={"item "+activeItem} key={index} id={"item"+index}>{item}</div>
    );
  });

  
  return (
    <header className="header">
        <div className="topLine">
            <h1 className="logo">Song<span>Bird</span></h1>
            {/* <div>index={props.state.index} id={props.state.id}</div> */}
            <div className="score">Score: {props.state.score}</div>
        </div>
        <div className="question_list">
            {arrQuestion}
        </div>
    </header>

  );
}

export default Header;