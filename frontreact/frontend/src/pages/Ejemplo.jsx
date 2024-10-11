

const LibrosAgregados=()=>{
    const [actualizar, setActualizar]=useState(null)
    const [librosID, setLibrosID] = useState([])


    const [modalShowUpdate, setModalShowUpdate] = useState(false);
 

    useEffect(()=>{
        const getUserLibros = async()=>{
            const librosID = await getData('librosID',localStorage.getItem("localUsuarioID")+"/")
            console.log(librosID);
            setLibrosID(librosID)

        }
        getUserLibros()
    }, [])
    
    const actualizarLibro = async (id, titulo, autor, estado, categoria, ubicacion) => {
        let libroActualizado = {
            titulo: titulo,
            autor: autor,
            estado: estado ? "Venta" : "Intercambio", 
            categoria: categoria,
            ubicacion: ubicacion,
        };
    
        const response = await putData(libroActualizado, 'librosPut', id); 
        if (response) {
            console.log('Libro actualizado:', response);
        } else {
            console.error('Error al actualizar el libro');
        }
        setModalShowUpdate(false); // OCULTAR EL MODAL
    };
    
    const actualizarDatos = (id,titulo,autor,estado,categoria,ubicacion)=>{ //propiedades del libro que queremos editar
        setActualizar({id,titulo,autor,estado,categoria,ubicacion})//y luego se lo actualizamos al estado
        setModalShowUpdate(true) //MOSTRAR EL MODAL
    }
    
    return(
        <>
        <Navbar />

        <div style={{marginTop: -40}}>
            <HamburgerMenu/>
        </div>

        <div className="d-flex gap-3">
            <i className="fa-solid fa-plus"></i>
            <h3 className="text-nowrap text-title">Mis libros agregados </h3>
        </div>
            <hr/>
        <p>Mis libros: </p>
        <ModalBook/>
        <ListaBooks cardBooks={librosID} mostrarB={true} btnEditarL={actualizarDatos}/>
        
        {actualizar && 
        <ModalPut
            mostrar={modalShowUpdate}
            ocultar={()=>setModalShowUpdate(false)}
            id={actualizar.id}//accedemos a la propiedad del estado
            tituloProp={actualizar.titulo}
            autorProp={actualizar.autor}
            estadoProp={actualizar.estado}
            categoriaProp={actualizar.categoria}
            ubicaProp={actualizar.ubicacion}
            btnEditarProp={actualizarLibro}
            />
        }
        
        <div style={{marginTop: 300}}>
            <Footer/>
        </div>
        </>
    )
}
export default LibrosAgregados