import React, { Component } from 'react';

class Counter extends Component {
//   state ={ 
//       value: this.props.counter.value,
//     //   tags:["tag1","tag2","tag3"]
//   };

componentDidUpdate(prevProps,prevState){
if (prevProps.counter.value !== this.props.counter.value){

}
}


  // a way of adding css 
  styles = {
      fontSize: 10,
      fontWeight: "bold"
  }

//   constructor(){
//       super();
//       //binding the handleIncrement function to always refrence the counter componenet
//        this.handleIncrement = this.handleIncrement.bind(this);
//   }

//   handleIncrement = () => {
//     //   console.log("Increment Clicked" , this.state.count);
//       this.setState({value: this.state.value +1 })
//   }

  renderTags (){
      if(this.state.tags.length === 0) return <p> There are no tags</p>
  }
    render() { 

        console.log(this.props)
 

        return (
        <div>
            {this.props.children}
            <span style={this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
           
            
    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* <ul>
            
            {/* taking a string and mapping it to a javascript object */}
           {/* unique key for tag */}
            {/* {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} */}
                {/* {this.renderTags()} */}
            {/* </ul>  */}
             </div>  
        );
    }
    getBadgeColor() {
        let classes = "badge m-2 badge-";
        // if the count is 0 yellow badge, if not blue badge
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

//method of formatting the word "zero" when the counter is at 0
    formatCount () {
        //deconstructing
        const {value} = this.props.counter
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;