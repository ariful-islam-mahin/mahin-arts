import React from 'react';

const Contact = () => {
    return (
        <div class="w3-white w3-margin py-4">
            <div class="w3-container w3-padding w3-black">
                <h4>Contact</h4>
            </div>
            <div class="w3-container w3-white">
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis?</p>
                <p><input class="w3-input w3-border" type="text" placeholder="Your Name" style={{width:'100%'}} /></p>
                <p><input class="w3-input w3-border" type="email" placeholder="Your Email" style={{width:'100%'}} /></p>
                <p><textarea class="w3-input w3-border" type="text" placeholder="Your Message" style={{width:'100%'}} /></p>
                <p><button type="button" class="w3-button w3-block w3-red">Send</button></p>
            </div>
        </div>
    );
};

export default Contact;