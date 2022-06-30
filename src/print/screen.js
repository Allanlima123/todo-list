const criarItem = (tarefa,status,indice) => {
    const item = document.createElement('label');
    item.classList.add('todo-item');
    // item.setAttribute("class", "todo-item");
    item.innerHTML = `
        <input type="checkbox"${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById("todoList").appendChild(item);
}

export { criarItem };
