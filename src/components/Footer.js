import React from "react";
import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <footer>
        <p>Copyright &copy; {year} by Raviranjan Mahto😍</p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
