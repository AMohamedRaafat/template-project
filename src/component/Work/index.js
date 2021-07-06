import React, { Component } from 'react';
import axios from 'axios';
import {PartDesc, Icon, Line, PartTitle, Span, WorkPart, WorkSection, WorkTitle } from './style.js';
class Work extends Component{
    state = {
        works : []
    }
    componentDidMount (){
        axios.get('js/data.json').then(res => {
            this.setState({works : res.data.works})
            console.log(this.state.works)
        })
        .then(err => {
            console.log(err)
        });
    }
render(){   
    const {works}   = this.state; 
    const WorksList = works.map((item) => {
        return (
            <WorkPart first={item.id} key={item.id}>
            <Icon className={item.icon_name}></Icon>
            <PartTitle>{item.title}</PartTitle>
            <Line/>
            <PartDesc>
                {item.body}
            </PartDesc>
        </WorkPart>

        )
    })
        return (
            <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {WorksList}
            </div>
        </WorkSection>
        )
    }
}
export default Work;