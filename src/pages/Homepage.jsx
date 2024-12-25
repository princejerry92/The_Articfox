import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import FeaturesMenu from "../components/FeaturesMenu";
import AnimatedTitle from "../components/AnimatedTitle";
import "./Homepage.css";
import mainImage1 from "../assets/images/sharp.jpg";
import mainImage2 from "../assets/images/rejoice5.0.jpg";
import mainImage3 from "../assets/images/468028777_545360371689243_828896906648236626_n.jpg";
import featureImage1 from "../assets/images/467618065_548088521331706_6745625661992907848_n.jpg";
import featureImage2 from "../assets/images/467913749_3069132673286194_2090158195130621059_n.jpg";
import featureImage3 from "../assets/images/469477609_1127852206009840_6663059278332496069_n.jpg";

const Homepage = () => {
  const mainImages = [mainImage1, mainImage2, mainImage3];
  const featureItems = [
    { image: featureImage1, title: "Features" },
    { image: featureImage2, title: "About Me" },
    { image: featureImage3, title: "Projects" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="homepage-layout">
      <div className="content-container">
        <div className="side-navbar-container">
          <SideNavbar
            images={mainImages}
            currentIndex={currentImage}
            onChange={handleImageChange}
          />
        </div>

        <div className="main-content">
          <img
            src={mainImages[currentImage]}
            alt={`Main ${currentImage + 1}`}
            className="main-image"
          />
          <AnimatedTitle />
        </div>
      </div>

      <div className="features-menu-container">
        <FeaturesMenu items={featureItems} />
      </div>
    </div>
  );
};

export default Homepage;