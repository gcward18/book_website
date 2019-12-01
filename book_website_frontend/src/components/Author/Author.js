import React, { Component } from 'react'
import book_pic from '../../imgs/book.png'
import '../Author/Author.css'

export default class Author extends Component{

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
            'http://localhost:5000/book_editions?author=Dickens%20Charles',
            {
                mode:'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5000'
                }
            }
        )
        .then(res=>{res.json()
        .then(data=>{
                this.setState({data:data, isLoaded:true});
                console.log("state",this.state.data)
            });
        })

    }

    render(){
        const { error, isloaded, data} = this.state;
        var book_ids = [];
        var author_name = "Charles Dickens";
        for (var i in data) {
            var image;
            if(data[i]["image_path"]=="null")
            {
                image = book_pic;
            }
            else
            {
                image = data[i]["image_path"];
            }
            book_ids.push(
                <div>
                    <div className="card">
                        <div className="container">
                            <img src={image} alt = "bookpic" className="container"/>
                            <h4><b>{data[i]["title"]}</b></h4> 
                            <p>Edition: {data[i]["edition"]}</p>
                            <p>Year: {data[i]["year"]}</p> 
                        </div>
                    </div>
                    <br/>
                </div>
            )
        }
        
        
        return (
            <div className = "wrapper">
                <div className = "scroll-wrapper">
                    <h1>{author_name}</h1>
                    {book_ids}
                </div>
            </div>    
        );
    }
}