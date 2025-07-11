import { useState } from "react"
import { currentPassword } from "../../../assets/config"
import CryptoJS from "crypto-js"
import { toast, ToastContainer } from "react-toastify"
import "./agregar.css"
import FileUploader from "../../../componentes/fileUploader"
export default function AgregarDoc() {
    const [password, setPassword] = useState("")
    const [authenticated, setAuthenticated] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState(null)
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
        const date = parseInt(e.target.year.value.trim(), 10)
        if (!date) {
            toast.error("Por favor, ingresa el año de los documentos.")
            return
        }
        if (date.toString().length !== 4 || isNaN(date) || date < 2020 ) {
            toast.error("Por favor, ingresa un año válido (4 dígitos).")
            return
        }
        if (selectedFiles.length === 0) {
            toast.error("Por favor, selecciona un archivo para subir.")
            return
        }
        let success = true
        for (let selectedFile of selectedFiles) {
            if (
                !["pdf", "doc", "docx", "txt", "xlsx"].includes(
                selectedFile.name.split(".").pop().toLowerCase()
                )
            ) {
                toast.error("Por favor, sube un archivo con una extensión válida (pdf, doc, docx, txt, xlsx).")
                return
            }

            try {
                const base64 = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(reader.result.split(',')[1]);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(selectedFile);
                });

                const payload = {
                    filename: selectedFile.name,
                    file_content: base64,
                    year: date
                };

                const response = await fetch("https://abjay0s29b.execute-api.us-east-1.amazonaws.com/default/fedevoleiLambda", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    toast.error("Error al subir el archivo: " + selectedFile.name)
                    const errorText = await response.text();
                    console.error("Error response:", errorText);
                    success = false
                }
            } catch (error) {
                console.error("Error:", error)
                toast.error("Error al subir el documento")
                success = false
            }
        }
        if (success) {
            toast.success("Documentos subidos exitosamente")
        }
        setSelectedFiles(null)
        e.target.year.value = ""
        
    }
    return (<>
        <div className="uploadContainer">
        {authenticated ? (
            <>
            <h1>Agregar documentos fedevolei</h1>
            <form noValidate onSubmit={handleSubmit}>
                <input name="year" type="text" placeholder="Año de los documentos" />
                <FileUploader
                    setSelectedFiles={setSelectedFiles}
                    selectedFiles={selectedFiles}
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
        )}
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