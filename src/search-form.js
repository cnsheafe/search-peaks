import React from 'react'

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(event) {
        console.log(event.target.value)
        this.props.onUpdate(event.target.value)
    }

    render() {
        return (
            <div>
                <label htmlFor="search">Search</label>
                <input type="search" id="search" onKeyUp={this.handleKeyPress}/>
            </div>
        )
    }
}
