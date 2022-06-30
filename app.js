'use strict';

import { getBanco, setBanco } from 'src/pegardados/getset.js';
import { criarItem } from 'src/print/screen.js';

//3 a ser criado
const LimparTarefas = () =>{
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

//2 a ser criado
const atualizarTela = () =>{
    LimparTarefas()
    const banco = getBanco();
    banco.forEach((item,indice) => {
        criarItem(item.tarefa,item.status,indice);
    });
};

//5 a ser criado
const inserirItem = evento =>{
    const tecla = evento.key;
    const texto = evento.target.value;
    if(tecla === "Enter"){
        const banco = getBanco();
        console.log(banco)
        banco.push(
            {'tarefa' : texto,'status' : ''}
        );
        setBanco(banco);
        atualizarTela();
        evento.target.value = "";
    }
}

const removerItem = indice =>{
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco(banco);
    atualizarTela();
}

const atualizarItem = indice =>{
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela(); 
}

//6 a ser criado
const clickItem  = evento =>{
    const elemento = evento.target;
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removerItem(indice)
    }else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
};

//4 a ser criado
document.getElementById('newItem').addEventListener("keypress",inserirItem);
document.getElementById('todoList').addEventListener('click',clickItem);
atualizarTela();
