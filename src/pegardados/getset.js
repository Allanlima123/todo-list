const getBanco = () =>{
    return JSON.parse(localStorage.getItem('todoList')) ?? [];
} 

const setBanco = banco => {
    localStorage.setItem('todoList', JSON.stringify(banco));
};

export { setBanco, getBanco };