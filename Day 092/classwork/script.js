// 1) ახსენით რაში გვეხმარება Error Handling-ი და დაწერეთ 1 მაგალითი მასზე

// Error Handling საშუალებას გვაძლევს შეცდომები გავაკონტროლოთ და პროგრამა უფრო სტაბილური გავხადოთ.

try {
let result = JSON.parse("ეს არ არის JSON");
console.log(result);
} catch (error) {
    console.log("მოხდა შეცდომა:", error);
}

// catch ამ შეცდომას იჭერს და პროგრამა არ წყდება.


// 2) შექმენი ასინქრონული ფუნქცია loadPlayerProfile().
// ფუნქციის შიგნით გახსენი try...catch ბლოკი.
// try-ს შიგნით await Promise.all()-ის გამოყენებით გააშვი სამივე ფუნქცია 
// (fetchPlayerStats(), fetchInventory(), fetchMatchHistory()) 
// ერთდროულად და შედეგი შეინახე ცვლადში.
// for ციკლის გამოყენებით (ან მასივის ინდექსებით) გამოიტანე სამივე მიღებული შედეგი კონსოლში.
// catch ბლოკში დაბეჭდე შეცდომის შეტყობინება (error.message ან error).
// ბოლოს გამოიძახე loadPlayerProfile().

async function loadPlayerProfile() {
    try {
        const result = await Promise.all((fetchPlayerStats(), fetchInventory(), fetchMatchHistory()));

        for(let i = 0; i < results.length; i++) { 
            console.log(results[i]); 
        }

    } catch(error) {
        console.log("შეცდომა:", error); 
    } 
} 

loadPlayerProfile();

// 3) დაწერე 3 ცალკეული ფუნქცია, რომლებიც აბრუნებენ ახალ Promise-ს და სიმულაციას უკეთებენ დროში გაწელილ პროცესებს (setTimeout-ის გამოყენებით):
// პირველი ფუნქცია: ვიდეოს ფაილის ატვირთვა. 
// უნდა ელოდებოდეს 2 წამს და resolve-ით აბრუნებდეს ტექსტს: "ვიდეო აიტვირთა".
// მეორე ფუნქცია: თამბნეილის (ყდის) შექმნა. 
// უნდა ელოდებოდეს 1 წამს და resolve-ით აბრუნებდეს ტექსტს: "თამბნეილი მზადაა".
// მესამე ფუნქცია: საავტორო უფლებების შემოწმება. 
// უნდა ელოდებოდეს 1.5 წამს და resolve-ით აბრუნებდეს ტექსტს: "საავტორო უფლებები სუფთაა".
// შექმენი მთავარი ფუნქცია, რომელმაც ეს 3 პროცესი უნდა მართოს:
// გამოცხადება: გამოიყენე async საკვანძო სიტყვა ფუნქციის შექმნისას.
// უსაფრთხოება: მთელი შიდა ლოგიკა მოათავსე try...catch ბლოკში.
// პარალელური გაშვება: try ბლოკის შიგნით გამოიყენე await Promise.all(), 
// რომ სამივე ფუნქცია ერთდროულად გაუშვა და მიღებული პასუხების მასივი შეინახო ცვლადში.
// შედეგის გამოტანა: იქვე, try-ს შიგნით, გადაუარე მიღებულ მასივს (ციკლით ან დესტრუქტურიზაციით) 
// და თითოეული შედეგი გამოიტანე კონსოლში. ბოლოს დაბეჭდე ტექსტი: "ვიდეო წარმატებით გამოქვეყნდა!".
// შეცდომის დაჭერა: catch ბლოკში დაბეჭდე შეცდომის ტექსტი (error).
// გამოძახება: ბოლოს გამოიძახე ეს ფუნქცია.
// სცენარი 1 (წარმატება): გაუშვი კოდი ისე, რომ სამივე ფუნქცია resolve-ს აბრუნებდეს. 
// დარწმუნდი, რომ ლოდინის დრო არის ზუსტად 2 წამი (ყველაზე ნელი დავალების დრო) 
// და ეკრანზე იბეჭდება სამივე შეტყობინება.
// სცენარი 2 (შეცდომა): შეცვალე მესამე ფუნქცია ისე, 
// რომ resolve-ის ნაცვლად დააბრუნოს reject("Copyright Strike!"). გაუშვი კოდი და შეამოწმე, 
// რომ Promise.all() ეგრევე შეწყვეტს მუშაობას, try ბლოკი დაიტოვება და ამოქმედდება catch ბლოკი.

function uploadVideo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Video is now uploaded");
        }, 2000)
    })
}

function createThumbnail() { 
    return new Promise((resolve) => { 
        setTimeout(() => { 
            resolve("Thumbnail is now created"); 
        }, 1000); 
    }); 
}

function checkCopyright() { 
    return new Promise((resolve) => { 
        setTimeout(() => { 
            resolve("Copyright is now checked"); 
        }, 1500); 
    }); 
}

async function publishVideo() { 
    try { 
        const results = await Promise.all([uploadVideo(), createThumbnail(), checkCopyright()]); 

        for(let i = 0; i < results.length; i++) { 
            console.log(results[i]); 
        } 
        
        console.log("ვიდეო წარმატებით გამოქვეყნდა!"); 
    
    } catch(error) { 
        console.log(error); 
    } 
}

publishVideo();