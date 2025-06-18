import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
export default function PaginaDIAN(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [files, setFiles] = useState([])
    const { year } = useParams();
    useEffect(() => {
        async function fetchFiles() {
            // Esta funcion obtiene los archivos de la carpeta del año especificado
            // y filtra los archivos que no son PDF, DOC, DOCX, TXT o XLSX
            // solo guarda en el estado el string con el path del archivo
            try {
                const url = `/files/${year}/list.json`
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                // Filter only PDF files
                const pdfFiles = data.filter(file => !["pdf", "doc", "docx", "txt", "xlsx"].includes(
                    file.split(".").pop().toLowerCase())).reverse()
                setFiles(pdfFiles);
            } catch (error) {
                console.error("Error fetching files:", error);
            }
        }
        fetchFiles();
    }, [year])
    return (
        <>
            <Header />
        <h1 style={{margin:"20px"}}>Estados financieros {year}</h1>

        <div className="grid">
            {files.map((file, index) => (
                <div key={index}>
                    <a target="_blank" className="docs" href={`/files/${year}/${file}`}><h3>{file}</h3></a>
                </div>
            ))}
            </div>
            <Footer />
        </>
    )
}