import React from 'react';
import {ContactSection, DropTitle, Span, Form, FormInput, Text, Submit, InputText, InputEmail, InputSup} from './style.js';
const Contact = () => {
    return (
        <ContactSection>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputSup type="text" className="sub" placeholder="Your Subject" />
                    <Text cols="30" rows="10" placeholder="Your Message"></Text>
                    <Submit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection> 
    )
}
export default Contact; 