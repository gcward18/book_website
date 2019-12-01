import React, { Component } from 'react'
import book_pic from '../../imgs/book.png'
import {Form, Button} from 'react-bootstrap'
import '../Author/Author.css'

export default class Author extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
            author: 'Dickens Charles'
        };
    }

    componentDidMount(){
        this.getData('Dickens Charles');
    }

    getData = author => {
        this.setState({author})
        fetch(
            `http://localhost:5000/book_editions?author=${author}`,
            {
                mode:'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5000'
                }
            }
        )
        .then(res=>{res.json()
        .then(data=>{
                console.log(this.state.data)
                console.log(data)
                this.setState({data:data, isLoaded:true});
                console.log("state",this.state.data)
            });
        })

    }

    queryDB = () => {
        const author = document.getElementById('author-input').value
        
        this.getData(author);
    }

    render(){
        const { error, isloaded, data} = this.state;
        var book_ids = [];
        var author_name = this.state.author;
        console.log(data)
        for (var i in data) {
            var image;
            if(data[i]["image_path"]==="null")
            {
                image = book_pic;
            }
            else
            {
                image = data[i]["image_path"];
            }
            book_ids.push(
                <div key={data[i]["title"]}>
                    <div className="card">
                        <div className="container">
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
                <Form className="search-author"> 
                    <Form.Group>
                        <Form.Label 
                            style={{fontSize:'25px', fontWeight:'bold'}}
                        >Author Search</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder='Author Name' 
                            style={{width:'250px'}} 
                            id='author-input'
                        />
                        <Form.Text>Enter the author you wish to search for<br/>last name first</Form.Text>
                    
                    </Form.Group>
                    <Form.Group className="author-search-button">
                        <Button variant="primary" type="submit" onClick={() => this.queryDB()}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>

                <div className="box" >
                    <h1>{author_name}</h1>
                    <img src={image} alt = "bookpic" className="container" style={{height:'350px', width:'400px', marginBottom: '20px'}}/>

                    <div className = "scroll-wrapper2">
                        {book_ids}
                    </div>
                </div>
            </div>    
        );
    }
}