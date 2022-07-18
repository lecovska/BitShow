import React from "react";
import HomePage from "./Pages/HomePage";
import SinglePage from "./Pages/SinglePage";
import "./movies.css"

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.setSelectMovie = this.setSelectMovie.bind(this)
        this.backToHome = this.backToHome.bind(this)
        // this.zzzz = this.setVezba.bind(this)
        this.state = { 
            selectedMovie: '',
            data : []
         }
    }


    fetchData(){
        fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        // .then(res=>console.log(res))
        .then(response => this.setState({
            data : response.sort((a,b) => b.rating.average - a.rating.average).filter((e,i)=>i<50)
        }))
    }

    componentDidMount(){
        this.fetchData()
    }

    setSelectMovie(obj){
        this.setState({
            //umesto da setujemo stejt na true, setovati stejt na kliknuti objekat ili na id kliknutog objekta
            selectedMovie:obj
        })
    }

    backToHome(){
        this.setState({
            selectedMovie:''
        })
    }

    setVezba(){
        console.log(this);
        this.setState({
            vezba: true
        })
    }

    render() { 
        return <div>
            {/* <button onClick={()=>this.setVezba()}>Go to Single Page</button>  */}
            {!this.state.selectedMovie ? <HomePage xyz={this.state.data} xyzFunkcija={this.setSelectMovie} funkcija={this.setSelectMovie}/> : 
            <SinglePage backToHome={this.backToHome} qwe={this.state.selectedMovie}/>}
        </div>
    }
}
 
export default Movies;