import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';


export default function AnimalList({ animals }) {
    return (
        <div>{animals.map ((animal) => <AnimalCard key={animal.name} animal={animal} />)} </div>
    );
}