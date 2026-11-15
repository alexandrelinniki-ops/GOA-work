// 1. რა განსხვავებაა props-სა და props.children-ს შორის?

// Props გამოიყენება ერთი კომპონენტიდან მეორეში მონაცემების გადასაცემად.
// props.children არის ის შიგთავსი, რომელსაც კომპონენტის გახსნით და დახურვით ტეგებს შორის ვწერთ.


// 2. შესაძლებელია თუ არა Props-ით მიღებული მონაცემების პირდაპირ შეცვლა კომპონენტში? ახსენი რატომ.

// არა, Props-ის პირდაპირ შეცვლა არ შეიძლება, რადგან Props არის მხოლოდ წაკითხვადი


// 3. შექმენი Student კომპონენტი, რომელიც Props-ით მიიღებს name, age და grade მონაცემებს და გამოაჩენს მათ გვერდზე.

function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Grade: {props.grade}</p>
    </div>
  );
}

// export default Student;

<Student name="Giorgi" age={16} grade="A" />


// 4. შექმენი Button კომპონენტი, რომელიც Props-ით მიიღებს text-ს. App კომპონენტში გამოაჩინე სამი ღილაკი სხვადასხვა ტექსტით.

function Button(props) {
  return <button>{props.text}</button>;
}

// export default Button;


// 5. შექმენი Card კომპონენტი, რომელიც props.children-ის გამოყენებით გამოაჩენს მის შიგნით გადაცემულ ტექსტს.

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

// export default Card;