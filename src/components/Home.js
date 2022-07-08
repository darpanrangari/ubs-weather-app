import React from 'react';
import HomeLogo from '../assets/weather.png'
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <section>
                <img src={HomeLogo} alt="home logo"/>
            </section>
            <section id="home-content">
                <h1>Welcome to MY FORECAST page !</h1>
                <p>You can easily check the weather forecast for any location in the world. <br/> Just search for it or select location from the favorite list</p>
            </section>
        </div>
    );
};

export default Home;