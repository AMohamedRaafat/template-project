import React , {useEffect,useState}from 'react';
import axios from 'axios';
import { Image, Span,BigBox, Box, Overlay, OverlaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle } from './style.js';
const Portfolio = () => {
    const [images , setImages] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => setImages(res.data.portfolio))
    },[])
    const PortfolioData = images.map((imageitem) => {
        return (
        
                <Box key={imageitem.id}>
                    <Image src={imageitem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Box>
        )
    })
    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <BigBox>
                {PortfolioData}
            </BigBox>
            
        </PortfolioSection>
    )
}
export default Portfolio;