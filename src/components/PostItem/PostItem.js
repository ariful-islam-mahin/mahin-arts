import React from 'react';

const PostItem = ({post}) => {
    const {image, link} = post;

    return (
        <div class="w3-container w3-white w3-margin w3-padding-large">
            <div class="w3-center">
            <h3>TITLE HEADING</h3>
            <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
            </div>

            <div class="w3-justify">
            <img src={image} alt="Girl Hat" style={{width:"100%"}} class="w3-padding-16"/>
            <p><strong>More Hats!</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur aliquam blanditiis modi commodi praesentium dolorem aut hic quibusdam dolorum.</p>
            <p class="w3-left"><a href={link} target="_blank" class="w3-button w3-black" ><b>View Post</b></a></p>
            </div>
        </div>
    );
};

export default PostItem;