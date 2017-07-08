import React from 'react'

export default class CharacterList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const characters = this.props.characters.map((character, index) => {
            return(
                <li key={index}>
                    <strong>{character.name}</strong> ({character.actor}) - {character.description}
                </li>
            )
        })
        return (
            <ul aria-live="polite">
                {characters}
            </ul>
        )
    }
}
