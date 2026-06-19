const successBox = document.createElement("div");

successBox.innerHTML = `
    <h3>✓ Message Sent!</h3>
    <p>Thanks for completing the form. We'll be in touch soon!</p>
`;

successBox.style.position = "fixed";
successBox.style.top = "20px";
successBox.style.left = "50%";
successBox.style.transform = "translateX(-50%)";
successBox.style.backgroundColor = "hsl(187, 24%, 22%)";
successBox.style.color = "white";
successBox.style.padding = "20px";
successBox.style.borderRadius = "10px";
successBox.style.width = "350px";
successBox.style.display = "none";

document.body.appendChild(successBox);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    successBox.style.display = "block";

    setTimeout(() => {
        successBox.style.display = "none";
    }, 4000);

    form.reset();
});
