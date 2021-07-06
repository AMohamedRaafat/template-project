import styled from 'styled-components';
export const ContactSection = styled.div`
    padding: 50px 0;    
    text-align: center

    `
export const DropTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px

    `
export const Span = styled.span`
    font-weight: normal

    `
export const Form = styled.form`
    width: 70%;
    margin: auto;

    `
export const Input = styled.input`
    box-sizing: border-box;
    outline: none;
    border:1px solid #ccc;
    padding: 8px;
    margin-bottom: 10px

    `
export const FormInput = styled.div`
    overflow: hidden

    `
export const InputText = styled(Input)`
    float:left;
    width:49%;
    `
export const InputEmail = styled(Input)`
    float:right;
    width:49%;
    `
export const Text = styled.textarea`
    width: 100%;
    outline: none;
    padding:5px;    
    background: #ccc
    
    `
export const InputSup = styled(Input)`
    width:100%
    `

export const Submit = styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
    
    `