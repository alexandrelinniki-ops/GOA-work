// 0) ახსენით რას აკეთებს {} jsxში

// JSX-ში {} გამოიყენება JavaScript კოდის ჩასაწერად JSX-ის შიგნით.

// 1) გაიარეთ codecademy ამ ეტაპამდე

// image.png

// 2) გააკეთეთ Animals Fun Facts პროექტი codecademyში

import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';

const showBackground = true;

const background = (
    <img
        className="background"
        alt="ocean"
        src="/images/ocean.jpg"
    />
);

const images = [];

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className="animal"
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role="button"
            onClick={displayFact}
        />
    );
}

function displayFact(e) {
    const animal = e.target.alt;
    const facts = animals[animal].facts;

    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];

    document.getElementById('fact').innerHTML = fact;
}

const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>

        {showBackground && background}

        <div className="animals">
            {images}
        </div>

        <p id="fact"></p>
    </div>
);

root.render(animalFacts);