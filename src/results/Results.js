import React, { Component } from 'react';
// show _Name_ you won! along with number of tries to win.

class Results extends Component {
    state = {  } // save users and tries in storage? we can display results User/tries will need a fetch
    render() { 
        return ( 
            <h1>Results</h1>
            //<h4 {Name} you Won! and it only/really took you {tries}!/?
        );
    }
}
 
export default Results;