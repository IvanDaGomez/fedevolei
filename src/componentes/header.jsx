import {useEffect} from 'react';
import { Link } from 'react-router-dom';
export default function Header(){

    useEffect(() => {

//------------------------------------FUNCIONES PARA CAMBIAR COLOR EN LAS PALETAS-----------------------
        const root = document.documentElement;

        function setColorPalette(color) {
            for (let i = 0; i < 6; i++) {
                root.style.setProperty(`--usando${i}`, getComputedStyle(root).getPropertyValue(`--paleta${color}${i}`));
            }
            localStorage.setItem('color', color); // Update local storage
        }

        // Load color from localStorage
        const color = localStorage.getItem('color') || "i"; // Default color
        setColorPalette(color);

        // Color palette functionality
        const paletaNeutra = document.querySelectorAll(".default");
        const paletaFem = document.querySelectorAll(".femenino");
        const paletaMasc = document.querySelectorAll(".masculino");

        // Event listeners for color palette buttons
        paletaNeutra.forEach(paleta=>paleta.addEventListener("click", () => setColorPalette("i")));
        paletaFem.forEach(paleta=>paleta.addEventListener("click", () => setColorPalette("c")));
        paletaMasc.forEach(paleta=>paleta.addEventListener("click", () => setColorPalette("n")));

//----------------------------------------------------------------------------------------------------



        return () => {
            // Cleanup event listeners when the component unmounts
            paletaNeutra.forEach(paleta=>paleta.removeEventListener("click", () => setColorPalette("c")));
            paletaFem.forEach(paleta=>paleta.removeEventListener("click", () => setColorPalette("n")));
            paletaMasc.forEach(paleta=>paleta.removeEventListener("click", () => setColorPalette("i")));
        };
    }, []);

//--------------------------------TRES COMPONENTES SEPARADOS: TITULO CON IMAGEN--------------------------
//-------------------------------INDICES Y FUNCIONES DE CAMBIO DE COLOR, USUARIO Y CARRITO---------------
const abrirMenu = () => {
    let menu = document.querySelector(".inhamburger");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
        menu.style.height = "0px";  // Ensure initial height is 0
        menu.style.animationName = "agrandar";
        menu.style.animationPlayState = "running";
        menu.addEventListener("animationend", function handler() {
            menu.style.animationPlayState = "paused";
            menu.style.height = "calc(60vh + 7px)";  // Reset height if necessary
            menu.removeEventListener("animationend", handler);  // Clean up event listener
        });
    } else {
        menu.style.animationName = "reducir";
        menu.style.animationPlayState = "running";
        menu.addEventListener("animationend", function handler() {
            menu.style.display = "none";
            menu.style.height = "0px";  // Ensure height is reset
            menu.removeEventListener("animationend", handler);  // Clean up event listener
        });
    }
};

    return <><header>
        <div className="headerIzq">
            <img src="/lisanvolei.png" alt="" />
            {/*<h1>Lisanvolei</h1>*/}
        </div>
        
        <div className="indice headerCen desaparecer">
            <Link to="/"><p>Inicio</p></Link>
            <Link to="/news"><p>Noticias</p></Link>
            <Link to=""><p>Equipos</p></Link>
            <Link to=""><p>Contacto</p></Link>
        </div>
        <div className="headerDer">
        <div className="imagesGrid">
            <a href="https://www.facebook.com/lisanvolei" target="_blank">
            <div className="socialContainer facebook">
            <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/ivan-gomez-79053425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <div className="socialContainer tiktok">
                      <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
              <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
              </div>
              </a>
            <a href="https://www.instagram.com/ivangomez_012?igsh=cGR4MGx1eWRtanBh" target="_blank">
            <div className="socialContainer instagram">
              <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path d="M17.5 2H6.5C4.01472 2 2 4.01472 2 6.5V17.5C2 19.9853 4.01472 22 6.5 22H17.5C19.9853 22 22 19.9853 22 17.5V6.5C22 4.01472 19.9853 2 17.5 2Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17 11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5C7 8.73858 9.23858 6.5 12 6.5C14.7614 6.5 17 8.73858 17 11.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 7H18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            </a>
            <div className="socialContainer discord" href="">
                <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                    <path d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </div>
            </div>
        </div>
        <svg className="hamburger" onClick={abrirMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"}>
    <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        
    </header>
    <div className="inhamburger">

    <div className="indice pestañas"><Link  to="/">Inicio</Link></div>
    <div className="indice pestañas"><Link  to="/news">Noticias</Link></div>
    <div className="indice pestañas"><Link  to="">Equipos</Link></div>
    <div className="indice pestañas"><Link  to="">Contacto</Link></div>

    <div className="headerDer pestañas">
    <div className="imagesGrid">
            <a href="https://www.facebook.com/lisanvolei" target="_blank">
            <div className="socialContainer facebook">
            <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/ivan-gomez-79053425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <div className="socialContainer tiktok">
                      <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
              <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
              </div>
              </a>
            <a href="https://www.instagram.com/ivangomez_012?igsh=cGR4MGx1eWRtanBh" target="_blank">
            <div className="socialContainer instagram">
              <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path d="M17.5 2H6.5C4.01472 2 2 4.01472 2 6.5V17.5C2 19.9853 4.01472 22 6.5 22H17.5C19.9853 22 22 19.9853 22 17.5V6.5C22 4.01472 19.9853 2 17.5 2Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17 11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5C7 8.73858 9.23858 6.5 12 6.5C14.7614 6.5 17 8.73858 17 11.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 7H18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            </a>
            <div className="socialContainer discord" href="">
                <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                    <path d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </div>
            </div>
          
</div>

</div></>
}
