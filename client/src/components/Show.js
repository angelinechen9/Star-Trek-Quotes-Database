import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Show extends Component {
  state = {
    quote: null,
    character: null,
    tvseriesormovie: null
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    axios.get(`http://localhost:3001/api/quotes/${this.props.match.params.id}`)
    .then(res => {
      this.setState({quote: res.data[0].quote, character: res.data[0].character, tvseriesormovie: res.data[0].tvseriesormovie});
    })
  };

  deleteQuote = () => {
    axios.delete(`http://localhost:3001/api/quotes/${this.props.match.params.id}`)
    this.props.history.push("/quotes");
  }

  render() {
    return (
      <div id = "quotecard">
        <button><Link to = "/quotes"><FontAwesomeIcon icon = {faHome} /></Link></button>
        <q>{this.state.quote}</q>
        <p>{this.state.character}</p>
        <p>{this.state.tvseriesormovie}</p>
        <button><Link to = {"/quotes/" + this.props.match.params.id + "/edit"}><FontAwesomeIcon icon = {faEdit} /></Link></button>
        <button onClick = {this.deleteQuote}><FontAwesomeIcon icon = {faTrash} /></button>
      </div>
    )
  }
}

export default Show;
