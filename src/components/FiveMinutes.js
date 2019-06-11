import React, { Component } from "react";
import styled from "styled-components";
import { TextInput } from "@primer/components";

class Greetings5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <TextInput
          type="text"
          onChange={this.onChange}
          value={this.state.name}
        />
      </div>
    );
  }
}

class Greetings6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quote: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(res => {
        this.setState({
          quote: res.value
        });
      });
  }

  onChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <TextInput
          type="text"
          onChange={this.onChange}
          value={this.state.name}
        />
        <div>{this.state.quote}</div>
      </div>
    );
  }
}

class Greetings7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quote: "",
      searchResult: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(res => {
        this.setState({
          quote: res.value
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.name}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            searchResult: res.result.map(item => item.value)
          });
        });
    }
  }

  onChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <TextInput
          type="text"
          onChange={this.onChange}
          value={this.state.name}
        />
        <div style={{ marginTop: "2rem" }}>{this.state.quote}</div>
        <ul>
          {this.state.searchResult.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class Greetings8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quote: "",
      searchResult: [],
      windowWidth: window.innerWidth
    };
    this.onChange = this.onChange.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(res => {
        this.setState({
          quote: res.value
        });
      });
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.name}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            searchResult: res.result.map(item => item.value)
          });
        });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  onChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  updateWidth() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  render() {
    return (
      <div>
        <div>Window width: {this.state.windowWidth}</div>
        <h1>Hello, {this.state.name}</h1>
        <TextInput
          type="text"
          onChange={this.onChange}
          value={this.state.name}
        />
        <div style={{ marginTop: "2rem" }}>{this.state.quote}</div>
        <ul>
          {this.state.searchResult.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export const FiveMinutes = {
  Styles: styled.div`
    color: white;
    width: 32rem;
    height: 45rem;
    overflow-y: auto;
    ${props => props.dense && "transform: translateY(-3rem);"}
  `,
  Greetings1() {
    return (
      <div>
        <h1>Hello, World</h1>
      </div>
    );
  },
  Greetings2(props) {
    return (
      <div>
        <h1>Hello, {props.name}</h1>
      </div>
    );
  },
  Greetings3(props) {
    return (
      <div>
        <h1>Hello, {props.name}</h1>
        {props.children}
      </div>
    );
  },
  Greetings4(props) {
    return (
      <div>
        <h1>Hello, {props.name}</h1>
        {props.children({ polite: true })}
      </div>
    );
  },
  Greetings5,
  Greetings6,
  Greetings7,
  Greetings8
};
