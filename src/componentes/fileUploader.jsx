
export default function FileUploader ({
    setSelectedFile,
    selectedFile
}) {

  const handleDeleteImage = (index) => {
    // Filtra los archivos y las imágenes recortadas por índice
    setSelectedFile(null)
    
  }
  // ---------------------------------Cuando se ingresa archivos
  const handleFileChange = async (e) => {
    // Just one file
    const files = e.target.files
    console.log(files)
    if (files.length === 0) {
        return // No files selected
    }
    const fileArray = Array.from(files)
    setSelectedFile(fileArray[0]) // Guardar el primer archivo seleccionado
  }
  // This is for updating the info of the title, and author

  const handleDrop = async (e) => {
    e.preventDefault()
    const file = Array.from(e.dataTransfer.files)[0]
    setSelectedFile(file) // Añadir archivos nuevos
  }

    // Solo previene el comportamiento predeterminado en onDragOver
  const handleDragOver = (e) => {
      e.preventDefault()
    }
  function renderIcon (fileName) {
    const fileExtension = fileName.split('.').pop().toLowerCase()
    const icons = {
      pdf: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19 11C19 10.1825 19 9.4306 18.8478 9.06306C18.6955 8.69552 18.4065 8.40649 17.8284 7.82843L13.0919 3.09188C12.593 2.593 12.3436 2.34355 12.0345 2.19575C11.9702 2.165 11.9044 2.13772 11.8372 2.11401C11.5141 2 11.1614 2 10.4558 2C7.21082 2 5.58831 2 4.48933 2.88607C4.26731 3.06508 4.06508 3.26731 3.88607 3.48933C3 4.58831 3 6.21082 3 9.45584V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H19M12 2.5V3C12 5.82843 12 7.24264 12.8787 8.12132C13.7574 9 15.1716 9 18 9H18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M21 14H19C18.4477 14 18 14.4477 18 15V16.5M18 16.5V19M18 16.5H20.5M7 19V17M7 17V14H8.5C9.32843 14 10 14.6716 10 15.5C10 16.3284 9.32843 17 8.5 17H7ZM12.5 14H13.7857C14.7325 14 15.5 14.7462 15.5 15.6667V17.3333C15.5 18.2538 14.7325 19 13.7857 19H12.5V14Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>,
      doc: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21 15.0163C20.9544 14.0244 20.2766 14 19.3571 14C17.9407 14 17.7059 14.3384 17.7059 15.6667V17.3333C17.7059 18.6616 17.9407 19 19.3571 19C20.2766 19 20.9544 18.9756 21 17.9837M10.2949 16.5C10.2949 17.8807 9.18876 19 7.82429 19C7.51642 19 7.36248 19 7.24782 18.933C6.9733 18.7726 7.00076 18.448 7.00076 18.1667V14.8333C7.00076 14.552 6.9733 14.2274 7.24782 14.067C7.36248 14 7.51642 14 7.82429 14C9.18876 14 10.2949 15.1193 10.2949 16.5ZM14 19C13.2236 19 12.8354 19 12.5941 18.7559C12.3529 18.5118 12.3529 18.119 12.3529 17.3333V15.6667C12.3529 14.881 12.3529 14.4882 12.5941 14.2441C12.8354 14 13.2236 14 14 14C14.7764 14 15.1646 14 15.4059 14.2441C15.6471 14.4882 15.6471 14.881 15.6471 15.6667V17.3333C15.6471 18.119 15.6471 18.5118 15.4059 18.7559C15.1646 19 14.7764 19 14 19Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M19 11C19 10 19 9.4306 18.8478 9.06306C18.6955 8.69552 18.4065 8.40649 17.8284 7.82843L13.0919 3.09188C12.593 2.593 12.3436 2.34355 12.0345 2.19575C11.9702 2.165 11.9044 2.13772 11.8372 2.11401C11.5141 2 11.1614 2 10.4558 2C7.21082 2 5.58831 2 4.48933 2.88607C4.26731 3.06508 4.06508 3.26731 3.88607 3.48933C3 4.58831 3 6.21082 3 9.45584V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H19M12 2.5V3C12 5.82843 12 7.24264 12.8787 8.12132C13.7574 9 15.1716 9 18 9H18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>,
      docx: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21 15.0163C20.9544 14.0244 20.2766 14 19.3571 14C17.9407 14 17.7059 14.3384 17.7059 15.6667V17.3333C17.7059 18.6616 17.9407 19 19.3571 19C20.2766 19 20.9544 18.9756 21 17.9837M10.2949 16.5C10.2949 17.8807 9.18876 19 7.82429 19C7.51642 19 7.36248 19 7.24782 18.933C6.9733 18.7726 7.00076 18.448 7.00076 18.1667V14.8333C7.00076 14.552 6.9733 14.2274 7.24782 14.067C7.36248 14 7.51642 14 7.82429 14C9.18876 14 10.2949 15.1193 10.2949 16.5ZM14 19C13.2236 19 12.8354 19 12.5941 18.7559C12.3529 18.5118 12.3529 18.119 12.3529 17.3333V15.6667C12.3529 14.881 12.3529 14.4882 12.5941 14.2441C12.8354 14 13.2236 14 14 14C14.7764 14 15.1646 14 15.4059 14.2441C15.6471 14.4882 15.6471 14.881 15.6471 15.6667V17.3333C15.6471 18.119 15.6471 18.5118 15.4059 18.7559C15.1646 19 14.7764 19 14 19Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M19 11C19 10 19 9.4306 18.8478 9.06306C18.6955 8.69552 18.4065 8.40649 17.8284 7.82843L13.0919 3.09188C12.593 2.593 12.3436 2.34355 12.0345 2.19575C11.9702 2.165 11.9044 2.13772 11.8372 2.11401C11.5141 2 11.1614 2 10.4558 2C7.21082 2 5.58831 2 4.48933 2.88607C4.26731 3.06508 4.06508 3.26731 3.88607 3.48933C3 4.58831 3 6.21082 3 9.45584V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H19M12 2.5V3C12 5.82843 12 7.24264 12.8787 8.12132C13.7574 9 15.1716 9 18 9H18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>,
      txt: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19 11C19 10.1825 19 9.4306 18.8478 9.06306C18.6955 8.69552 18.4065 8.40649 17.8284 7.82843L13.0919 3.09188C12.593 2.593 12.3436 2.34355 12.0345 2.19575C11.9702 2.165 11.9044 2.13772 11.8372 2.11401C11.5141 2 11.1614 2 10.4558 2C7.21082 2 5.58831 2 4.48933 2.88607C4.26731 3.06508 4.06508 3.26731 3.88607 3.48933C3 4.58831 3 6.21082 3 9.45584V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H19M12 2.5V3C12 5.82843 12 7.24264 12.8787 8.12132C13.7574 9 15.1716 9 18 9H18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M18 14H19.5M19.5 14H21M19.5 14V19M7 14H8.5M8.5 14H10M8.5 14V19M12.5 14L14 16.5M14 16.5L15.5 19M14 16.5L15.5 14M14 16.5L12.5 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>,
      xlsx: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 11C19.5 10.1825 19.5 9.4306 19.3478 9.06306C19.1955 8.69552 18.9065 8.40649 18.3284 7.82843L13.5919 3.09188C13.093 2.593 12.8436 2.34355 12.5345 2.19575C12.4702 2.165 12.4044 2.13772 12.3372 2.11401C12.0141 2 11.6614 2 10.9558 2C7.71082 2 6.08831 2 4.98933 2.88607C4.76731 3.06508 4.56508 3.26731 4.38607 3.48933C3.5 4.58831 3.5 6.21082 3.5 9.45584V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H19.5M12.5 2.5V3C12.5 5.82843 12.5 7.24264 13.3787 8.12132C14.2574 9 15.6716 9 18.5 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 13.9998V16.9998C13.5 17.9426 13.5 18.414 13.7929 18.7069C14.0858 18.9998 14.5572 18.9998 15.5 18.9998M8 14L9.5 16.5M9.5 16.5L11 19M9.5 16.5L11 14M9.5 16.5L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.5 14H19C18.4477 14 18 14.4477 18 15V15.5C18 16.0523 18.4477 16.5 19 16.5H19.5C20.0523 16.5 20.5 16.9477 20.5 17.5V18C20.5 18.5523 20.0523 19 19.5 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>,
        xls: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 11C19.5 10.1825 19.5 9.4306 19.3478 9.06306C19.1955 8.69552 18.9065 8.40649 18.3284 7.82843L13.5919 3.09188C13.093 2.593 12.8436 2.34355 12.5345 2.19575C12.4702 2.165 12.4044 2.13772 12.3372 2.11401C12.0141 2 11.6614 2 10.9558 2C7.71082 2 6.08831 2 4.98933 2.88607C4.76731 3.06508 4.56508 3.26731 4.38607 3.48933C3.5 4.58831 3.5 6.21082 3.5 9.45584V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H19.5M12.5 2.5V3C12.5 5.82843 12.5 7.24264 13.3787 8.12132C14.2574 9 15.6716 9 18.5 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 13.9998V16.9998C13.5 17.9426 13.5 18.414 13.7929 18.7069C14.0858 18.9998 14.5572 18.9998 15.5 18.9998M8 14L9.5 16.5M9.5 16.5L11 19M9.5 16.5L11 14M9.5 16.5L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.5 14H19C18.4477 14 18 14.4477 18 15V15.5C18 16.0523 18.4477 16.5 19 16.5H19.5C20.0523 16.5 20.5 16.9477 20.5 17.5V18C20.5 18.5523 20.0523 19 19.5 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
    }
    return icons[fileExtension] || <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M8 7L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 11L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5M20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22877 2 6.34315 2 5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
  }
  return (<>
  <div className='fileUploaderContainer'>

<input
  type='file'
  id='fileInput'
  accept='.pdf,.doc,.docx,.txt,.xlsx' // Acepta varios tipos de archivos
  name='archivos'
  onChange={handleFileChange}
  style={{ display: 'none' }}
/>
{!selectedFile
  ? (
    <>
      <div
        className='fileDropZone'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label htmlFor='fileInput' className='fileButton'>

          <div className='iconContainer'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={40} height={40} color='#000000' fill='none'>
              <path d='M7.00018 6.00055C5.77954 6.00421 5.10401 6.03341 4.54891 6.2664C3.77138 6.59275 3.13819 7.19558 2.76829 7.96165C2.46636 8.58693 2.41696 9.38805 2.31814 10.9903L2.1633 13.501C1.91757 17.4854 1.7947 19.4776 2.96387 20.7388C4.13303 22 6.10271 22 10.0421 22H13.9583C17.8977 22 19.8673 22 21.0365 20.7388C22.2057 19.4776 22.0828 17.4854 21.8371 13.501L21.6822 10.9903C21.5834 9.38805 21.534 8.58693 21.2321 7.96165C20.8622 7.19558 20.229 6.59275 19.4515 6.2664C18.8964 6.03341 18.2208 6.00421 17.0002 6.00055' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
              <path d='M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z' stroke='currentColor' strokeWidth='1.5' />
              <path d='M11.9998 6H12.0088' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </div>
          <button
            className='selectButton'
            type='button'
            onClick={() => document.getElementById('fileInput').click()}
          >
            Seleccionar archivo
          </button>
          
        </label>
      </div>

      <div className='fileError'>
        {selectedFile && <p>Debes subir mínimo un archivo.</p>}
      </div>
    </>
    )
  : (
    <>
      <div className='fileUploaded'>
        {renderIcon(selectedFile.name)}
        <span>{selectedFile.name}</span>
        <button
          className='deleteButton'
          type='button'
          onClick={() => handleDeleteImage(selectedFile)}
        >
          Eliminar
        </button>
      </div>
    </>
    )}
</div>
  </>)
}