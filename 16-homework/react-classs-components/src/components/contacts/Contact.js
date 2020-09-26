import React from 'react';


const Contact = (props) =>{
    return (
        <div className="contact-container">
            <div className='contact-info'>
                <div className='contact-first-name'>{props.firstName}</div>
                <div className='contact-last-name'>{props.lastName}</div>
            </div>
            <div className='contact-phone'>{props.phone}</div>
        </div>
    );
}

export default Contact;