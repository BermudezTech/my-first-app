import React, { Component } from "react";

export default class Notas extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({ posts: data });
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h1>Este es el modulo de las notas</h1>
        {this.state.posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
