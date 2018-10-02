import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
   
    render() { 
       //making cleaner code, dont have to write "this.props."
        const {onReset,counters,onDelete,onIncrement} = this.props;
        
        return ( <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {/* looping through the counters in state object */}
           {counters.map(counter =>(
                <Counter key={counter.id}  onDelete={onDelete} onIncrement={onIncrement} counter={counter}>
                {/* children prop */}
                <h4>Counter #{counter.id}</h4>
                </Counter> 
                ))}
        </div> );
    }
}
 
export default Counters;