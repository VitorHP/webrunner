import React from 'react';
import { CorpCard, RunnerCard } from './card';

const Game = (props) => {
  const { runner, corp, issues, triggers } = props.game;

  return (
    <div className="game">
      <div className="game__corp">
        <div className="game__hand">
          {corp.hand.map((card, i) => <CorpCard key={i} card={card}/>)}
        </div>
        <div className="game__local-servers">
          <div className="game__discard">
            <CorpCard/>
          </div>
          <div className="game__deck">
            <CorpCard/>
          </div>
          <div className="game__identity">
            <CorpCard card={props.game.corp.identity}/>
          </div>
        </div>
        <div className="game__remote-servers">
        </div>
      </div>
    </div>
  )
}

export default Game;
