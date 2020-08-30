import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import EndWindow from './components/Modal/EndWindow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      id: Math.ceil(Math.random() * 6),
      score: 0,
      attemptCount: 5,
      rightChoose: false,
      curId: 0,
      showModal: false,
    };
  }


  nextBtnClick = () => {
    
    if (this.state.rightChoose === false) return;
    let nextIndex = this.state.index + 1;
    let newId =  Math.ceil(Math.random() * 6);
    this.setState({
      index: nextIndex, 
      id: newId,
      rightChoose: false,
    });

    if (this.state.index === 5) {
      this.setState({
        showModal: true,
        index: 0,
      }); 
      
    }
    document.querySelector('.rightAttempt').classList.remove('rightAttempt');
    document.querySelector('.nextBtn').classList.remove('nextBtnActive');
    const arrWrongAttempt = Array.from(document.querySelectorAll('.wrongAttempt'));
    arrWrongAttempt.map(item => item.classList.remove('wrongAttempt'));
    document.querySelector('.activeItem').classList.remove('activeItem');
    document.getElementById(`item${(this.state.index+5)%5+1}`).classList.add('activeItem');
  }

  attempt = (e) => {
    this.setState({
      curId: +e.target.id
    });

    if (this.state.rightChoose === true) return;
    
    if (+e.target.id === this.state.id) {
      this.setState({
        score: this.state.score + this.state.attemptCount,
        attemptCount: 5,
        rightChoose: true, 
      });
      document.getElementById(e.target.id).classList.add('rightAttempt');
      document.querySelector('.nextBtn').classList.add('nextBtnActive');
      
      let sound = new Audio('correctAnswerSFX.mp3');
      sound.play();
           
    } else {
        if (document.getElementById(e.target.id).classList.contains('wrongAttempt')===false) {
          this.setState({attemptCount: this.state.attemptCount - 1});  
          document.getElementById(e.target.id).classList.add('wrongAttempt');

          let sound = new Audio('incorrectAnswerSFX.mp3');
          sound.play();
        }
      }

  }


  render () {
    return (
      <Fragment>
        <Header state = {this.state}/>
        <Main 
          action = {this.nextBtnClick} 
          attempt = {this.attempt}
          index = {this.state.index} 
          id = {this.state.id}
          state = {this.state}
        />
        <EndWindow state = {this.state}/>
      </Fragment>
    );
  }
}

export default App;
