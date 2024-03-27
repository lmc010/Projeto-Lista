import { useState } from 'react';
import "./App.css";
import Tarefa from './components/Tarefa';
import Forms from './components/Forms';



function App() {
  const [tarefas, setTarefas] = useState([

  {
    id: 1,
    text: "Estudar" ,
    hour: "15:00",
    category: "Estudos",
    isCompleted: false,
    },
    
    {
    id: 2,
    text: "Viajar",
    hour: "18:00",
    category: "Pessoal",
    isCompleted: false,
    }

  ])
   
  const addTarefa = (text, category, hour) => {
      const novaTarefa = [...tarefas,
        {
          id: Math.floor(Math.random() * 10000),
          text,
          hour,
          category,
          isCompleted: false,
        },
      ];

      setTarefas(novaTarefa);
  };

  const removerTarefas = (id) =>{
     const novaTarefa = [...tarefas]
     const pesquisarTarefa = novaTarefa.filter(tarefa => tarefa.id !== id ? tarefa : null);

     setTarefas(pesquisarTarefa)
  };

  const concluirTarefas = (id) =>{
    const novaTarefa = [...tarefas];
    novaTarefa.map((tarefa) => 
     tarefa.id === id ? (tarefa.isCompleted = !tarefa.isCompleted) : tarefa);  

    setTarefas(novaTarefa);
 };


  return (
    <div className='app'>
      
      <h1> Lista de Tarefas</h1>
      <br/>
       <div className="lista-tarefa">
        {tarefas.map((tarefa) =>(
         <Tarefa key={tarefa.id} tarefa={tarefa} removerTarefas={removerTarefas} concluirTarefas={concluirTarefas}/>      
       ))}
     </div>
     <br/>
     <hr/>
     <Forms addTarefa={addTarefa}/>
    </div>
  );
}

export default App;