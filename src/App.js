import React from 'react';

import {Footer, Blog, Header, Possibility, WhatGPT3, Features } from './containers';
import {CTA, Navbar, Brand} from './components';
 

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
        <Navbar />
        <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

    </div>
  )
}

export default App
