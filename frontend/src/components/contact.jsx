import React from 'react';

const Contact = () => {
    const user = "2503prakhar";
    const domain = "gmail.com";
    const email = `${user}@${domain}`;

    // Protecting phone number
    const countryCode = "+91";
    const part1 = "6392";
    const part2 = "727";
    const part3 = "887";
    const phone = `${countryCode}${part1}${part2}${part3}`; // No spaces to avoid issues in href

    return (
        <section id="contact" className="section">
            <h2>get in touch</h2>
            <a href={`mailto:${email}`} className="contact-link">
                Email me
            </a>
            <br />
            <a href={`sms:${phone}`} className='contact-link'>
                message me
            </a>
        </section>
    );
};

export default Contact;
