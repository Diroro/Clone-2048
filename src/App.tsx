import './App.css';

import React, { Component } from 'react';
import {
  directions,
  initCells,
  moveCells,
  populateField,
  removeAndIncreaseCells,
} from './logic'

import ControlPanel from './UI/ControlPanel';
import Field from './UI/Field';
import Layout from './UI/Layout';

class App extends Component {
  public mapKeyCodeToDirection: any = {
    KeyA: directions.LEFT,
    KeyD: directions.RIGHT,
    KeyS: directions.DOWN,
    KeyW: directions.UP,
  }

  public inMove: boolean = false;

  constructor(props: any) {
    super(props);
  }

  public newGame = () => {
    this.props['onStartGame']();
  }

  public componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
    console.log('Props: ', this.props);
    this.newGame();
    
  }

  public componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  
  public render() {
    const { score, cells }: any = this.props;
    console.log('In render: ', score, cells);
    return (
      <Layout>
        <ControlPanel>
          <button className='btn'
            onClick={this.newGame}>New Game</button>
          <div className ='score'>{score}</div>
        </ControlPanel>

        <Field cells={cells} />
      </Layout>
    );
  }

  public handleKeyPress = async (event: any) => {
    const {onMoveCells, onRemoveAndIncreaseCells, onPopulateField}: any = this.props;
    if (['KeyA', 'KeyS', 'KeyD', 'KeyW'].find((item) => item === event.code) && !this.inMove) {
      this.inMove = true;
      onMoveCells(this.mapKeyCodeToDirection[event.code]);

      await delay(100);

      onRemoveAndIncreaseCells();
      onPopulateField();

      // IF NOT MOVED IN THIS ACTION, DO NOT ADD NEW FIELDS

      // IF ANY MORE MOVE IS AVILABLE, GAME OVER 

      // IF SCORE = 2048 SHOW 'YOU ARE WIN! WANT TO CONTINUE?'

      // TODO: ACTIONTYPES
      
      this.inMove = false;
    }
  }
}

const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

export default App;
