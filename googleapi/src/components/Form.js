import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import Paleo from './Paleo.js';
import Menu from './Menu.js';
import Vegetarian from './Vegetarian.js';

class Form extends Component {

    state = {
        value: '',
        zip: '',
        menu: '',
        isLoaded: false
    }

    onSubmit = (event) => {
        const formData = new FormData(this.refs.form)
        // console.log('formData', formData)
        const location = formData.get('location')
        // console.log('location', location)


        event.preventDefault();
        if (this.state.value == 'Paleo' && this.state.zip == 'CO') {
            this.setState({
                menu: 'Paleo',
                isLoaded: true
            })
        }

        else if (this.state.value == 'Vegetarian' && this.state.zip == 'CO') {
            this.setState({
                menu: 'Vegetarian',
                isLoaded: true
            })
        }
        else {
            this.setState({
                menu: 'Other',
                isLoaded: true
            })
        }

    }



    handleChange = (event) => {
        // console.log('eventarg', event.target.value)
        this.setState({ value: event.target.value },
            function () {
                console.log('callbackbalue', this.state.value)
            });
    }


    onSuggest = (value) => {
        // console.log('gmaps', value.gmaps.address_components[5].short_name)
        this.setState({ zip: value.gmaps.address_components[5].short_name })

    }

    render() {
        const isLoaded = this.state.isLoaded
        return (
            <div className="selection">
                <form onSubmit={this.onSubmit} ref="form">
                    <Geosuggest onChange={(value) => console.log('change', value)}
                        onBlur={(value) => console.log('blur', value)}
                        onSuggestSelect={this.onSuggest}
                        name="location" />
                    <select required value={this.state.value} onChange={this.handleChange}>
                        <option value="">None</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Paleo">Paleo</option>
                    </select>
                    <input id="submit" type="submit" value="Submit" />
                </form>
                {isLoaded && <Menu menu={this.state.menu} />}
            </div>


        )
    }
}

export default Form;
