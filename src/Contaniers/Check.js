import React, { Component } from 'react';

class Check extends Component{

    constructor (props)
    {
        super(props);
        this.state = {
            count: this.props.title
        };
    }
    render(){
    return(
       // <div class="ui compact segment">
      ///<div class="ui fitted checkbox">
      //<input type="checkbox" class="hidden" readonly="" tabIndex="0" />
      //<label>{this.state.count}</label>
    //</div>
  //</div>
  <div class="ui compact segment">
  <div class="ui fitted checkbox">
    <input type="checkbox" class="hidden" readonly="" tabIndex="0" />
    <label></label>
  </div>
</div>
);
    }
}
export default Check;