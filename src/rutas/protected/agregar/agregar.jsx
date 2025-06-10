import { useState } from "react"
import { currentPassword } from "../../../assets/config"
import CryptoJS from "crypto-js"
import { toast, ToastContainer } from "react-toastify"
import "./agregar.css"
import FileUploader from "../../../componentes/fileUploader"
export default function AgregarDoc() {
    const [password, setPassword] = useState("")
    const [authenticated, setAuthenticated] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
  
    const handleAuth = (e) => {
        e.preventDefault()
        const hashedPassword = CryptoJS.SHA256(password).toString();
        
        if (hashedPassword === currentPassword) {
            setAuthenticated(true)
        } else {
            toast.error("Contraseña incorrecta")
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let name = e.target[0].value
        
        if (!selectedFile) {
            toast.error("Por favor, selecciona un archivo para subir.")
            return
        }
        if (
            !["pdf", "doc", "docx", "txt", "xlsx"].includes(
            selectedFile.name.split(".").pop().toLowerCase()
            )
        ) {
            toast.error("Por favor, sube un archivo con una extensión válida (pdf, doc, docx, txt, xlsx).")
            return
        }
        if (!name) {
            name = selectedFile.name
        }
        
        const formData = new FormData()
        formData.append("file", selectedFile)
        formData.append("name", e.target[0].value)
        
        
        fetch("https://fedevolei-backend.onrender.com/agregar-doc", {
            method: "POST",
            body: formData,
            
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    toast.success("Documento subido exitosamente")
                    setSelectedFile(null)
                    e.target[0].value = ""
                } else {
                    toast.error("Error al subir el documento")
                }
            })
            .catch((error) => {
                console.error("Error:", error)
                toast.error("Error al subir el documento")
            })
    }
    return (<>
    <div className="uploadContainer">

    
    {authenticated ? (
        <>
        <h1>Agregar documentos fedevolei</h1>
        <form noValidate onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre del documento" />
            <FileUploader
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
            />
            <button type="submit">Subir</button>

        </form>
        </>
    ) : (
        <>
            <h1>Por favor ingrese la contraseña</h1>
            <input
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAuth(e)
                    }
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
            />
            <button onClick={handleAuth}>Ingresar</button>
        </>
        
    )
        
    }
    </div>
     <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover={false}
        closeOnClick
        theme='light'
      />
    </>)
}