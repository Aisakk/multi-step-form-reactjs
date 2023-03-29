import { useState } from "react";
function UploadDocument({ prevStep }) {
  //Busca los inputs segun el atributo name y luego el valor de dicho input para pasarlo como objeto
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    //Busca los inputs segun el atributo name y luego el valor de dicho input para pasarlo como objeto
    let nameInput = e.target.name;
    let valueInput = e.target.value;
    setInput((prev) => ({ ...prev, [nameInput]: valueInput }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //Guarda todos los campos del formulario este es solo preventivo, no es necesario ya que aca se debe enviar el POST fetch
    localStorage.setItem("Upload", JSON.stringify(input));

    //Borra todos los datos al enviar un submit
    localStorage.clear();
  };
  return (
    <form className="flex flex-col px-3" onSubmit={handleSubmit}>
      <input
        type="file"
        placeholder="Documento pdf o png"
        name="file"
        onChange={handleChange}
        className="border border-gray-200 rounded-sm p-2 mt-2 focus:outline-none focus:border-orange-400 file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0 file:font-semibold file:bg-orange-400 file:text-white hover:file:bg-orange-300"
        required
      />
      <input
        type="text"
        placeholder="Numero de Identificacion"
        name="Number_Identification"
        onChange={handleChange}
        className="border border-gray-200 rounded-sm p-2 mt-2 focus:outline-none focus:border-orange-400"
        required
      />
      <input
        type="date"
        placeholder="Fecha de Vencimiento"
        name="Due_Date"
        onChange={handleChange}
        className="border border-gray-200 rounded-sm p-2 mt-2 focus:outline-none focus:border-orange-400"
        required
      />
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="border border-gray-600 mt-3 p-2 rounded w-40 hover:bg-slate-600 hover:text-white cursor-pointer"
        >
          Regresar
        </button>
        <button
          type="submit"
          className="p-2 mt-3 bg-orange-400 text-white rounded-sm hover:bg-orange-300 w-40 cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}

export default UploadDocument;
