// 1) მომხმარებელს შემოატანინეთ მისი ინფორმაცია სახელი, ემაილი, პაროლი 
// გაუკეთეთ შემოწმებაც ემაილს და პაროლს ჩაამატეთ მასივში და დააკონსოლოგეთ, 
// ასევე დაარენდერეთ თითოეული მომხმარებლის მონაცემი.

const form = document.querySelector("form");

const info = [];

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
        name,
        email,
        password
    }

    const exists = info.some(single => single.email === email)
    if(exists) {
        alert("Email already exists!")
    }else {
        return
    }

    if(password.length < 8) {
        alert("Password is too short!")
    }else {
        info.push
    }
    console.log(info)
})