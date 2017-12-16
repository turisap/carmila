/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';


const HomePage = () => (
<div>
    <section id="bestFood">
        <div className="container-fluid bestFood__container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center bestFood__title">Find the best food in</h1>
                    <h1 className="text-center bestFood__title">Battambang</h1>
                </div>
            </div>
        </div>
    </section>
    <section id="homePagePhotos">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <img className="homePagePhotos_image homePagePhotos_main" src={"./img/pages/fire.jpg"}/>
                </div>
                <div className="col-md-4">
                    <div className="homePagePhotos_cropper">
                        <img className="homePagePhotos_image"  src={"./img/pages/dessert.jpg"}/>
                        <img className="homePagePhotos_image"  src={"./img/pages/pancakes.jpg"}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="homePagePhotos_cropper">
                        <img className="homePagePhotos_image"  src={"./img/pages/pizza_home.jpg"}/>
                        <img className="homePagePhotos_image"  src={"./img/pages/salami.jpg"}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
);

export default HomePage;