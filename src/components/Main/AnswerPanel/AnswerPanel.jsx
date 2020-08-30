import React from 'react';
import {birdsData} from '../../data';
  

function ListItem(props) {
  return (
    <li className="listItem" id={props.id} onClick={props.attempt}>
      {props.value}
    </li>);
}

function Answer(props) {
    
  const listItems = birdsData[props.index].map((item) => 
    <ListItem key={item.id}
              id={item.id}
              value={item.name} 
              attempt={props.attempt}/>
    
  );

  return (
    <div className="answerPanel">
      <ul className="list">
        {listItems}
      </ul>      
    </div>

  );
}

export default Answer;