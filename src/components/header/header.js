import PropTypes from "prop-types";
import React from "react";
import './header.css';

const Header = ({ siteTitle, description }) => {
  // console.log(siteTitle)
  return (
    <header className="header" align="center">
      <img className="avatar" src={require('../../images/profile.jpg')} alt="avatar"/>
      <div className="textHeader">
        <h1>{siteTitle}</h1>
        <h3>Full Stack Javascript Developer</h3>
        <p>I love to learn about programming since I was young, Hacktiv8 helps me to learn more about programming. When I learned React Native, I'm very interested and excited to learn about that. <br />
With a vocational high school background, I confidence to work with other people who had experience or college graduates . Many great people at Hacktiv8 who always helped me to prepare my skills to be ready to work in a Tech Company<br />
In Hacktiv8, I was given lessons like State Management (Redux and VueX), Vue.Js, React.Js, and the Native React for the Front-End lessons. For the Back-End side, such as Express.Js, Redis, MongoDB and PosgreSQL for the database</p>
      </div>
      <div className="logoCompany">
        <a href="https://github.com/minzarddillah" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/m-minzard-dillah-9a0231172/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://registry.jsonresume.org/minzarddillah" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
