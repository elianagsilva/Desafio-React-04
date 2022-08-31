import React from "react";
import axios from "axios";

const FilmesAPI = axios.create({
  baseURL: 
});
export default class App extends React.Component {
  state = {
    movies: []
  };
  addFilmes = async () => {
    const resposta = await FilmesAPI.get();
    const api = resposta.data.results.map((item) => {
      return {
        title: item.title,
        overview: item.overview,
        image: `${item.poster_path}`
      };
    });
    this.setState({
      movies: api
    });
  };
  componentDidMount() {
    this.addFilmes();
  }
  render() {
    return (
      <div>
        <h1></h1>
        <ol>
          {this.state.movies.map((item) => (
            <>
              <li>{item.title}</li>
              <p>{item.overview}</p>
              <img src={item.image} alt={`Poster do filme ${item.title}`} />
            </>
          ))}
        </ol>
      </div>
    );
  }
}
