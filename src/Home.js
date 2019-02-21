import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Home extends Component {
    
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    <Link className="App-link" to="/quiz">Quiz</Link>
                </Button>
            </div>
        );
    }
}

export default Home;