import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.dpstream.movie/movies/static/img/w300/iXVaWbxmyPk4KZGZk5GGDGFieMX.jpg',
   
    caption: 'Slide 1',
    
    key: '1'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/8/8c/The_Accidental_Detective_2_%28p2%29.jpg',
    
    caption: 'Slide 2',
    
    key: '2'
  },
  {
    src: 'https://www.dramamilk.com/wp-content/uploads/2019/09/Exit-Korean-Movie-Review-Drama-Milk-1-4-1.jpg',
    
    caption: 'Slide 3',
   
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;