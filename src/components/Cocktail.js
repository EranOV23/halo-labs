import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
    padding: 4em;
    background: ${props => props.selected ? 'salmon' : 'gold'};
    color: white;
    font-size: 20px;
`;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Img = styled.img`
    max-width: 200px;
    max-height: 200px;
`;

const Button = styled.button`
background: ${props => props.recommended ? 'palevioletred' : 'white'};
color: ${props => props.recommended ? 'white' : 'palevioletred'};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

export default class Cocktail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false,
        }
    }

    render() {
        console.log(this.props)        
        return (
            <Wrapper selected={this.state.selected} onClick={()=>this.setState({selected: !this.state.selected})}>
                <Img src={this.props.item.img} alt="cocktail"></Img> 
                <Title>{this.props.item.title}</Title>
                <p><strong>By</strong> {this.props.item.author}</p>
                <p>{this.props.item.description}</p>
                <p><strong>Tags: </strong>{this.props.item.tags.map((tag, i) => {return <span className="tag" key={i}> {tag} </span>})}</p>
                <Button recommended={this.props.recommended}>Read more</Button>
            </Wrapper>
        )
    }
}