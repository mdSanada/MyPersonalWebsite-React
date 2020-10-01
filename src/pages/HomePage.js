import React from 'react';
import HomeHeader from '../components/HomeHeader'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

function HomePage(props) {
    return (
        <div>
        <HomeHeader />
        {/* <Hero title={props.title} text={props.text} subTitle={props.subTitle} /> */}
        <Carousel />
        </div>
    );
}

export default HomePage;