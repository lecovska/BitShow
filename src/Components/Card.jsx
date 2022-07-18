import React from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.funkcija2);
        
    }

    render() { 
        return <div className ="card" onClick={()=>this.props.abcF(this.props.abc)}>
            {/* kartica */}
            <img src={this.props.abc.image.medium} alt="movie-image"></img>
            <h3>{this.props.abc.name}</h3>
        </div>
    }
}
 
export default Card;