// 1) გააკეთეთ ორი ფაილი helper.js და script.js 
// helper.js ში შექმენით სხვადასხვა ფუნქციები და დააიმპორტეთ ისინი script.js ში და გატესტეთ მისი მუშაობა.

const sum = (n1,n2,n3) => {
    return n1 + n2 + n3
}

const multiply = (n1,n2,n3) => {
    return n1 * n2 * n3
}

module.exports = {
    sum,multiply
}