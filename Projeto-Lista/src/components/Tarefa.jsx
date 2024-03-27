import React from 'react'




const Tarefa = ({tarefa, removerTarefas, concluirTarefas }) => {
  return (
    <div 
     className="tarefa"
     style={{textDecoration: tarefa.isCompleted ? "line-through": ""}}>    
            <div className='conteudo'>
              <p>{tarefa.text}</p>
              <p>{tarefa.hour}</p>
              <p className='category'>({tarefa.category})</p>
            </div>   
          

            <button className="concluir" onClick={() => concluirTarefas(tarefa.id)}>Concluir</button>
            <button className="excluir" onClick={() => removerTarefas(tarefa.id)}>X</button>
          </div>
  )
}

export default Tarefa