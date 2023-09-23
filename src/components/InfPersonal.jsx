import React from 'react';
import "../components/InfPersonal.css"; // Importa el archivo CSS
import profileImage from '../assets/img/pp.jpg'; // Importa la imagen


function renderImagen() {
  // Esta función retorna la imagen con tus datos
  return (
    <img src={profileImage} alt="Mi Foto" className='profile-image' />
  );
}

function InformacionPersonal() {
  return (
    <section className="info-section">
      <h2 className="section-title">DATOS PERSONALES</h2>
      <table className="info-table">
        <tbody>
          <tr>
            <td className="label"><b>NOMBRES Y APELLIDOS :</b></td>
            <td className="info">Juan Sebastian Usuga Velez</td>
          </tr>
          <tr>
            <td className="label"><b>LUGAR Y FECHA DE NACIMIENTO :</b></td>
            <td className="info">Antioquia - Medell&iacute;n 10/02/2005</td>
          </tr>
          <tr>
            <td className="label"><b>CEDULA DE CIUDADANIA : </b></td>
            <td className="info">1.020.106.463</td>
          </tr>
          <tr>
            <td className="label"><b>SEXO : </b></td>
            <td className="info">Masculino</td>
          </tr>
          <tr>
            <td className="label"><b>ESTADO CIVIL :</b></td>
            <td className="info">Soltero</td>
          </tr>
          <tr>
            <td className="label"><b>DIRECCIÓN : </b></td>
            <td className="info">Santa Barbara - Antioquia</td>
          </tr>
          <tr>
            <td className="label"><b>TELÉFONO : </b></td>
            <td className="info">3147398347</td>
          </tr>
          <tr>
            <td className="label"><b>E-MAIL : </b></td>
            <td className="info">juanusugas18@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function PerfilProfesional() {
  return (
    <section className="info-section">
      <h2 className="section-title">PERFIL PROFESIONAL</h2>
      <p className="info-text">
        Soy una persona responsable, puntual, creativa y con una buena disposición para cualquier tarea que se me asigne. Tengo 1 año de experiencia en el campo de desarrollo web Front-End, y me encuentro realizando el estudio para ser Desarrollador Web FullStack.

        Mi enfoque principalmente es trabajar en proyectos innovadores, orientados a la parte de diseño o estilos visuales.
      </p>
    </section>
  );
}

function FormacionAcademica() {
  return (
    <section className="info-section">
      <h2 className="section-title">FORMACIÓN ACADEMICA</h2>
      <ul className="info-list">
        <li>
          <span className="institution">INSTITUCION EDUCATIVA VERSALLES | <b className="degree">BACHILLERATO ACADÉMICO</b></span>
        </li>
      </ul>
    </section>
  );
}

export default function MainContent() {
  return (
    <div className="main-content">
      {renderImagen()}
      <InformacionPersonal />
      <PerfilProfesional />
      <FormacionAcademica />
      {/* Agrega más secciones según sea necesario */}
    </div>
  );
}
