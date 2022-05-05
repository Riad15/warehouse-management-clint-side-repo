import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Store from '../Store';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Store></Store>
            <Footer></Footer>
        </div>
    );
};

export default Home;