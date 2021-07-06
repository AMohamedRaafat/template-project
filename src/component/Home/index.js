import React from 'react';

import {HomeSection,HomeTitle,HomeInformation,HomeDesc,HomeButton,HomeInfo} from './style.js';
const Home = () => {
    return (
        <HomeSection>
                <HomeInformation>
                    <HomeTitle>Mohamed Raafat</HomeTitle>
                    <HomeInfo>Front End Developer</HomeInfo>
                    <HomeDesc>
                        Iam a professional and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeButton>Let's Begin</HomeButton>
                </HomeInformation>
        </HomeSection>
    )
}
export default Home;