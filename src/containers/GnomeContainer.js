import React, { Component } from 'react'

const API_URL = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

class GnomeContainer extends Component{
    state = {
        gnomes: [],
        search: ""
    }

    componentDidMount(){
        fetch(API_URL)
        .then(response => response.json())
        .then(gnomesData => {
            console.log(gnomesData);
            this.setState({gnomes:gnomesData.Brastlewark})
        })
        .catch(err => console.log(err))
    }

    searchSpace = (event) =>{
        this.setState({search: event.target.value})
    }    

    render(){
        const filteredGnomes = this.state.gnomes.filter((data) =>{
            if (this.state.search === null){
                return data
            }else if (data.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
        }).map(data =>{
            return(
                <div>
                    <ul>
                        <li>
                            {data.name}
                        </li>
                    </ul>
                </div>
            )
        })

        return(
            <div>
                <h1>Gnomes</h1>
                <input type="text" placeholder="Search Gnomes..." onChange={(e) => this.searchSpace(e)} />
                {filteredGnomes}
            </div>
        )    
    }
}

export default GnomeContainer;