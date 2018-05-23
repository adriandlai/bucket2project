import React, { Component } from 'react';
import '../App.css';

class Vegetarian extends Component {


    componentDidMount() {
        const apiUrl = "./vegetarian.json"
        this.props.fetchJobs(apiUrl)
    }

    render() {
        const isLoaded = this.props.isLoaded


        return (
            <div className="menu">
                <h1 className="menu_title">Vegetarian Menu</h1>
                {isLoaded
                    ? (<div className="menu_items">
                        {this.props.items.map((item, index) => {
                            return (
                                <div id={index}>
                                    <img src={item.picture} alt="food" id={index} />
                                </div>
                            )
                        })}
                    </div>
                    )
                    : <h2>Loading</h2>}
            </div>

        )
    }

}

export default Vegetarian;
