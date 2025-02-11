import React from 'react';
import typeColors from '../../helpers/typeColors';
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card-img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card-name">
                {pokemon.name}
            </div>
            <div className="Card-types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card-type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card-info">
                <div className="Card-data Card-data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card-data Card-data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card-data Card-data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
