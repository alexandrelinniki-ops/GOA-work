// 1) შექმენით საიტი რომელზეც იქნება ერთი პარაგრაფი და ერთი ღილაკი,
// დავალება არის შემდეგი: როდესაც ღილაკზე დავაწვებით უნდა შეიცვალოს პარაგრაფის ტექსტი და პარაგრაფის ფერი

const changeColor = () => {
    let paragraph = document.getElementById("text");

    paragraph.innerHTML = "ტექსტი შეიცვალა!";
    paragraph.style.color = "red";
}

// 2) შექმენით საიტი სადაც იქნება div რომლის ზომაა width:200px, height:200px და backgorund color არის წითელი, 
// ასევე უნდა იყოს ღილაკი, თქვენი დავალებაა როდესაც ამ ღილაკს დავაწვებით, 
// div გაიზარდოს სიგანეში და გახდეს 300 px და ასევე შეეცვალოს background-color და გახდეს მწვანე.

const changeBox = () => {
    let box = document.getElementById("box");

    box.style.width = "300px";
    box.style.backgroundColor = "green";
}


// 3) შექმენით counter საიტი, სადაც იქნება -1 ღილაკი, +1 ღილაკი და პარაგრაფი რომელიც იქნება 0,
// თქვენი დავალებაა, როდესაც +1 ღილაკს დავაწვებით პარაგრაფში მყოდი რიცხვი გაიზარდოს ერთით, ხოლო როცა -1 ს დავაჭერთ შემცირდეს 1 ით

let count = 0;

const increase = () => {
    count++;
    document.getElementById("count").innerHTML = count;
}

const decrease = () => {
    count--;
    document.getElementById("count").innerHTML = count;
}