import React, {Component} from 'react';
import axios from 'axios';

class Edit extends Component {
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

  putQuote = () => {
    axios.put(`http://localhost:3001/api/quotes/${this.props.match.params.id}`, {
      quote: this.state.quote,
      character: this.state.character,
      tvseriesormovie: this.state.tvseriesormovie
    })
    this.props.history.push(`/quotes/${this.props.match.params.id}`);
  };

  render() {
    return (
      <form onSubmit = {this.putQuote}>
        <label id = "quotelabel">Quote</label>
        <br />
        <textarea id = "quote" name = "quote" cols = "50" rows = "20" value = {this.state.quote} onChange = {e => this.setState({quote: e.target.value})}></textarea>
        <br />
        <label id = "characterlabel">Character</label>
        <br />
        <input id = "character" type = "text" name = "character" value = {this.state.character} onChange = {e => this.setState({character: e.target.value})} />
        <br />
        <label id = "tvseriesormovielabel">TV Series or Movie</label>
        <br />
        <input id = "tvseriesormovie" type = "text" name = "tvseriesormovie" value = {this.state.tvseriesormovie} onChange = {e => this.setState({tvseriesormovie: e.target.value})} />
        <br />
        <input id = "submit" type = "submit" value = "Submit" />
      </form>
    )
  }
}

export default Edit;
