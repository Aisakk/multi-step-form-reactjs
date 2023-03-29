import { useEffect, useState } from "react";


function Profile({ nextStep }){
   const [input, setInput] = useState({})

    const handleChange = (e) =>{
        let nameInput = e.target.name
        let valueInput = e.target.value
        setInput(prev=>({...prev, [nameInput]: valueInput}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem("Profile", JSON.stringify(input))
       nextStep()
    }

    useEffect(()=>{ 
         //Este permite traer la data si lleno completamente el formulario y le dio avanzar
        let res = localStorage.getItem('Profile')
        setInput(JSON.parse(res))
    }, [])

    return(
        <form className="flex flex-col px-3" onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre"  value={input?.nombre}  onChange={handleChange}className="border border-gray-200 rounded-sm p-2 mt-2 focus:border-orange-400"required />
            <input type="text" name="apellido" placeholder="Apellido"   value={input?.apellido} onChange={handleChange}className="border border-gray-200 rounded-sm p-2 mt-2 focus:border-orange-400" required/>
            <input type="email" name="email" placeholder="Correo Electronico" value={input?.email}  onChange={handleChange}className="border border-gray-200 rounded-sm p-2 mt-2 focus:border-orange-400" required />
            <input type="text" name="celular" placeholder="Celular" value={input?.celular}  onChange={handleChange}className="border border-gray-200 rounded-sm p-2 mt-2 focus:border-orange-400" required />
            <button type="submit" className="p-2 mt-3 bg-orange-400 text-white rounded-sm hover:bg-orange-300 w-52 cursor-pointer self-end">Siguiente</button>
        </form>
    );
}

export default Profile;