// 1) კომენტარებით ახსენით რა არის JSX და რატომ გვჭირდება React-ში

// JSX არის JavaScript-ის გაფართოება, რომელიც საშუალებას გვაძლევს
// JavaScript-ის კოდში HTML-ის მსგავსი სინტაქსი გამოვიყენოთ.


// 2) შექმენი ერთი Component, რომელიც აბრუნებს <h1>, <p> და <button> ელემენტებს ერთად

function App() {
    return (
        <div>
        <h1>გამარჯობა!</h1>
        <p>ეს არის ჩემი React Component.</p>
        <button>დააჭირე</button>
        </div>
    );
}

// export default App;


// 3) შექმენი ცალკე ორი Component და ორივე გამოიტანე App Component-ში

function Welcome() {
    return <h1>მოგესალმები!</h1>;
}

function Information() {
    return <p>ეს არის ჩემი React პროექტი.</p>;
}

function Whole() {
    return (
        <div>
        <Welcome />
        <Information />
        </div>
    );
}

// export default Whole;


// 4) კომენტარებით ახსენით რა განსხვავებაა ჩვეულებრივ JavaScript ფუნქციასა და React Component-ს შორის

// React Component
// არის ფუნქცია, რომლის სახელიც დიდი ასოთი იწყება
// და რომელიც ჩვეულებრივ JSX-ს აბრუნებს.
// მისი გამოყენებით შეგვიძლია შევქმნათ ეკრანის სხვადასხვა ნაწილი.

function Greeting() {
    return <h1>Hello!</h1>;
}


// 5) შექმენი Component, რომელშიც JavaScript-ის ცვლადს შექმნი და მის მნიშვნელობას JSX-ის გამოყენებით ეკრანზე გამოიტან

function App() {
    const name = "Giorgi";

    return (
        <div>
        <h1>გამარჯობა, {name}!</h1>
        </div>
    );
}

// export default App;