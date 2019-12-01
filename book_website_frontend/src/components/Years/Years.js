import React, { Component } from 'react'
import '../Years/Years.css';

export default class Years extends Component {

    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            data : []
        };
    }

    componentDidMount(){
        fetch(
            'http://localhost:5000/years',
            {
                mode:'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5000'
                }
            }
        )
        .then(res => {res.json()
        .then(data => {
                this.setState({data:data.publish_year, isLoaded:true});
                console.log("state", this.state.data)
            });
        })
    }

    render() {
        const { error, isLoaded, data } = this.state;
        var years = Object.keys(data)
        const books = years.map(year =>
            <div>
                <h1 style={{color: "whitesmoke"}}>{year}</h1>
                {
                    data[year].map(title => 
                        <div>
                            <h2>{title}</h2> 
                        </div>)
                }
                <h3></h3>
            </div>
        )

        /*var arr = [];
        Object.keys(data).forEach(function(publish_year){
            arr.push(data[publish_year]);
            console.log(publish_year)
            console.log(data[publish_year])
        });*/

        return (
            <div className="wrapper" >
                <div className="scroll-wrapper">
                    {
                        books
                    }               
                </div>
            </div>
        );
    }
}
