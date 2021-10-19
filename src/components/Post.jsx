import React, { Component } from 'react';
import Chirp from './Chirp';
import Chirper from './Chirper';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '', 
            array: []
        };
    };

    onInputChange = (value) => {
        this.setState({ message: value });
    };

    handleForm = (event) => {
        event.preventDefault();
        //console.log(this.state.message);
        let newArry = this.state.array;
        newArry.push(this.state.message);
        this.setState({array : newArry});
   
        

    };

    render() {
       // console.log(this.state.message);
        return(
            <div>
                <h1 className='display-1 text-warning font-weight-bold d-flex justify-content-center'>Chirper!</h1>
                <hr />
                <form className='d-flex justify-content-center mb-3' onSubmit={(e) => this.handleForm(e)}>
                <input className='w-50'
                placeholder='Write a message!'
                value={this.state.message}
                onChange={ (event) => this.onInputChange(event.target.value)}/>
                <br />
                <button className='bg-dark text-warning' type='submit'>Chirp!</button>
                </form>
                <Chirper value={this.state.array} />
            </div>
        )

    }
}



export default Post;
