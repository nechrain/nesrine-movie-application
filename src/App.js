import React, { Component } from "react";


import Moviei from "./component/movies/Moviei";
import Navbar from "./component/Navbar/Navbar";
import Spinner from './component/spinner'

import Footer from'./component/footer/footer'
import Sigin from "./component/sign/sigin";


import Favorie from "./component/favorie/favorie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Example from './carousel'

export default class App extends Component {
  state = {
   loading:true,
    favorie: [],
  };
  movie = [
    {
     
      name: "Dr Dolittle ",
      description: "Dolittle is a 2020 American fantasy comedy a. ",
      rating: "***",
      
      img: "https://fr.web.img5.acsta.net/pictures/19/12/23/15/16/5585346.jpg",
    },
    {
      
      name: "The taxi driver",
      description: "A widowed father and taxi driver who drives a Ger",
      rating: "*",
      
      img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXM1PJN/image?locale=fr-ca&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
    },
    {
      
      name: "the green mile",
      description: "Paul Edgecomb, prisoner is hanted by .",
      rating: "*****",
      
      img:"https://images-na.ssl-images-amazon.com/images/I/41EMM8V7AFL._AC_SY445_.jpg",
    },
    {
      
      name: "The Joker",
      description: "For more information click on detail button",
      rating: "****",
      
      img:
         "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg",
    },
    {
      
      name: "The exit",
      description: "A rock climber tries to save the day when a mysteriou,",
      rating: "****",
      
      img:
        "https://asianwiki.com/images/4/45/Exit_%28Korean_Movie%29-p2.jpg",
    },
    {
      
      name: "The help",
      description: "For more information click on detail button",
      rating: "*****",
      categorie: "drama",
      img:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/84/82/74/19799007.jpg",
    }
  ];
/* add favoris*/
  addFavorie = (e) => {
    alert("the movie have been added to the list of your favorite movie");
    this.state.favorie.push(e);
  };

  /*remove from favorite*/
  remove = (e) => {
    alert("the film have been deleted");
    let a = "";
    let c = [];
    for (let i = 0; i < this.state.favorie.length; i++) {
      if (e == this.state.favorie[i]) {
        a += i;
        c = [...this.state.favorie.splice(1, 1)];
      }
    }
    this.setState({
      favorie: c,
    });
  };
  /*rating*/


  /*loading*/
  componentWillMount() {
    setTimeout(() => {this.setState({ loading: false, });}, 
    3000);
  }

  /************************** */
  render() {
    if (this.state.loading) {return <Spinner />;}
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Navbar />
              </div>
<div>
  <Example />
</div>
              <div>
                <Moviei movie={this.movie} addFavorie={this.addFavorie} />
              </div>
            </Route>

            <Route path="/login">
              <div>
                <Navbar />
              </div>
              <div>
                {" "}
                <Sigin />
              </div>
            </Route>
          
            {}

            <Route>
              <Favorie favorie={this.state.favorie} remove={this.remove} />
            </Route>
          </Switch>
        </Router>
        <div>
        <Footer />  
              </div>
           
      </div>
    );
  }
}
