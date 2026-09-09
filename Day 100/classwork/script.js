// 1) გააგზავნეთ POST მოთხოვნა "https://api.restful-api.dev/objects" ზე

async function createObject() {
    const url = "https://api.restful-api.dev/objects";

    const device = {
        name: "Apple MacBook Pro 16",
        data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }

    try {
        const response = await fetch("https://api.restful-api.dev/objects", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(device)
                
        });

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

createObject();


// 2) ახსენით რა არის silent bug ი. 
// ასვევე ჩამოთვალეთ ნასწავლი Erorr ები და რას ნიშნავს თითეული ახსენით

// Silent Bug არის პროგრამაში არსებული შეცდომა, 
// რომელიც პროგრამის მუშაობას არ აჩერებს და ხშირად არც რაიმე Error შეტყობინებას გვიჩვენებს

// 1. SyntaxError
// ხდება მაშინ, როდესაც კოდი JavaScript-ის სინტაქსის წესებს არღვევს.

// 2. ReferenceError
// ხდება მაშინ, როდესაც ისეთ ცვლადს ან ფუნქციას მივმართავთ, 
// რომელიც არ არსებობს ან ხელმისაწვდომი არ არის.

// 3. TypeError
// ხდება მაშინ, როდესაც მონაცემის ტიპთან შეუთავსებელ მოქმედებას ვასრულებთ.


// 3) ახსენით რა არის Runtime Error,
// ასევე როგორ შეგვიძლია შევქმნათ ხელოვნურად ერორი და დაწერეთ მაგალითი მასზე

// Runtime Error არის შეცდომა, რომელიც ჩნდება პროგრამის გაშვების დროს.
// JavaScript-ში შეგვიძლია საკუთარი შეცდომა ხელოვნურად შევქმნათ throw-ის გამოყენებით.

// მაგალითი:

function checkAge(age) { 
    if (age < 18) { 
        throw new Error("ასაკი უნდა იყოს 18 ან მეტი"); 
    } 
    console.log("წვდომა დაშვებულია"); 
} 

checkAge(15);