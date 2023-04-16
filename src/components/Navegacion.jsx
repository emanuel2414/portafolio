import React from "react";
import { Link } from 'react-router-dom';

const Inicio = () => {

  return (
    <nav id="navbar-example2" className="navbar navbar-expand-lg fixed-top bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <a href="#" className="navbar-brand">
          PORTAFOLIO
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="nav nav-pills me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#SobreMi">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Habilidades">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ExperienciaLaboral">Experiencia laboral</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Intereses">Intereses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Educacion">Educación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contactame">Contáctame</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Inicio;
