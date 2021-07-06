import axios from 'axios';
import React, {useState , useEffect} from 'react';
import {SocialSection, Social, Icon, Span, Info, Para} from './style.js'
const SocialMedia = () => {
    const [social , setSocial] = useState([]);
    useEffect(()=> {
        axios.get('js/data.json').then(res => setSocial(res.data.social));
    },[])
    const SocialData = social.map(item => {
        return (
            <Social key={item.id} data={item.data}>
            <Icon className={item.icon}></Icon>
            <Para>
                <Span>{item.title}</Span>
                <Info>{item.body}</Info>
            </Para>
        </Social>
        )
    })
    return (
        <SocialSection>
        {SocialData}
    </SocialSection>

    )
}
export default SocialMedia;