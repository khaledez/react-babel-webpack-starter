import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const App = () => (
    <div>
        <h1>Title</h1>
        <Button variant="contained" color="primary">
            Hello World
    </Button>
    </div>
);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false