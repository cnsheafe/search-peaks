import React from 'react'
import CharacterList from './character-list'
import SearchForm from './search-form'

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.characters
        }
        this.filterSearch = this.filterSearch.bind(this)
    }
    
    filterSearch(query) {
        let eligibleResults = []
        this.props.characters.forEach(character => {
            if (character.name.toLowerCase().includes(query)) {
                eligibleResults.push(character)
            }
        })

        this.setState({results: eligibleResults})
    }

    render() {
        return (
            <div>
                <SearchForm onUpdate={this.filterSearch}/>
                <CharacterList characters={this.state.results}/>
            </div>
        )
    }
}
