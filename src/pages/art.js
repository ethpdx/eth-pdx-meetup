import React from 'react';
import Layout from '../components/Layout';
import SlideShow from '../components/SlideShow';
import Nav from '../components/Nav';

var settings = {
    images: [
      { url: require('../assets/images/bg01.jpg'), position: 'center' },
      { url: require('../assets/images/bg02.jpg'), position: 'center' },
      { url: require('../assets/images/bg03.jpg'), position: 'center' },
    ],
    // Delay.
    delay: 6000,
  };

const ArtGallery= () => (
<>
    <Layout>
    <Nav />
          <h1>EthPDX Community Art Project</h1>
          <p>EthPDX is doing a Community Art Project during the EthPortland 2021 event organized by Dystopia Labs. In this project we invite EthPortland attendees to draw, dream and engage collaboratively on a shared in-person art experience. Whether you identify as an artist or not, you can participate in a variety of ways from answering questions on the future of Ethereum, to coloring within the lines, to drawing a masterpiece.</p>

          <p>All the artwork made as part of the Community Art Project will be made into NFTs and sold to support EthPDX.
          </p>        
      <SlideShow settings={settings} />
    </Layout>
</>
);

export default ArtGallery;
