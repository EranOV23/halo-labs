import React from 'react';
import { storiesOf } from '@storybook/react';
import Cocktail from '../Cocktail';

const Item = {
    img: "https://media.monin.com/us/media/catalog/product/_/C/_Classic_Mint_Mojito-1507563995-1.png",
    title: "Classic Mojito Mint",
    author: "Eran Ovadia",
    description: "This is a Classic Mojito Mint with Rum and Mint",
    tags: ["Rum", "Mint"],
};


storiesOf('Cocktail', module)
    .addDecorator(story => (
        <div style={{textAlign: 'center', background: 'salmon'}}>
            {story()}
        </div>
    ))
    .add('not recommended', () => <Cocktail item={Item}/>)
    .add('recommended', () => <Cocktail item={Item} recommended={true}/>);