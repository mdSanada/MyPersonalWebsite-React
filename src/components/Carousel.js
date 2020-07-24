import React from 'react';
import defaultImage from '../assets/defaultImage.png';
import Card from '../components/Card'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'GitHub',
                    subTitle: 'My projects on Github',
                    imgSrc: defaultImage,
                    link: 'https://www.google.com',
                    selected: 'false'
                },
                {
                    id:1,
                    title: 'Google',
                    subTitle: 'My projects on Github',
                    imgSrc: defaultImage,
                    link: 'https://www.google.com',
                    selected: 'false'
                },
                {
                    id:2,
                    title: 'Sanada',
                    subTitle: 'My projects on Github',
                    imgSrc: defaultImage,
                    link: 'https://www.google.com',
                    selected: 'false'
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    
    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;