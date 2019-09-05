import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class Cards extends Component {
  render() {
    return (
      <Link to = {"/quotes/" + this.props.id}>
        <q>{this.props.quote}</q>
        <p>{this.props.character}</p>
        <p>{this.props.tvseriesormovie}</p>
      </Link>
    )
  }
}

export default Cards;
