import React from 'react'
import FooterLogo from "../../assets/logo.png"
import Banner from "../../assets/Website/orange-pattern.jpg";

export default function Footer() {
    const BannerImg = {
        backgroundImage: `url(${Banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      };

      const Footerlinks = [
        {
            title: "Home",
            link: "/#",
        },
        {
            title: "About",
            link: "/#about",
        },
        { 
            title: "Contact",
            link: "/#contact",
        },
        { 
            title: "Blog",
            link: "/#blog",
        }
      ]
  return (
    <div>
      <div>

      </div>
    </div>
  )
}
