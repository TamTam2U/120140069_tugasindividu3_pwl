import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class Cardd extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTdlMmZlOTExZDhhMGRhNGU1MTRlNmY5YTQ4M2ViYiIsInN1YiI6IjY1MmJhMGU3ZWE4NGM3MDBlYmEyMDRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YPRAZlXZWcVRy9XxYibkFsqKw44zV5zv_uX8Y7T_pac",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({
          films: res.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { films } = this.state;
    return (
      <Container className="mt-5">
        <Row>
          {films.map((film, index) => {
            return (
              <Col className="mt-3" key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}` }
                  />
                  <Card.Body>
                    <Card.Title>{film.title}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
