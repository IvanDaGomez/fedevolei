import { Link } from "react-router-dom";
import FooterInfo from "./footerInfo";
export default function Footer() {
    return (
      <>
        <footer>
          <div className="footer-section">
            <img className="fondo" src="/fedevolei.png" alt="lisanvolei" />
          </div>
          <div className="footer-section organizador">
            <Link to="/documentos-DIAN-RTE-2024" className="link"><h3>Estados financieros</h3></Link>
            
          </div>
          <div className="footer-section">
            <h3>Contáctanos</h3>
            
            <ul>
              <li>Correo: fcv@fedevoleicol.com</li>
              <li>Teléfono: +57 601 755 9135</li>
            </ul>
            <div className="imagesGrid">
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
        </footer>
      <FooterInfo />
      </>
    );
  }
  