import { Component } from 'react';

export class HeaderComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <header>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
        </header>
    )}
    shouldComponentUpdate(){

    }
    componentDidUpdate(){
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
}