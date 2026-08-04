// 1) 
async function getBlogPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const postData = await response.json();

        console.log("სტატიის სათაურია:", postData.title);
    } catch (error) {
        console.log("ბოდიში, სერვერზე შეფერხებაა:", error);
    }
}

getBlogPost();


// 2)
function downloadMap() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("რუკა"), 2000);
    });
}

function downloadCharacter() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("პერსონაჟი"), 1500);
    });
}

function downloadAudio() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ხმები"), 1000);
    });
}

async function startGame() {
    const mapPromise = downloadMap();
    const charPromise = downloadCharacter();
    const audioPromise = downloadAudio();

    console.log(`თამაში მზადაა! ჩაიტვირთება: ${await mapPromise}, ${await charPromise}, და ${await audioPromise}.`);
}

startGame();