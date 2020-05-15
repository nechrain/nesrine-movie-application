import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

import { Label, Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Favorie extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
         
          <div className="favoritte">
            {this.props.favorie.map((el) => (
              <div className="pos">
                <div>
                  <img className="img-detail" src={el.img} />
                </div>

                <div className="detail">
                  <Container>
                  <h2>
                    {" "}
                    <Label className="label-decription">Name</Label>
                  </h2>
                  <h2>{el.name}</h2>
                  <h3>
                    {" "}
                    <Label className="label-decription">Category</Label>
                  </h3>
                  <h5>{el.categorie}</h5>
                  <h3>
                    {" "}
                    <Label className="label-decription">Description</Label>
                  </h3>
                  <p>{el.description}</p> <br />
                  <center><button
                    className="supprim"
                    onClick={() => this.props.remove(el)}
                  ><i  style={{ color: "grey" }} class="fas fa-trash"></i>
                  </button>
                  </center>
                  </Container>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
