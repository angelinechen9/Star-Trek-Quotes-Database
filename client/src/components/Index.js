import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Cards from './Cards';

class Index extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = () => {
    axios.get("http://localhost:3001/api/quotes")
    .then(res => {
      this.setState({results: res.data});
    })
  };

  render() {
    return (
      <div>
        <Link to = "/quotes/new"><button><FontAwesomeIcon icon = {faPlusSquare} /></button></Link>
        <br />
        <div className = "container">
          {this.state.results.map((result, index) => (
            <Cards id = {result._id} quote = {result.quote} character = {result.character} tvseriesormovie = {result.tvseriesormovie} />
          ))}
        </div>
      </div>
    )
  }
}

export default Index;
