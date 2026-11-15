// 1. რა არის useState React-ში და რისთვის ვიყენებთ მას?

// useState არის React-ის Hook, 
// რომელიც საშუალებას გვაძლევს კომპონენტში შევინახოთ და შევცვალოთ მონაცემები


// 2. რა განსხვავებაა ჩვეულებრივ ცვლადსა და useState-ით შექმნილ ცვლადს შორის?

// ჩვეულებრივი ცვლადი ინახავს მონაცემს.
// useState ინახავს მონაცემს კომპონენტის მდგომარეობაში.


// 3. შექმენი Counter კომპონენტი, რომელიც useState-ის გამოყენებით შეინახავს რიცხვს. 
// დაამატე ორი ღილაკი: ერთი გაზრდის რიცხვს 1-ით, მეორე კი შეამცირებს 1-ით.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

// export default Counter;


// 4. შექმენი Toggle კომპონენტი, რომელიც useState-ის გამოყენებით შეინახავს true ან false მნიშვნელობას. 
// ღილაკზე დაჭერისას გამოაჩინე ან დამალე ტექსტი "Hello React".

import React, { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <h1>Hello React</h1>}
    </div>
  );
}

// export default Toggle;


// 5. შექმენი ColorChanger კომპონენტი, რომელიც useState-ის გამოყენებით შეინახავს ფერს. 
// დაამატე სამი ღილაკი: "Red", "Green" და "Blue". 
// თითოეულ ღილაკზე დაჭერისას შეცვალე div ელემენტის ფონის ფერი შესაბამისი ფერით.

import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "100px"
        }}
      ></div>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
}

// export default ColorChanger;