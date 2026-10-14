// 1. რა არის Props React-ში და რისთვის ვიყენებთ მას?

// Props არის მონაცემები, რომლებსაც ერთი კომპონენტიდან მეორეს გადავცემთ.


// 2. როგორ გადავცეთ მონაცემები ერთი კომპონენტიდან მეორეს Props-ის გამოყენებით?

// მონაცემს გადავცემთ კომპონენტის გამოძახების დროს ატრიბუტის სახით.


// 3. შექმენი Greeting კომპონენტი, რომელიც Props-ით მიიღებს name-ს და გამოაჩენს:
// <h1>Hello, Giorgi!</h1>

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function App() {
    return <Greeting name="Giorgi" />;
}

// export default App;


// 4. შექმენი User კომპონენტი, რომელიც Props-ით მიიღებს name-ს და age-ს. გამოაჩინე ორივე მონაცემი გვერდზე.

function User(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}

function App() {
    return <User name="Giorgi" age={18} />;
}

// export default App;


// 5. შექმენი Product კომპონენტი, რომელიც Props-ით მიიღებს title-ს და price-ს. App კომპონენტში გამოიძახე Product სამჯერ, სხვადასხვა პროდუქტის სახელითა და ფასით.

function Product(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Price: {props.price} GEL</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Product title="Laptop" price={2500} />
            <Product title="Phone" price={1200} />
            <Product title="Headphones" price={150} />
        </div>
    );
}

// export default App;