import React, { Component } from 'react';
import logo from '../../imgs/book_logo.png';
import book_image from '../../imgs/book.png';
import MainHeader from '../Headers/MainHeader';
import book_back from '../../imgs/bw_image.png';
import { Image, Carousel, CarouselItem } from 'react-bootstrap';
import './App.css';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + book_back + ")",
    backgroundSize: 'cover'
}

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            data: []
        }

        this.wiki = this.wiki.bind(this);
    }

    wiki(element){
        window.open('https://en.wikipedia.org/wiki/'+ element.target.getAttribute("value").split(" ").slice(0,2).reverse().join("_"));
    }
    componentDidMount(){
        fetch(
            'http://localhost:5000/book_editions', 
            {
                mode:'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5000'
                }
            }
        )
        .then(res => {
            res.json().then(data => {
                this.setState({data:data});
            });
        })
        
    }

    render(){

        var elements = [];
        var key;

        if (this.state.data.length !== 0)
        {
            for(key = 0; key < this.state.data.length; key++){
                elements.push(
                    <CarouselItem key={key} >
                        {console.log(this.state.data[key].image_path)}
                        {console.log('hell0')}
                        <Image 
                            className="d-block w-100"
                            src={(this.state.data[key].image_path != null && this.state.data[key].image_path != 'null')? this.state.data[key].image_path : book_image}
                            style={{
                                alignSelf: 'stretch',
                                width: '15%',
                                height: '15%',
                                borderRadius:'20%'
                              }} 
                            alt={book_image}
                            fluid
                            roundedCircle
                        />
                        <Carousel.Caption>
                            <h3>{this.state.data[key].title}</h3>
                            <div>
                                <p 
                                    onClick={
                                        e => this.wiki(e)
                                    } 
                                    value={
                                        this.state.data[key].author
                                    }
                                >
                                    {this.state.data[key].author}
                                </p><br/> 
                                
                                {console.log(this.state.data[key].year)}     <br/>
                            </div>
                        </Carousel.Caption>
                    </CarouselItem>

                )
            }
        }
        return (
            <div className="App" style={ sectionStyle }>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <MainHeader></MainHeader>
                </header>

                {/* <Carousel className="slick-dots">
                    {elements}
                </Carousel> */}
            </div>
        );
    }
}

export default App;