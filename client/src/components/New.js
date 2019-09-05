import React, {Component} from 'react';
import axios from 'axios';

class New extends Component {
  state = {
    quote: null,
    character: null,
    tvseriesormovie: null
  };

  postQuote = () => {
    axios.post("http://localhost:3001/api/quotes", {
      quote: this.state.quote,
      character: this.state.character,
      tvseriesormovie: this.state.tvseriesormovie
    })
    this.props.history.push("/quotes");
  };

  render() {
    return (
      <form onSubmit = {this.postQuote}>
        <label id = "quotelabel">Quote</label>
        <br />
        <textarea id = "quote" name = "quote" cols = "50" rows = "20" onChange = {e => this.setState({quote: e.target.value})}></textarea>
        <br />
        <label id = "characterlabel">Character</label>
        <br />
        <input id = "character" type = "text" name = "character" onChange = {e => this.setState({character: e.target.value})} />
        <br />
        <label id = "tvseriesormovielabel">TV Series or Movie</label>
        <br />
        <input id = "tvseriesormovie" type = "text" name = "tvseriesormovie" onChange = {e => this.setState({tvseriesormovie: e.target.value})} />
        <br />
        <input id = "submit" type = "submit" value = "Submit" />
      </form>
    )
  }
}

export default New;
