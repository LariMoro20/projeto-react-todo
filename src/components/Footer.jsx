import React from "react";
const Footer = () => {
  return (
    <footer className="section_footer">
      Desenvolvido no <br /><a style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ErjWNvP6mko">"Curso de React Para Completos Iniciantes" - DicasParaDevs </a>
      <a target="_blank" rel="noreferrer"
        href="https://github.com/LariMoro20/projeto-react-todo"
        style={{ textDecoration: "none", color: "white" }}
      ><br></br>
        Larissa Santos
        <img
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt=""
          width="15px"
          style={{ marginLeft: "10px" }}
        />
      </a>
    </footer >
  );
};

export default Footer;
