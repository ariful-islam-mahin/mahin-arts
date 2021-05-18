import React from 'react';

const PostItem = ({post}) => {
    const {image1, image2, image3, link, date} = post;

    return (
        <div class="w3-container w3-white w3-margin w3-padding-large">
            <div class="w3-center">
            <h3>TITLE HEADING</h3>
            <h5>Title description, <span class="w3-opacity">{date}</span></h5>
            </div>

            <div class="w3-justify">
            {/* <img src={image} alt="Girl Hat" style={{width:"100%"}} class="w3-padding-16"/> */}

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={image1} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={image2} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={image3} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <p><strong>More Hats!</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur aliquam blanditiis modi commodi praesentium dolorem aut hic quibusdam dolorum.</p>
            <p class="w3-left"><a href={link} target="_blank" class="w3-button w3-black" ><b>View Post</b></a></p>
            </div>
        </div>
    );
};

export default PostItem;