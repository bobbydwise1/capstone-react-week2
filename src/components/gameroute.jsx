import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import MoveHistory from './MoveHistory';
import Gameboard from './Gameboard';
import CapturedBox from './CapturedBox';
import ChatBox from './Chatbox';

function GameRoute(){
  const compBox = {
    border: "solid yellow",
    backgroundColor: "light yellow",
    padding: "20px"
  }

  const gameBoardGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr 1fr",
    padding: "10px",
    margin: "10px"
  }

  return (
    <div style={compBox}>
      <h1>This is the GameRoute Component.</h1>
      <div style={gameBoardGrid}>
        <MoveHistory></MoveHistory>
        <Gameboard></Gameboard>
        <CapturedBox></CapturedBox>
        <ChatBox></ChatBox>
      </div>
    </div>
  );
}




export default GameRoute;
