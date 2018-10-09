// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

let channel = socket.channel("room:123", {})

const renderBoard = (boardState) => (
  ReactDOM.render(
    <Game game={boardState}/>,
    document.getElementById('react')
  )
)

document.addEventListener("DOMContentLoaded", function() {
  channel.join()
    .receive("ok", resp => renderBoard(resp))
    .receive("error", resp => { console.log("Unable to join", resp) })

  channel
    .on("new_msg", msg => { console.log(msg) })

});
