import React from 'react';

const PostItem = ({post}) => {
    const {image, link, date, id, userName} = post;

    return (
        <div class="shadow my-5 pt-4 w3-margin w3-white">
                <img src={image} alt="Nature" style={{width:"100%"}}/>
            <div class="w3-container my-3">
                <h4><b>Sketch of </b><a href={id} target="_blank" class="w3-tag w3-medium my-auto" >{userName}</a></h4>
                <h5><span class="w3-opacity">{date}</span></h5>
            </div>

            <div class="w3-container">
                <div class="w3-row">
                    <div class="w3-col m8 s12">
                        <p><a href={link} style={{background:"#f44336", color:'white'}} class="w3-button  w3-padding-large w3-border "><b>VIEW POST »</b></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;