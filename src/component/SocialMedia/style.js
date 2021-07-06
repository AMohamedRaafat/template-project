import styled from 'styled-components';
export const SocialSection = styled.div`
    clear:both;
    height: auto;
    overflow: hidden
`

export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background : ${props => { 
        if (props.data === "face" ){
            return "#3b5998"
        }else if (props.data === "twitter"){
            return "#498cbf"
        }else { 
            return "#cc2127"
        }
    }};
`

export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`

export const Para = styled.p`
    font-weight: bold;
    margin-top:-1px;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`

export const Span = styled.span`
    display: inline;
    margin-bottom: 8px;
`

export const Info = styled.span`
    display: block;
    margin-bottom: 8px;
    font-weight: normal
`