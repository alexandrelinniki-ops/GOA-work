const urlInput = document.getElementById("urlInput");
const shortenBtn = document.getElementById("shortenBtn");
const result = document.getElementById("result");

shortenBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();

    if (url === "") {
        result.textContent = "Please enter a link!";
        return;
    }

    const randomCode = Math.random()
        .toString(36)
        .substring(2, 8);

    const shortUrl = `short.ly/${randomCode}`;

    result.innerHTML = `
        Your shortened link:
        <strong>${shortUrl}</strong>
    `;

    urlInput.value = "";
});