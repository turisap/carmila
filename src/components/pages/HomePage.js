/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';


const HomePage = () => (
<div>
    <section id="bestFood">
        <h1 className="text-center bestFood__title">Find the best food in</h1>
        <h1 className="text-center bestFood__title">Battambang</h1>
    </section>
    <section id="intro">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <p className="text-center intro__text">
                        We are a group of small take-away European restaurants in the
                        Battambang province and offer you a nice opportunity to try various items from Italian, Portuguese
                        German cuisine. We have five take-away points in the city and another one in the Veren village. We work 24/7
                        to ensure you always can enjoy delicious food.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section id="homePagePhotos">
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 homePagePhotos__column">
                    <img className="homePagePhotos__image " src={"./img/pages/fire.jpg"}/>
                </div>
                <div className="col-4 homePagePhotos__column">
                    <div className="homePagePhotos__cropper">
                        <img className="homePagePhotos__image"  src={"./img/pages/dessert.jpg"}/>
                        <img className="homePagePhotos__image"  src={"./img/pages/pancakes.jpg"}/>
                    </div>
                </div>
                <div className="col-4 homePagePhotos__column">
                    <div className="homePagePhotos__cropper">
                        <img className="homePagePhotos__image"  src={"./img/pages/pizza_home.jpg"}/>
                        <img className="homePagePhotos__image"  src={"./img/pages/salami.jpg"}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
);

export default HomePage;