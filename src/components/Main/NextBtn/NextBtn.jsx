import React from 'react';

function NextBtn(props) {
  return (
    <div className="nextBtn" onClick={props.action}>
        Следующий вопрос
    </div>
  );
}

export default NextBtn;