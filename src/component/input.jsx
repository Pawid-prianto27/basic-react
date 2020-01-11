import React from 'react';

class Input extends React.Component {

    constructor(props){
        super(props)
      }

    render(){
        return (
            <div>
                <input name="name" value={this.props.name}>
                </input>
            </div>
        )
    }
}

export default Input;