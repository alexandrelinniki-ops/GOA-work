// 1) მომხმარებელს შემოაყვანინეთ ინფორმაცია სახელი, გვარი, ემაილი, პაროლი, 
// შეამოწმეთ პაროლი 8 character ზე ნაკლები არ უნდა იყოს 
// შემდეგ ჩაამატეთ ინფორმაცია localstorage ში გააკეთეთ 
// ასევე შემოწმება თუ ემაილი ერთხელ არის უკვე localstorage ში მეორეჯერ აღარ ჩაემატოს

let firstName = prompt("შეიყვანე სახელი:");
let lastName = prompt("შეიყვანე გვარი:");
let email = prompt("შეიყვანე ემაილი:");
let password = prompt("შეიყვანე პაროლი:");

if (password.length < 8) {
    alert("პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს!");
} else {

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert("ეს ემაილი უკვე რეგისტრირებულია!");
    } else {

        let user = {
            firstName,
            lastName,
            email,
            password
        };

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("რეგისტრაცია წარმატებით დასრულდა!");
        console.log(users);
    }
}