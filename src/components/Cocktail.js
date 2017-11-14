import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;



export default class Cocktail extends React.Component {

    render() {
        return (
            <div>
                <Title>Hello World, this is my first styled component!</Title>
                <div className="item-image">
                    <img src={this.props.item.img} alt="cocktail"/>
                </div>

                <div className="item-content">
                    <h2>{this.props.item.title}</h2>
                    <p><small className="glyphicon glyphicon-user"></small> By <span className="author">{this.props.item.author}</span></p>
                    <p>{this.props.item.description}</p>
                    <div className="item-footer">
                        <p><strong>Tags: </strong>{this.props.item.tags.map((tag, i) => {return <span className="tag" key={i}> {tag} </span>})}</p>
                    </div>
                    <button className="btn btn-primary">Read more</button>
                </div>
            </div>
        )
    }
}