import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {ProfileSection, ProfileAll, ProfileList, ProfileItem, Title, SpanTitle, Span, SpanWeb, Skills, SkillsDesc, Bar, BatTitle, BarPerc, Parent, ParentSpan} from './style.js'
const Profile = () => {
    const [title , setTitle] = useState([]);
    useEffect(()=> {
        axios.get('js/data.json').then(res => setTitle(res.data.profile))
    },[])
    const ProfileData = title.map(item => {
        return (
            <Bar key={item.id}>
                        <BatTitle>{item.title}</BatTitle>
                        <BarPerc>{item.val}</BarPerc>
                        <Parent>
                            <ParentSpan width={item.val}></ParentSpan>
                        </Parent>
                    </Bar>
        )
    })
    return (
        <ProfileSection>
            <div className="container">
                <ProfileAll>
                    <Title><SpanTitle>My </SpanTitle>Profile</Title>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileAll>
                
                <Skills>
                    <Title>Some <SpanTitle>skills</SpanTitle></Title>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {ProfileData}
                </Skills>
                </div>
            </ProfileSection>
    )
}
export default Profile;