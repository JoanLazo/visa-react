import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <main>
    <section className="container d-flex justify-content-center">
      <div className="row ">
        <div className="col-12 color-black">
          <div className="d-flex baner-home flex-column">
            <div className="d-flex justify-content-end align-items-end mt-3">
              <p className="text-top mr-2">INICIAR SESIÓN</p>
              <p className="text-top ml-3 mr-4">REGISTRATE</p>
            </div>
            <div className="mt-2 ml-5">
              <p className="text-baner">MUJER</p>
              <p className="text-baner">EMPRENDEDORA</p>
            </div>
            <div className="my-5 ml-5">
              <p className="text-medio">TE AYUDAMOS A HACER TUS</p>
              <p className="text-medio"><span className="color-pink mr-2">SUEÑOS</span>POSIBLES</p>
            </div>
            <button className="my-5 btn-baner color-pink text-center ml-5">CONOCE NUESTROS SERVICIOS</button>
          </div>
        </div>
      </div>
    </section>
    <section className="container my-5">
      <div className="row ">
        <div className="color-black">
          <div className="d-flex flex-column">
            <div className="d-flex mt-5 justify-content-center align-items-center col-10">
              <p className="text-baner color-pink text-justify text-center margen">"La plataforma colaborativa que busca el empoderamiento femenino mediante el crecimiento economico de las mujeres emprendedoras"</p>
            </div>
            <div className="d-flex mt-5 align-items-center justify-content-center">
              <p className="text-baner text-center">¿QUÉ ENCONTRARÉ EN JUNTAS?</p>
            </div>
            <div className="col-12 d-flex flex-row align-items-center">
              <div className="col-4 my-5">
                <img src="https://user-images.githubusercontent.com/44485081/57424915-fa728b80-71de-11e9-9e9e-30d543a44862.png" alt="dinero" />
                <p className="col-10 text-content text-center">Podrás solicitar préstamos accesibles sin tantos papeleos.</p>
              </div>
              <div className=" col-4 my-5">
                <img src="https://user-images.githubusercontent.com/44485081/57424933-09593e00-71df-11e9-81c2-bd90c42a7d55.png" alt="dinero" />
                <p className="col-10 text-content text-center">Encontrarás colaboradores y proveedores de confianza para tu negocio.</p>
              </div>
              <div className=" col-4 my-5">
                <img src="https://user-images.githubusercontent.com/44485081/57424956-183ff080-71df-11e9-83be-ca2fd7e644be.png" alt="dinero" />
                <p className="col-10 text-content text-center">Información para hacer crecer tu negocio, tips y recomendaciones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container my-5">
      <div className="row">
        <div className="col-6">
          <img className="img-links" src="https://user-images.githubusercontent.com/44485081/57427115-20e8f480-71e8-11e9-90e8-38c129433b3e.jpg" alt="prestamo" />
        </div>
        <div className="col-6 bckg-pink align-items-center justify-content-center align-content-center">
          <div className="margen col-8">
            <h1 className="color-yellow text-links">PIDE TU PRÉSTAMO PARA TU NEGOCIO</h1>
            <p className="color-white mt-4">Encuentra préstamos a tu medida, sin tantos requisitos y de forma rápida.</p>
            <button type="button" className="btn-solucion color-yellow mt-5">
              <Link to="/lending" className="links">PIDE TU PRÉSTAMO</Link>
            </button>
          </div>
        </div>

        <div className="d-flex flex-wrap-reverse">
          <div className="col-6 bckg-pink align-content-center">
            <div className="margen col-8">
              <h1 className="color-yellow text-links">ENCUENTRA UN PERSONAL DE CONFIANZA</h1>
              <p className="color-white mt-4">Ingresa tu perfil, cuéntanos qué necesitas (proveedores, colaboradores) y te conectamos con la personal ideal para tu negocio.</p>
              <button className="btn-solucion color-yellow mt-5">INCREMENTA TU RED DE CONTACTOS</button>
            </div>
          </div>
          <div className="col-6">
            <img className="img-links margin-r" src="https://user-images.githubusercontent.com/44485081/57427156-5d1c5500-71e8-11e9-9db5-4f5c9a1bbcfd.jpg" alt="contactos" />
          </div>
        </div>


        <div className="col-6">
          <img className="img-links" src="https://user-images.githubusercontent.com/44485081/57427184-78876000-71e8-11e9-8292-e8742e856d6c.png" alt="crece" />
        </div>
        <div className="col-6 bckg-pink">
          <div className="margen col-8 align-content-center">
            <h1 className="color-yellow text-links">HAZ CRECER TU NEGOCIO</h1>
            <p className="color-white mt-4">Te brindamos Información del sector de tu negocio y te recomendamos soluciones para hacerlo crecer.</p>
            <button className="btn-solucion color-yellow mt-5">HAZ CRECER TU NEGOCIO</button>
          </div>
        </div>
      </div>
    </section>

    <section className="container my-5 align-items-center">
      <div className="row ">
        <div className="col-12 color-black">
          <div className="d-flex flex-column">
            <div className="d-flex mt-5 justify-content-center align-items-center">
              <p className="text-baner color-black text-justify text-center mb-5">Y TAMBIÉN TE OFRECEMOS SOLUCIONES PARA INCREMENTAR TUS VENTAS</p>
            </div>
            <div className="col-12 d-flex flex-row align-items-center">
              <div className="col-4 justify-content-center align-content-center">
                <button className="btn-facebook bckg-yellow color-white my-2 ml-5">VENDO POR FACEBOOK</button>
                <div className="border-yellow mt-1 py-4 align-content-center">
                  <p className="ml-4 col-10 text-mini text-justify">CON ESTE PACK AUMENTARÁS UN 20% TUS VENTAS</p>
                  <img className="margen img-card-home" src="https://user-images.githubusercontent.com/44485081/57427956-d1a4c300-71eb-11e9-830c-3adb47971fb6.jpg" alt="poket pos" />
                </div>
                <button className="btn-loquiero bckg-yellow color-white">LO QUIERO</button>
              </div>

              <div className="col-4 justify-content-center align-content-center">
                <button className="btn-solucion-two bckg-yellow color-white my-2 ml-5">TENGO UNA TIENDA FÍSICA Y QUIERO CRECER</button>
                <div className="border-yellow mt-1 py-4 align-content-center">
                  <p className=" ml-4 col-10 text-mini text-justify text-center">CON ESTE PACK PODRÁS VENDER DE FORMA ONLINE</p>
                  <img className="margen img-card-home" src="https://user-images.githubusercontent.com/44485081/57427972-e3866600-71eb-11e9-8934-dd8bcbf864b2.jpg" alt="tu vitrina" />
                </div>
                <button className="btn-loquiero bckg-yellow color-white">LO QUIERO</button>
              </div>

              <div className="col-4 justify-content-center align-content-center">
                <button className="btn-solucion-two bckg-yellow color-white my-2 ml-4">BUSCO SERVICIOS DE VALOR AGREGADO</button>
                <div className="border-yellow mt-1 py-4 align-content-center">
                    <p className=" ml-4 col-10 text-mini text-justify text-center">CON ESTE PACK PODRÁS OFRECER MÁS SERVICIOS</p>
                    <img className="margen img-card-home" src="https://user-images.githubusercontent.com/44485081/57427989-f6993600-71eb-11e9-8489-54534a5d8429.jpg" alt="suma" />
                  </div>
                <button className="btn-loquiero bckg-yellow color-white">LO QUIERO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="bckg-black footer color-white text-center align-content-center align-items-center">
      <p>VISANET PERÚ</p>
    </footer>
  </main>
);
export default Home;
