import React, { Component } from "react";
import "./movie.css";
import Member from "./movei";
import helpme from './thehelp.jpg'
import { Button, ButtonToolbar } from "react-bootstrap";
import ButtonToolBar from "react-bootstrap/";
import { AddMoviesModal } from "./AddMovieModal";

import Detail from "./movieDetai";
import AddMovie from "./addmovie";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const users = [
  { login: "nessrine", pasword: "skipbeat13" },
  { login: "siwar", pasword: "ohayo" },
];

export default class Moviei extends Component {
  state = {
    Caractere: "",
    movies: this.props.movie,
    name: "",
    addModelShow: false,

    table: [],
    ratebtn: [1, 2, 3, 4, 5],
    rate: 0,
    etat: false,
  };
  favorie = [
    {
      id: 5,
      name: "the help",
      description:
        " ",
      rating: "*",
      
      img: helpme,
    },
  ];

  /*ADD MOVIE*/
  handleChangeName = (value) => {
    this.setState({
      name: value,
    });
  };
  handleChangeDescription = (value) => {
    this.setState({
      description: value,
    });
  };
  handleChangeimg = (value) => {
    this.setState({
      img: value,
    });
  };
  handleChangeRate = (value) => {
    this.setState({
      rate: value,
    });
  };
  addObjectMovie = (e) => {
    this.props.movie.push({
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating,
      img: this.state.img,
    });
    console.log(this.props.movie);
    this.setState({ description: "", name: "", rating: "" });
  };

  /*SEARCH FUNCTION*/
  SearchBar = (e) => {
    let movies = this.state.movies;

    if (!e.target.value) {
      this.setState({ movies: this.props.movie });
    } else {
      this.setState({ Caractere: e.target.value });

      let k = this.state.Caractere;

      movies = movies.filter((el) => el.name.includes(k));

      this.setState({ movies: movies });
    }
  };
  /*rating*/
  getrate = (e) => {
    this.state.etat = true;
    let movies = this.state.movies;
    this.setState({
      rate: e,
    });
    console.log(this.state.rate);
    console.log(e);
    this.state.table = this.state.movies.filter((el) => el.rating.length >= e);

    this.affichage(this.state.etat);
  };
  affichage = (et) => {
    if (this.state.etat == true) {
      alert("true");
      this.setState({
        movies: this.state.table,
      });
    } else {
      alert("false");
      this.setState({
        movies: this.props.movie,
      });
    }
  };

  render() {
    // let condition = this.state.rate ? table : this.state.movies;

    let addModelClose = () => this.setState({ addModelShow: false });
    let addModelClose1 = () => this.setState({ addModelShow1: false });
    return (
      <div>
        <div className="zone-recherche">
          <div>
            <input
              className="recherchezone"
              type="text"
              placeholder="Search..."
              onChange={this.SearchBar}
            />
          </div>
          <div className="rating">
            {this.state.ratebtn.map((el) => (
              <span
                variant="primary"
                style={{ cursor: "pointer" }}
                onClick={() => this.getrate(el)}
              >
                {" "}
                {<i style={{ color: "#f1ee0f" }} class="fas fa-star"></i>}
              </span>
            ))}{" "}
          </div>
        </div>
        <center><ButtonToolbar>
          <button
            className="add"
            onClick={() => this.setState({ addModelShow: true })}
          >Add film 
           
          </button>
        </ButtonToolbar>
        </center>
        <AddMoviesModal
          addfilmName={this.handleChangeName}
          addfilmDescription={this.handleChangeDescription}
          addfilmRate={this.handleChangeRate}
          addfilmimg={this.handleChangeimg}
          addObjectMovie={this.addObjectMovie}
          state={this.state}
          show={this.state.addModelShow}
          onHide={addModelClose}
        />
        

        <div className="cards ">
          {this.state.movies.map((el) => (
            <div className="card " key={el.id}>
              <img className="card img " src={el.img} />
              <br />
              <div className="card_title" >
                <h3 style={{ color: "#D58910 " }}>{el.name}</h3>
                <span>{el.rate}</span>

                <p>{el.description}</p>
              </div>
              <div className="">
                <Link to={"/detail/" + el.id}>
                  {" "}
                  <button className="detail">
                    More details <i class=""></i>
                  </button>
                </Link>
                <button
                  className="favori"
                  onClick={() => this.props.addFavorie(el)}
                >
                  <i style={{ color: "red" }} class="fas fa-heart"></i>
                </button>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
