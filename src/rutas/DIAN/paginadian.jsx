import { useEffect, useState } from "react"

export default function PaginaDIAN(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [files, setFiles] = useState([])
    useEffect(() => {
        async function fetchFiles() {
            try {
                const response = await fetch("/files/list.json");
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
    }, [])
    return (
        <>
        <h1 style={{margin:"20px"}}>Estados financieros</h1>
        
        <div className="grid">
            {files.map((file, index) => (
                <div key={index}>
                    <a target="_blank" className="docs" href={`/files/${file}`}><h3>{file}</h3></a>
                </div>
            ))}
        </div>
        </>
    )
}