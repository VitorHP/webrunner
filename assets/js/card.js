
import React from 'react';

const Card = (props) =>
  (
    <div className="card">
      <img src={`/images/cards/${props.card.id}.png`}/>
    </div>
  )

const CorpCard = (props) => (<Card faction="corp" {...props}/>)

CorpCard.defaultProps = {
  card: {
    id: "corp-background"
  }
}

const RunnerCard = (props) => (<Card faction="corp" {...props}/>)

RunnerCard.defaultProps = {
  card: {
    id: "runner-background"
  }
}

export { CorpCard, RunnerCard };
