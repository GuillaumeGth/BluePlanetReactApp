import React from 'react';
import styled from 'styled-components';
import Text from 'react-text';
import './card.css';



const BiraCard = (props) =>{
  const Img = styled.img`
  height: 100%;`;
  return (
    <div class="blog-container pinsi">
      <div class="blog-header">
        <div class="blog-cover">
        </div>
      </div>

      <div class="blog-body">
        <div class="blog-title">
          <div class="yellow x-large section-title horizontal-divider">
            Pinisi or The art of Boatbuilding in South Sulawesi
          </div>
        </div>
        <div class="blog-summary">
          <p>
            Pinisi or The Art of Boatbuilding in South Sulawesi is the heart of the local economy and culture in the region. Here in Bira you can visit the worksites - you can even go onboard! - where you can see various boats in different stages of development. Each masterpiece is entirely built by hand with exquisite attention to detail. The trade was even inscribed in 2017 on the Representative List of the Intangible Cultural Heritage of Humanity (UNESCO). An overview video of the process and trade can be found
            <a href="http://www.unesco.org/archives/multimedia/?pg=33&amp;s=films_details&amp;id=4661" class="link" target="blank">here</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BiraCard;