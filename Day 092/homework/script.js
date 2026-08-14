// 0) CodeCademy:

// 1) შექმენი Promise (მაგალითად ფუნქცია fetchData), რომელიც setTimeout-ის გამოყენებით 2 წამში დააბრუნებს რაიმე ტექსტს (მაგ: "მონაცემები წარმატებით ჩაიტვირთა").
// შემდეგ დაწერე async ფუნქცია, რომელშიც await ოპერატორის გამოყენებით დაელოდები ამ Promise-ის შესრულებას და დაბრუნებულ შედეგს გამოიტან კონსოლში.

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("მონაცემები წარმატებით ჩაიტვირთა");
        }, 2000);
    });
}

async function loadData() {
    const result = await fetchData();

    console.log(result);
}

loadData();


// 2) დაწერე ორი ასინქრონული ოპერაცია.
// პირველმა ფუნქციამ (მაგ: getUser()) უნდა დააბრუნოს მომხმარებლის ობიექტი ან უბრალოდ ID (მაგ: { id: 5 }).
// მეორე ფუნქციამ (მაგ: getUserPosts(userId)) არგუმენტად უნდა მიიღოს პირველი ფუნქციიდან დაბრუნებული ID და დააბრუნოს ამ მომხმარებლის პოსტების მასივი (მაგ: ["პოსტი 1", "პოსტი 2"]).
// დაწერე მთავარი async ფუნქცია, სადაც ჯერ ამოიღებ მომხმარებელს, ხოლო შემდეგ მის ID-ს გადააწვდი მეორე ფუნქციას და ამოიღებ პოსტებს. ორივე შედეგი დაბეჭდე.

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 5 });
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["პოსტი 1", "პოსტი 2"]);
        }, 1500);
    });
}

async function getUserData() {
    const user = await getUser();

    console.log("მომხმარებელი:", user);

    const posts = await getUserPosts(user.id);

    console.log("პოსტები:", posts);
}

getUserData();


// 3) შექმენი Promise, რომელიც 50%-იანი ალბათობით ან დარეზოლვდება (წარმატებით შესრულდება), ან დარეჯექთდება (შეცდომას დააბრუნებს, მაგ: "სერვერთან კავშირი დაიკარგა").
// დაწერე async ფუნქცია ამ Promise-ის გამოსაძახებლად და სავალდებულოდ გამოიყენე try...catch ბლოკი. თუ ოპერაცია წარმატებით დასრულდა, try ბლოკში დაბეჭდე შედეგი, 
// ხოლო თუ შეცდომა დაფიქსირდა, catch ბლოკმა უნდა დაიჭიროს ეს შეცდომა და გამოიტანოს კონსოლში წითლად (console.error).

function serverRequest() {
    return new Promise((resolve, reject) => {
        const success = Math.random() < 0.5;

        setTimeout(() => {
            if (success) {
                resolve("ოპერაცია წარმატებით შესრულდა");
            } else {
                reject("სერვერთან კავშირი დაიკარგა");
            }
        }, 1000);
    });
}

async function checkServer() {
    try {
        const result = await serverRequest();

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

checkServer();


// 4) წარმოიდგინე, რომ იწერ ორ სხვადასხვა მონაცემს, რომლებიც ერთმანეთზე დამოკიდებული არ არის. შექმენი ორი ფუნქცია: getProducts() (ყოვნდება 2 წამი) და getCategories() (ყოვნდება 3 წამი).
// დაწერე async ფუნქცია, სადაც ამ ორ ოპერაციას გაუშვებ ერთდროულად (ისე, რომ მეორე არ ელოდებოდეს პირველის დასრულებას დაწყებამდე). მხოლოდ მათი გამოძახების შემდეგ გამოიყენე await ორივე ცვლადზე, რათა საბოლოოდ ორივე შედეგი ერთად დაბეჭდო.

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["ტელეფონი", "ლეპტოპი", "ყურსასმენი"]);
        }, 2000);
    });
}

function getCategories() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["ელექტრონიკა", "ტანსაცმელი", "წიგნები"]);
        }, 3000);
    });
}

async function getData() {
    const productsPromise = getProducts();
    const categoriesPromise = getCategories();

    const products = await productsPromise;
    const categories = await categoriesPromise;

    console.log("პროდუქტები:", products);
    console.log("კატეგორიები:", categories);
}

getData();


// 5) შექმენი სამი სხვადასხვა Promise, რომლებიც სხვადასხვა დროით ყოვნდება (მაგალითად: 1 წამი, 1.5 წამი და 2 წამი) და აბრუნებენ სხვადასხვა სტრიქონებს (მაგ: "A", "B", "C").
// დაწერე async ფუნქცია და გამოიყენე await Promise.all(), რათა სამივე Promise-ს დაელოდო პარალელურ რეჟიმში. საბოლოოდ დაბრუნებული შედეგების მასივი გამოიტანე კონსოლში.

function promiseA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("A");
        }, 1000);
    });
}

function promiseB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("B");
        }, 1500);
    });
}

function promiseC() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("C");
        }, 2000);
    });
}

async function getAllData() {
    const results = await Promise.all([
        promiseA(),
        promiseB(),
        promiseC()
    ]);

    console.log(results);
}

getAllData();