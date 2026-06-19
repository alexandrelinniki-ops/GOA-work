// 1) გააკეთეთ სარეგისტრაციო ფორმა მნიშნველობები შეინახეთ ობიექტში 
// და ფორმის დადასტურების შემდეგ დამოიტანეთ ინფორმცია localstorage ში

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
        name:form.name.value,
        email:form.email.value,
        password:form.password.value
    }

    localstorage.setItem("user",JSON.stringify(user))
})


// 2) კომენტარებით ახსენით რა არის json და რაშ გამოიყენება და ასევე ახსენით ქვემოთ მოცემული მეთოდები
// localStorage.setItem()
// localStorage.getItem()
// JSON.stringify() 
// JSON.parse()

// JSON არის მონაცემების შენახვის და გადაცემის ფორმატი. 
// localStorage.getItem() - გამოიყენება localStorage-დან მონაცემის წამოსაღებად.
// localStorage.setItem() - გამოიყენება localStorage-ში მონაცემის შესანახად.
// JSON.stringify() - JavaScript ობიექტს ან მასივს გარდაქმნის JSON სტრინგად (string).
// JSON.parse() - JSON სტრინგს ისევ JavaScript ობიექტად ან მასივად გარდაქმნის.