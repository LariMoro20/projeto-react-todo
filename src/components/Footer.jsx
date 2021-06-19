import React from "react";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="section_footer">
      <a
        href="https://github.com/LariMoro20/projeto-react-todo"
        style={{ textDecoration: "none", color: "white" }}
      >
        {year} &copy; Larissa Santos
        <img
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt=""
          width="15px"
          style={{ marginLeft: "10px" }}
        />
      </a>
    </footer>
  );
};

export default Footer;
