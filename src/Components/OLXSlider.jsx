import React from 'react';

import "../Styling/App.css";

class Slider extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", border: "1px solid orange" }} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id="img1" src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp" alt="First slide" />


                        <p style={{ textAlign: "center" }}>Help make OLX safer place to buy and sell</p>

                    </div>
                    <div className="carousel-item">
                        <img id="img2" src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp" alt="Second slide" />


                        <p style={{ textAlign: "center" }}>Contact and close deals faster</p>

                    </div>
                    <div className="carousel-item">
                        <img id="img3" src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp" alt="Third slide" />

                        <p style={{ textAlign: "center" }}>Save all your favourite items in one place</p>

                    </div>
                </div>
                <a style={{ marginTop: "100px" }} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a style={{ marginTop: "100px" }} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
export default Slider;