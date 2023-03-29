import { useState, useEffect } from "react";
function Information({prevStep, nextStep}){
    const [input, setInput] = useState({})

    const handleChange = (e) =>{
        //Busca los inputs segun el atributo name y luego el valor de dicho input para pasarlo como objeto
        let nameInput = e.target.name
        let valueInput = e.target.value
        setInput(prev=>({...prev, [nameInput]: valueInput}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem("Information", JSON.stringify(input))
        nextStep()
    }

    useEffect(()=>{ 
        //Este permite traer la data si lleno completamente el formulario y le dio avanzar
        let res = localStorage.getItem('Information')
        setInput(JSON.parse(res))
    }, [])

    return(
    <form className="flex flex-col px-3" onSubmit={handleSubmit}>
        <input type="text" name="rfc" placeholder="RFC"  value={input?.rfc} onChange={handleChange} className="border border-gray-200 rounded-sm p-2 mt-2 focus:outline-none focus:border-orange-400"  required/>
        <input type="text" name="curp" placeholder="CURP"   value={input?.curp} onChange={handleChange}className="border border-gray-200 rounded-sm p-2 mt-2 focus:outline-none focus:border-orange-400"  required/>
        <input type="date" name="birthday" placeholder="Fecha de Nacimiento" value={input?.birthday} onChange={handleChange} className="border border-gray-200 rounded-sm p-2 mt-2 focus:outline-none focus:border-orange-400" required />
        <div className="flex justify-between">
            <button onClick={prevStep} className="border border-gray-600 mt-3 p-2 rounded w-40 hover:bg-slate-600 hover:text-white cursor-pointer">Regresar</button>
            <button type="submit" className="p-2 mt-3 bg-orange-400 text-white rounded-sm hover:bg-orange-300 w-40 cursor-pointer">Siguiente</button>
        </div>
    </form>
)

}

export default Information;