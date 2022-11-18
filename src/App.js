import "./App.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header class="cabecera">
        {/* LOGO */}
        <figure class="cabecera__figura">
          <img class="figura__logo" src="./imgs/svg/pm2-icon.svg" alt="Logo" />
        </figure>

        {/* BARRA DE NAVEGACIÓN */}
        <nav class="cabecera__navegacion">
          <a class="navegacion__item" href="/#">
            Item 1
          </a>
          <a class="navegacion__item" href="/#">
            Item 2
          </a>
          <a class="navegacion__item" href="/#">
            Item 3
          </a>
          <a class="navegacion__item" href="/#">
            Item 4
          </a>
          <a class="navegacion__item" href="/#">
            Item 5
          </a>
        </nav>
      </header>

      {/* MAIN */}
      <main class="inicio">
        {/* APARTADO: PRESENTACIÓN */}
        <div class="inicio__presentacion">
          <h2 class="presentacion__titulo contenido">BIENVENIDO A CJAVAT</h2>
          <p class="presentacion__descripcion contenido">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            accusantium possimus dolore, aliquam distinctio pariatur sapiente
            provident eos culpa neque quo quibusdam magnam ex molestiae ipsam
            recusandae error fuga! Modi!
          </p>
          <button class="presentacion__boton contenido">REGISTRARSE</button>
          {/* <svg
            class="presentacion__waves"
            id="wave"
            style="transform: rotate(0deg); transition: 0.3s"
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(12, 45, 72, 1)" offset="0%"></stop>
                <stop stop-color="rgba(12, 45, 72, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style="transform: translate(0, 0px); opacity: 1"
              fill="url(#sw-gradient-0)"
              d="M0,147L40,130.7C80,114,160,82,240,106.2C320,131,400,212,480,269.5C560,327,640,359,720,318.5C800,278,880,163,960,171.5C1040,180,1120,310,1200,334.8C1280,359,1360,278,1440,277.7C1520,278,1600,359,1680,400.2C1760,441,1840,441,1920,408.3C2000,376,2080,310,2160,253.2C2240,196,2320,147,2400,122.5C2480,98,2560,98,2640,122.5C2720,147,2800,196,2880,245C2960,294,3040,343,3120,359.3C3200,376,3280,359,3360,334.8C3440,310,3520,278,3600,253.2C3680,229,3760,212,3840,228.7C3920,245,4000,294,4080,285.8C4160,278,4240,212,4320,155.2C4400,98,4480,49,4560,89.8C4640,131,4720,261,4800,302.2C4880,343,4960,294,5040,269.5C5120,245,5200,245,5280,204.2C5360,163,5440,82,5520,114.3C5600,147,5680,294,5720,367.5L5760,441L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"
            ></path>
          </svg> */}
        </div>

        {/* APARTADO: PROFESORES */}
        <div class="inicio__profesores">
          <h1 class="profesores__titulo">TENEMOS A LOS MEJORES PROFESORES</h1>
          <div class="profesores__contenedor">
            <div class="profesores__cards">
              {/* <img class="cards__foto" src="./imgs/profesores/profesor1.jpg" /> */}
              <h3 class="cards__nombre">Daniel Plascencia</h3>
              <p class="cards__especialidad">Programador Front-End</p>
              <button class="cards__mas-informacion">Más Información</button>
            </div>
            <div class="profesores__cards">
              {/* <img class="cards__foto" src="./imgs/profesores/profesor2.jpg" /> */}
              <h3 class="cards__nombre">Carlos Mercado</h3>
              <p class="cards__especialidad">Programador Back-End</p>
              <button class="cards__mas-informacion">Más Información</button>
            </div>
            <div class="profesores__cards">
              {/* <img class="cards__foto" src="./imgs/profesores/profesor3.jpg" /> */}
              <h3 class="cards__nombre">Javato Ibarra</h3>
              <p class="cards__especialidad">Programador FullStack</p>
              <button class="cards__mas-informacion">Más Información</button>
            </div>
            <div class="profesores__cards">
              {/* <img class="cards__foto" src="./imgs/profesores/profesor4.jpg" /> */}
              <h3 class="cards__nombre">Javat Alderson</h3>
              <p class="cards__especialidad">UI / UX Designer</p>
              <button class="cards__mas-informacion">Más Información</button>
            </div>
          </div>
        </div>

        {/* APARTADO: LENGUAJES DE PROGRAMACIÓN */}
        <div class="inicio__lenguajes">
          <h1 class="lenguajes__titulo">LENGUAJES DE PROGRAMACIÓN</h1>
          <div class="lenguajes__container">
            <div class="lenguajes__items">
              <img src="./imgs/svg/html-5.svg" alt="HTML5" />
            </div>
            <div class="lenguajes__items">
              <img src="./imgs/svg/css-3.svg" alt="CSS3" />
            </div>
            <div class="lenguajes__items">
              <img src="./imgs/svg/javascript.svg" alt="JavaScript" />
            </div>
            <div class="lenguajes__items">
              <img src="./imgs/svg/react.svg" alt="ReactJS" />
            </div>
            <div class="lenguajes__items">
              <img src="./imgs/svg/nodejs-icon.svg" alt="NodeJS" />
            </div>
            <div class="lenguajes__items">
              <img src="./imgs/svg/github-icon.svg" alt="GitHub" />
            </div>
          </div>
        </div>

        {/* APARTADO: INSTALACIONES */}
        <div class="inicio__instalaciones">
          <h1 class="instalaciones__titulo">NUESTRAS INSTALACIONES</h1>
          <div class="instalaciones__container">
            <img src="./imgs/gallery/img1.jpg" alt="Instalacion 1" />
            <img src="./imgs/gallery/img2.jpg" alt="Instalacion 2" />
            <img src="./imgs/gallery/img3.jpg" alt="Instalacion 3" />
            <img src="./imgs/gallery/img4.jpg" alt="Instalacion 4" />
            <img src="./imgs/gallery/img5.jpg" alt="Instalacion 5" />
            <img src="./imgs/gallery/img6.jpg" alt="Instalacion 6" />
            <img src="./imgs/gallery/img7.jpg" alt="Instalacion 7" />
            <img src="./imgs/gallery/img8.jpg" alt="Instalacion 8" />
            <img src="./imgs/gallery/img9.jpg" alt="Instalacion 9" />
          </div>
        </div>

        {/* APARTADO: TESTIMONIOS DE ALUMNOS */}
        <div class="inicio__testimonios">
          <h1 class="testimonios__titulo">TESTIMONIOS DE NUESTROS ALUMNOS</h1>
          <div class="testimonios__container">
            <div class="testimonios__alumnos">
              <img
                class="alumnos__foto"
                src="./imgs/testimonios/testimonio-1.jpg"
                alt="Testimonio 1"
              />
              <h3 class="alumnos__nombre">Oliver Plascencia</h3>
              <p class="alumnos__testimonio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                sunt, accusamus id debitis vero excepturi rerum vel,
                necessitatibus deleniti harum dolore, consequuntur error
                nesciunt reprehenderit eaque cupiditate beatae labore quas!
              </p>
            </div>
            <div class="testimonios__alumnos">
              <img
                class="alumnos__foto"
                src="./imgs/testimonios/testimonio-2.jpg"
                alt="Testimonio 2"
              />
              <h3 class="alumnos__nombre">Issac Plascencia</h3>
              <p class="alumnos__testimonio">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                repellendus perspiciatis omnis velit, delectus dignissimos eos
                molestias aperiam iure odit, eligendi pariatur explicabo
              </p>
            </div>
            <div class="testimonios__alumnos">
              <img
                class="alumnos__foto"
                src="./imgs/testimonios/testimonio-3.jpg"
                alt="Testimonio 3"
              />
              <h3 class="alumnos__nombre">Eliot Alderson</h3>
              <p class="alumnos__testimonio">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                minus odio cupiditate. Dolorem neque doloremque itaque ducimus
                architecto minus et dignissimos rem?
              </p>
            </div>
            <div class="testimonios__alumnos">
              <img
                class="alumnos__foto"
                src="./imgs/testimonios/testimonio-4.jpg"
                alt="Testimonio 4"
              />
              <h3 class="alumnos__nombre">Issa Gallegos</h3>
              <p class="alumnos__testimonio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur amet in mollitia! Ut eligendi assumenda ducimus
                omnis reiciendis aspernatur dicta debitis explicabo quidem hic,
                error eveniet.
              </p>
            </div>
            <div class="testimonios__alumnos">
              <img
                class="alumnos__foto"
                src="./imgs/testimonios/testimonio-5.jpg"
                alt="Testimonio 5"
              />
              <h3 class="alumnos__nombre">Maria Vasquez</h3>
              <p class="alumnos__testimonio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                nihil eum quam quibusdam cupiditate
              </p>
            </div>
          </div>
        </div>

        {/* APARTADO: PRECIO DE SUSCRIPCIONES */}
        <div class="inicio__suscripciones">
          <h1 class="suscripciones__titulo">SUSCRIBETE AHORA</h1>
          <p class="suscripciones__descripcion">¡Oferta por tiempo limitado!</p>
          <div class="suscripciones__container">
            <div class="suscripciones__item">
              <h3 class="item__titulo">Básico</h3>
              <h4 class="item__precio">Gratis</h4>
              <h4 class="item__descripcion">Hasta 5 personas por plan.</h4>
              <p class="item__caracteristicas">Caracteristica 1</p>
              <p class="item__caracteristicas">Caracteristica 2</p>
              <p class="item__caracteristicas">Caracteristica 3</p>
              <button class="item__boton">Pruébalo Ahora</button>
            </div>
            <div class="suscripciones__item suscripciones__item--especial">
              <h3 class="item__titulo">Intermedio</h3>
              <h4 class="item__precio">$9.99</h4>
              <h4 class="item__descripcion">Hasta 35 personas por plan.</h4>
              <p class="item__caracteristicas">Caracteristica 1</p>
              <p class="item__caracteristicas">Caracteristica 2</p>
              <p class="item__caracteristicas">Caracteristica 3</p>
              <button class="item__boton">Pruébalo Ahora</button>
            </div>
            <div class="suscripciones__item">
              <h3 class="item__titulo">Profesional</h3>
              <h4 class="item__precio">$19.99</h4>
              <h4 class="item__descripcion">Hasta 50 personas por plan.</h4>
              <p class="item__caracteristicas">Caracteristica 1</p>
              <p class="item__caracteristicas">Caracteristica 2</p>
              <p class="item__caracteristicas">Caracteristica 3</p>
              <button class="item__boton">Pruébalo Ahora</button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer class="pie">
        <div class="pie__social">
          <a href="/#" class="social__link">
            <img src="./imgs/svg/twitter.svg" alt="Twitter" />
          </a>
          <a href="/#" class="social__link">
            <img src="./imgs/svg/instagram-icon.svg" alt="Instagram" />
          </a>
          <a href="/#" class="social__link">
            <img src="./imgs/svg/youtube-icon.svg" alt="YouTube" />
          </a>
        </div>
        <div class="pie__copyright">
          <p class="copyright__texto">COPYRIGHT 2022</p>
        </div>
      </footer>
    </>
  );
}

export default App;
