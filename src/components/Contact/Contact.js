import emailjs from 'emailjs-com';
import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_yvhr4oa', e.target, 'user_j0QZ1oSurflurR7Rikj2d')
        .then((result) => {
            alert("message sent successfully");
        }, (error) => {
            alert("please try again");
        }); 
        e.target.reset()
    }

    return (
        <div class="w3-white my-4 w3-margin py-4">
            <div class="w3-container w3-padding w3-black">
                <h4>Contact</h4>
            </div>
            <div class="w3-container pt-4 w3-white">
                <form onSubmit={handleSubmit}>
                    <input class="w3-input w3-border" name="name" type="text" placeholder="Your Name" style={{width:'100%'}} required/>
                    <br />
                    <input class="w3-input w3-border" name="email" type="email" placeholder="Your Email" style={{width:'100%'}} required/>
                    <br />
                    <textarea class="w3-input w3-border" name="message" type="text" placeholder="Your Message" style={{width:'100%'}} required/>
                    <br />
                    <button type="submit" class="w3-button w3-block w3-red" value="Send">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;