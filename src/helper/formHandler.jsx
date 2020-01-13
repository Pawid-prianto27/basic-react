import React from 'react';
import { render } from '@testing-library/react';

const FormHandler = OriginalComponent => {
    class NewComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            color: ""
        }
    }

    changeName = (value) => {
        this.setState({
            name: value,
            color: this.generateColor()
        })
    }

    generateColor = () => {
        let items = ['green', 'pink', 'aqua']
        let randomColor =  items[Math.floor(Math.random() * items.length)]
        return randomColor
    }

    createColor= () => {
        let items = ['green', 'pink', 'aqua']
        return items[Math.floor(Math.random() * items.length)]
    }

    render(){
        return (
            <OriginalComponent
                color = {this.state.color}
                changeName = {this.changeName}
                name = {this.state.name}
            
            />
        )
    }
}
    return NewComponent
}
export default FormHandler;     