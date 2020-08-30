import React, { Fragment } from 'react';
import Modal from 'react-modal';
import winBird from '../Modal/winBird.svg';

Modal.setAppElement(document.getElementById('root'));

function EndWindow (props) {
  let msg = <div className="nextBtn nextBtnActive endBtn" onClick={()=>{window.location.href=document.URL}}>Начать сначала</div>;
  if (props.state.score === 30) {
    msg = <Fragment>
            <div className="endMsg">Теперь вы точно знаете, кто это чирикнул :)</div>
            <div className="winBirdContainer">
              <img src={winBird} className="winBird" alt="Win bird" />
            </div>
          </Fragment>
  }

  return (
    <div>
      <Modal 
        isOpen={props.state.showModal}
        contentLabel="Quiz end"
        className="Modal"
        overlayClassName="Overlay"
      >
        <p className="endTitle">Поздравляем!</p>
        <p className="endMsg">Вы набрали {props.state.score} из 30 возможных очков.</p>
        {msg}
      </Modal>
    </div>
  );
  
}
  

export default EndWindow;