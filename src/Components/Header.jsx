import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.fetchSearch = this.fetchSearch.bind(this);
        this.state = { 
            data: []
         }
    }
    fetchSearch(value){
        fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then(res => res.json())
        .then(response => this.setState({
            data : response
        }))
    }

    

    render() { 
        return <div id="header">
            <div>
             <img src="https://cdn-icons.flaticon.com/png/512/1804/premium/1804535.png?token=exp=1655471259~hmac=f639ffe65a726a6dfca9980783b86a7a" alt="logo"></img>
             <h2>TV Maze</h2>
            </div>
            <div className="padajuciMeni">
                <input onChange={(event)=>{this.fetchSearch(event.target.value)}}  type="text" placeholder="Search"/>
                {/* <button>Search</button> */}
                <ul className="lista">
                    {this.state.data.map((e,i,arr)=>{return <li onClick={()=>{
                        this.props.xyzFunkcija(e.show)
                        console.log(e)
                        }}>{e.show.name}</li>})}
                </ul>
            </div>
        </div>
    }
}
 
export default Header;