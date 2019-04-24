import React, {Component} from 'react';

class ErrorBoundy extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        // Display fallback UI
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError) {
            //render any custom fallback UI
            return <h1><img src='https://fontmeme.com/permalink/190424/c95339e3ac90ddc6f2743a02d92ae37d.png' alt='No Data Found'/></h1> 
        } 
        return this.props.children;
    }
}

export default ErrorBoundy