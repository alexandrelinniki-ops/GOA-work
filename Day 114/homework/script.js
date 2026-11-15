// როგორ შევინახოთ სია (array) useState-ის გამოყენებით? შექმენი Fruits კომპონენტი, რომელიც შეინახავს ხილების სიას და გამოაჩენს მათ map() მეთოდის გამოყენებით.

import React, { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango"
  ]);

  return (
    <div>
      <h2>Fruits</h2>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}

// export default Fruits;


// შექმენი TodoList კომპონენტი, რომელშიც იქნება დავალებების სია. დაამატე ღილაკი Add Task, რომელიც სიას ახალ დავალებას დაამატებს useState-ის გამოყენებით.

import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Study React",
    "Learn JavaScript"
  ]);

  function addTask() {
    setTasks([...tasks, "New Task"]);
  }

  return (
    <div>
      <h2>Todo List</h2>

      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

// export default TodoList;


// შექმენი StudentList კომპონენტი, რომელიც შეინახავს სტუდენტების სახელების სიას. თითოეულ სტუდენტს გვერდით ჰქონდეს Delete ღილაკი, რომელზე დაჭერისას შესაბამისი სტუდენტი წაიშლება სიიდან.

import React, { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([
    "Giorgi",
    "Nika",
    "Alex",
    "Luka"
  ]);

  function deleteStudent(index) {
    setStudents(students.filter((student, i) => i !== index));
  }

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student, index) => (
        <p key={index}>
          {student}

          <button onClick={() => deleteStudent(index)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

// export default StudentList;


// შექმენი ShoppingList კომპონენტი, რომელიც შეინახავს პროდუქტების სიას. დაამატე input და Add ღილაკი, რომ მომხმარებელმა შეძლოს ახალი პროდუქტების დამატება. დამატების შემდეგ input უნდა გასუფთავდეს.

import React, { useState } from "react";

function ShoppingList() {
  const [products, setProducts] = useState(["Milk", "Bread"]);
  const [input, setInput] = useState("");

  function addProduct() {
    if (input.trim() !== "") {
      setProducts([...products, input]);
      setInput("");
    }
  }

  return (
    <div>
      <h2>Shopping List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter product"
      />

      <button onClick={addProduct}>Add</button>

      {products.map((product, index) => (
        <p key={index}>{product}</p>
      ))}
    </div>
  );
}

// export default ShoppingList;


// შექმენი CounterList კომპონენტი, რომელიც შეინახავს რიცხვების სიას. დაამატე ღილაკი Add Number, რომელიც სიაში მომდევნო რიცხვს დაამატებს. ასევე დაამატე ღილაკი Remove Last, რომელიც სიიდან ბოლო რიცხვს წაშლის.

import React, { useState } from "react";

function CounterList() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  function addNumber() {
    setNumbers([...numbers, numbers.length + 1]);
  }

  function removeLast() {
    setNumbers(numbers.slice(0, -1));
  }

  return (
    <div>
      <h2>Counter List</h2>

      {numbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}

      <button onClick={addNumber}>Add Number</button>

      <button onClick={removeLast}>Remove Last</button>
    </div>
  );
}

// export default CounterList;