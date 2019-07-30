import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from './assets/image1.jpg';

class Home extends Component {
    
    render() {
        return (
            <div>
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  useKeyboardArrows
                  showIndicators={false}
                  dynamicHeight={false}
                  >
                    <div className="slides">
                        <img src={image1} />
                    </div>
                    <div>
                        <img src="assets/image2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Home;