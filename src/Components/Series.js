import React from "react";
import axios from "axios";

const SeriesApi = axios.create({
  baseURL: ""
});

export default class Series extends React.Component {
  state = {
    series: []
  };
  componentDidMount() {
    this.addSeries();
  }
  addSeries = async () => {
    const response = await SeriesApi.get();
    const info = response.data.results.map((item) => {
      return {
        title: item.name,
        overview: item.overview,
        image: `${item.poster_path}`
      };
    });
    this.setState({});
  };
  render() {
    return (
      <div>
        <h1></h1>
        <ol>
          {this.state.series.map((item) => (
            <>
              <li>{item.title}</li>
              <p>{item.overview}</p>
              <img src={item.image} alt={`Poster da série ${item.title}`} />
            </>
          ))}
        </ol>
      </div>
    );
  }
}
