import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import './App.css';
import Data from './API/CONTENTLISTINGPAGE-PAGE1.json';
const path = "assets/images/"
class App extends Component {
    render() {
        let items = Data.page.content_items.content;
        console.log(Data.page)
        return (
            <div>
                <div className="topbar gradient fixed">
                    <div className="col-md-12">
                        <span className="back"><img src="assets/images/Back.png" alt="back" /> </span>
                        <span className="name">{Data.page.title}</span>
                        {/* <span className="search"><input type="text" className="search-box" placeholder="Search.." /> </span> */}
                        <span className="search pull-right"><img src="assets/images/search.png" alt="search" /></span>
                    </div>
                </div>
               
                <ul className="videos m-t-40">
                    {
                        items.map((item, index) => (

                            <li className="col-md-4 col-xs-4" key={index}>
                            <LazyLoad height={160} offsetVertical={160}>   
                                <img src={path + item.poster_image} alt="poster" />
                            </LazyLoad>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
               
            </div>
        );
    }
}

export default App;
