// 1) ახსენით რა არის: Client, Server, HTTP, TCP, სტატუს კოდი 200 და 404, რა განსხვავებაა HTTP-სა და HTTPS-ს შორის?

// Client არის მოწყობილობა ან პროგრამა, რომელიც სერვერს უგზავნის მოთხოვნას.
// მაგალითად: ბრაუზერი (Chrome).

// 2. Server
// Server არის კომპიუტერი ან პროგრამა, რომელიც იღებს Client-ის მოთხოვნას,
// ამუშავებს მას და აბრუნებს პასუხს.

// 3. HTTP
// HTTP (Hypertext Transfer Protocol) არის პროტოკოლი,
// რომლის საშუალებითაც Client და Server ერთმანეთს ინფორმაციას გადასცემენ.

// 4. TCP
// TCP (Transmission Control Protocol) არის პროტოკოლი,
// რომელიც უზრუნველყოფს მონაცემების საიმედოდ გადაცემას ქსელში.

// 5. სტატუს კოდი 200
// 200 OK ნიშნავს, რომ მოთხოვნა წარმატებით შესრულდა.

// 6. სტატუს კოდი 404
// 404 Not Found ნიშნავს, რომ მოთხოვნილი გვერდი ან რესურსი ვერ მოიძებნა.

// 7. HTTP და HTTPS-ის განსხვავება
// HTTP მონაცემებს დაშიფვრის გარეშე გადასცემს.
// HTTPS კი იყენებს დაშიფვრას, რათა მონაცემები უფრო დაცული იყოს.
// HTTPS უსაფრთხოების მხრივ უკეთესია.


// 2) ნასწავლი მასალოთ ააგეთ საიტი თქვენს თავზე

const name = "Giorgi";
const profession = "Future Web Developer";
const hobbies = ["Programming", "Gaming", "Vibing"];
const skills = ["HTML", "CSS", "JavaScript"];
const app = document.getElementById("app");
const button = document.getElementById("contactBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = `Thank you for visiting my website!`;
});

// 3) CodeCademy: https://www.codecademy.com/courses/learn-intermediate-javascript/articles/http-requests წაიკითეთ ბოლომდე 

// image.png