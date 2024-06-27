
import { Link } from 'react-router-dom';
export default function Header() {
    const root = document.documentElement;
    function setColorPalette(color) {
        for (let i = 0; i < 5; i++) {
            root.style.setProperty(`--usando${i}`, getComputedStyle(root).getPropertyValue(`--paleta${color}${i}`));
        }
        
        localStorage.setItem('color', color); // Update local storage

    }
    let color = localStorage.getItem('color') || "Claro"; // Default color
    setColorPalette(color);

    const cambio =()=>{

        if (color === "Claro") {
            color="Oscuro";
            document.querySelector(".moon").style.display = "block"
            document.querySelector(".sun").style.display = "none"
            setColorPalette("Oscuro");
            
        } else {
            color="Claro"
            document.querySelector(".moon").style.display = "none"
            document.querySelector(".sun").style.display = "block"
            setColorPalette("Claro") 
            
        }}

    const abrirMenu = () => {
        let menu = document.querySelector(".inhamburger");

        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
            menu.style.height = "0px";
            menu.style.animationName = "agrandar";
            menu.style.animationPlayState = "running";
            menu.addEventListener("animationend", function handler() {
                menu.style.animationPlayState = "paused";
                menu.style.height = "calc(60vh + 7px)";
                menu.removeEventListener("animationend", handler);
            });
        } else {
            menu.style.animationName = "reducir";
            menu.style.animationPlayState = "running";
            menu.addEventListener("animationend", function handler() {
                menu.style.display = "none";
                menu.style.height = "0px";
                menu.removeEventListener("animationend", handler);
            });
        }
    };

    return (
        <>
        <div className="antesHeader">
            <div className="antesIzq">
                <a href="https://kleosatl.com/" target="_blank"><img className="antesImg" src="/patrocinador1.png" alt="" /></a>
                
            </div>
            <div className="antesCen"><img className='' src="/fedevolei.png" alt="" /></div>
            <div className="antesDer">
                <a href="https://www.instagram.com/molten.colombia/?hl=en" target="_blank"><img className="antesImg" src="/patrocinador4.png" alt="" /></a>
            </div>
        </div>
            <header>
                <div className="headerIzq">
                    <Link to="/"><img src="/logo.png" alt="" /></Link>
                </div>

                <div className="indice headerCen desaparecer">
                    <Link to="/"><p>Inicio</p></Link>
                    <Link to="/news"><p>Noticias</p></Link>
                    <Link to=""><p>Equipos</p></Link>
                    <Link to=""><p>Contacto</p></Link>
                    <Link to="/documentos-DIAN-RTE-2024" ><p>DIAN 2024</p></Link>
                </div>

                <div className="headerDer">
                
                <div className="imagesGrid">
                <div className="paleta" onClick={cambio} style={{marginRight:"30px"}}>
                
            <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<svg className='sun' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2C11.6227 2.33333 11.0945 3.2 12 4M12 20C12.3773 20.3333 12.9055 21.2 12 22M19.5 4.50271C18.9685 4.46982 17.9253 4.72293 18.0042 5.99847M5.49576 17.5C5.52865 18.0315 5.27555 19.0747 4 18.9958M5.00271 4.5C4.96979 5.03202 5.22315 6.0763 6.5 5.99729M18 17.5026C18.5315 17.4715 19.5747 17.7108 19.4958 18.9168M22 12C21.6667 11.6227 20.8 11.0945 20 12M4 11.5C3.66667 11.8773 2.8 12.4055 2 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>       
            </div>
            <a href="https://www.facebook.com/VoleiColombia" target="_blank">
            <div className="socialContainer facebook">
            <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            </div>
            </a>
            <a href="https://twitter.com/voleicolombia?lang=en" target="_blank">
            <div className="socialContainer X">
            <svg className="social imgFooter"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
              </div>
              </a>
            <a href="https://www.instagram.com/voleicolombia/?hl=en" target="_blank">
            <div className="socialContainer instagram">
              <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path d="M17.5 2H6.5C4.01472 2 2 4.01472 2 6.5V17.5C2 19.9853 4.01472 22 6.5 22H17.5C19.9853 22 22 19.9853 22 17.5V6.5C22 4.01472 19.9853 2 17.5 2Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17 11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5C7 8.73858 9.23858 6.5 12 6.5C14.7614 6.5 17 8.73858 17 11.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 7H18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            </a>
            <a href="https://www.youtube.com/@FedevoleiColombia">
            <div className="socialContainer youtube" href="">
                <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
            </div>
            </a>
            
            

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
    <div className="indice pestañas"><Link to="/documentos-DIAN-RTE-2024" >DIAN 2024</Link></div>
    <div className="headerDer pestañas">
    <div className="imagesGrid">
        <div className="paleta" onClick={cambio}>
        <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<svg className='sun' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2C11.6227 2.33333 11.0945 3.2 12 4M12 20C12.3773 20.3333 12.9055 21.2 12 22M19.5 4.50271C18.9685 4.46982 17.9253 4.72293 18.0042 5.99847M5.49576 17.5C5.52865 18.0315 5.27555 19.0747 4 18.9958M5.00271 4.5C4.96979 5.03202 5.22315 6.0763 6.5 5.99729M18 17.5026C18.5315 17.4715 19.5747 17.7108 19.4958 18.9168M22 12C21.6667 11.6227 20.8 11.0945 20 12M4 11.5C3.66667 11.8773 2.8 12.4055 2 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>       
        </div>
            <a href="https://www.facebook.com/VoleiColombia" target="_blank">
            <div className="socialContainer facebook">
            <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            </div>
            </a>
            <a href="https://twitter.com/voleicolombia?lang=en" target="_blank">
            <div className="socialContainer X">
            <svg className="social imgFooter"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
              </div>
              </a>
            <a href="https://www.instagram.com/voleicolombia/?hl=en" target="_blank">
            <div className="socialContainer instagram">
              <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                <path d="M17.5 2H6.5C4.01472 2 2 4.01472 2 6.5V17.5C2 19.9853 4.01472 22 6.5 22H17.5C19.9853 22 22 19.9853 22 17.5V6.5C22 4.01472 19.9853 2 17.5 2Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17 11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5C7 8.73858 9.23858 6.5 12 6.5C14.7614 6.5 17 8.73858 17 11.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 7H18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            </a>
            <a href="https://www.youtube.com/@FedevoleiColombia">
            <div className="socialContainer youtube" href="">
                <svg className="social imgFooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
            </div>
            </a>
            
            
          </div>
          </div>

</div></>
    )
}
