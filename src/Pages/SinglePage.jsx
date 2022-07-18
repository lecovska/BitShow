import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.fetchDetails = this.fetchDetails.bind(this)
        this.fetchCast = this.fetchCast.bind(this)
        this.state={
            seasons : [],
            cast : []
        }
        console.log(this.state.seasons);
    }

    
    fetchDetails(){
        fetch(`https://api.tvmaze.com/shows/${this.props.qwe.id}/seasons`)
        .then(res => res.json())
        .then(response => this.setState({
            seasons: response
        }))
    }
    fetchCast(){
        fetch(`https://api.tvmaze.com/shows/${this.props.qwe.id}/cast`)
        .then(res => res.json())
        .then(response => this.setState({
           cast: response
        }))
    }

    componentDidMount (){
        this.fetchDetails()
        this.fetchCast()
    }
    

    render() { 
        return <div className="singleFPage">
            <Header></Header>
            <div className="singleMovieWrapper">
                <div>
                    <h2>{this.props.qwe.name}</h2>
                    <img className="poster" src={this.props.qwe.image.medium} alt={`Image of ${this.props.qwe.name}`}/>
                </div>
                <div>
                    <h3>Seasons</h3>
                    <ul>
                        {this.state.seasons.map(e =>{return <li>{`${e.premiereDate} - ${e.endDate}`}</li>})}
                    </ul>
                    <h3>Cast</h3>
                    <ul>
                        {this.state.cast.map(e=>{return <li>{e.character.name}</li>})}
                    </ul>
                </div>
            </div>

            <button onClick={this.props.backToHome}>Back to Home</button>
            <Footer></Footer>
        </div>
    }
}
 
export default SinglePage;