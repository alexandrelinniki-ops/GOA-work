// 1) შენ აგრძელებ "Todo" (გასაკეთებელი საქმეების) აპლიკაციის განვითარებას. ამჯერად ახალი დავალების სერვერზე გასაგზავნად უნდა გამოიყენო თანამედროვე ასინქრონული მიდგომა — async/await და try...catch ბლოკი.
// შენი ამოცანაა, დაწერო JavaScript კოდი შემდეგი ინსტრუქციებით:
// ფუნქციის შექმნა:
// შექმენი ასინქრონული ფუნქცია სახელწოდებით addTodo (async).
// შეცდომების მართვის ბლოკი (try...catch):
// ფუნქციის შიგნით გახსენი try...catch კონსტრუქცია, რათა მოსალოდნელი შეცდომები უსაფრთხოდ დაიჭირო.
// მონაცემების მომზადება:
// try ბლოკის შიგნით, აიღე ინპუტში ჩაწერილი მნიშვნელობა (todoInput.value) და შეინახე ცვლადში.
// გადააქციე ეს მონაცემი JSON ტექსტად JSON.stringify()-ის გამოყენებით (გასაღები იყოს task).
// მოთხოვნის გაგზავნა (await fetch):
// შექმენი response ცვლადი და მიანიჭე მას await fetch()-ის შედეგი.
// პირველ არგუმენტად გადაეცი სერვერის მისამართი (url), ხოლო მეორე არგუმენტად — ობიექტი, სადაც მიუთითებ მეთოდს (method: 'POST') და სხეულს (body).
// პასუხის დამუშავება და შეცდომის შემოწმება:
// შეამოწმე, არის თუ არა response.ok ჭეშმარიტი.
// თუ კი, მიიღე და დააბრუნე სერვერის პასუხი await response.json()-ის გამოყენებით.
// თუ response.ok მცდარია, ისროლე ახალი შეცდომა (throw new Error(...)).
// catch ბლოკში კი დაბეჭდე ქსელის შეცდომის მესიჯი კონსოლში (console.log(...)).

const url = 'https://jsonplaceholder.typicode.com/posts';

async function addTodo() {
    try {
        const newTask = todoInput.value;

        const data = JSON.stringify({
            task: newTask
        });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        }

        throw new Error('Failed to add todo');

    } catch (error) {
        console.log(error.message);
    }
}


// 2) ახსენით რა არის GET და POST

// GET და POST არის HTTP მეთოდები, რომლებსაც ვიყენებთ სერვერთან მონაცემების გასაცვლელად.
// GET გამოიყენება სერვერიდან მონაცემების მისაღებად.
// POST გამოიყენება სერვერზე ახალი მონაცემების გასაგზავნად/შესაქმნელად.