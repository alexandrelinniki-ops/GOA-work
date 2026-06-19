// 3) გააკეთეთ to do list რომელსაც ექნება თავისი ფუნქციონალი და localstorageში ჩამატება და ამოშლა, 
// ასევე რენდერინგიც

const form = document.querySelector("form");

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = form.tasks.value;

    tasks.push()
    console.log(tasks)
    renderTask()
    localStorage.setItem("tasks",JSON.stringify(tasks))
})

const ul = document.querySelector("ul");

const renderTask = () => {
    ul.innerHTML = "";
    tasks.forEach((item,index) => {
        ul.innerHTML += `<li onclick="Delete(${index})">${item}</li>`
    })    
}


const Delete = (index) => {
    tasks = tasks.filter((_,i) => i !== index );
    localStorage.setItem("tasks",JSON.stringify(tasks))
    renderTask()
}

renderTask()