import { useState } from "react"

const Forms = ({addTarefa}) => {
      const [value, setValue] = useState("");
      const [hour, setHour] = useState("");
      const [category, setCategory] = useState("");

      const handleSubmit = (e) =>{
        e.preventDefault();
        if (!value || !category || !hour) return;
        addTarefa(value, category, hour)
        setHour("");
        setValue("");
        setCategory("");
      }

  return (
    <div className="formulario">
       <h2>Nova Tarefa:</h2>
       <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Digite o Titulo da Tarefa" value={value} onChange={(e) => setValue(e.target.value)}></input>
           <input type="text" placeholder="Digite o Horario da Tarefa" value={hour} onChange={(e) => setHour(e.target.value)}></input>
           <select value={category} onChange={(e) => setCategory(e.target.value)}>
             <option value="">Selecione uma categoria</option>
             <option value="Trabalho">Trabalho</option>
             <option value="Lazer">Lazer</option>
             <option value="Estudos">Estudos</option>
           </select>  
           <button type="submit">Criar Tarefa</button>
       </form>
    </div>
  )
}

export default Forms