// 1. .forEach
// მასივი: ['ვაშლი', 'მსხალი', 'ატამი']
// მიზანი: forEach-ით გამოიტანე კონსოლში ტექსტი ასეთი ფორმატით: "0: ვაშლი", "1: მსხალი" და ა.შ.

const fruits = ['ვაშლი', 'მსხალი', 'ატამი'];

fruits.forEach((item, index) => {
    console.log(index + ': ' + item);
});


// 2. მასივი: [1, 2, 3, 4, 5, 6]
// მიზანი: forEach-ით შეამოწმე თითოეული რიცხვი. თუ ლუწია, კონსოლში დაწერე "ლუწია", თუ კენტია — "კენტია"

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num + ' - ლუწია');
    } else {
        console.log(num + ' - კენტია');
    }
});


// 3. .map
// მასივი: [100, 250, 50, 80] (ფასები ლარებში)მიზანი: map-ით შექმენი ახალი მასივი, სადაც თითოეულ ფასს დაკლებული ექნება 
// 10%.ფორმულა: price * 0.9.

const prices = [100, 250, 50, 80];

const discounted = prices.map(price => price * 0.9);

console.log(discounted);


// 4. .some
// მასივი: ['სახლი', 'გზა', 'ავტომობილი', 'ხე']
// მიზანი: შეამოწმე, არის თუ არა მასივში თუნდაც ერთი სიტყვა, რომლის სიგრძე 10 სიმბოლოზე მეტია.

const words = ['სახლი', 'გზა', 'ავტომობილი', 'ხე'];

const hasLongWord = words.some(word => word.length > 10);

console.log(hasLongWord);


// 5. .find
// მოცემულობა: გაქვს რიცხვების მასივი: [5, 12, 8, 130, 44].
// მიზანი: იპოვე ამ მასივში პირველივე რიცხვი, რომელიც მეტია 10-ზე.

const nums = [5, 12, 8, 130, 44];

const found = nums.find(num => num > 10);

console.log(found);


// 6. .findIndex
// მოცემულობა: გაქვს მასივი: ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი'].
// მიზანი: გაიგე, რა ინდექსზე იმყოფება სიტყვა 'ფორთოხალი'.

const fruits2 = ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი'];

const index = fruits2.findIndex(item => item === 'ფორთოხალი');

console.log(index);


// 7. .reduce
// მასივი: ['მე', 'მიყვარს', 'JavaScript']
// მიზანი: reduce-ით შეაერთე ეს სიტყვები ერთ გრძელ სტრინგად, მათ შორის ჰქონდეს გამოტოვება (space).
// მოსალოდნელი შედეგი: "მე მიყვარს JavaScript".

const aboutMe = ['მე', 'მიყვარს', 'JavaScript'];

const sentence = aboutMe.reduce((acc, curr) => acc + ' ' + curr);

console.log(sentence);