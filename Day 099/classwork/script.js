// 1) გააგზავნეთ POST მოთხოვნა "https://api.restful-api.dev/objects" ზე

async function postRequest() {
    const url = "https://api.restful-api.dev/objects"

    const device = {
        name: "Apple MacBook Pro 16",
        data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }

    try {
        const responsive = await fetch(url, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(device)
        })

        const data = await responsive.json()
        console.log(data)
    } catch(error) {
        console.log(error.message)
    }
    
}

postRequest()

// 2) გააგზავნეთ POST მოთხოვნა https://api.restful-api.dev/collections/${collectionName}/objects (აუცილებლად გამოიყენეთ ასინქრონული ფუნქცია)

async function createObject(collectionName) {
    const url = `https://api.restful-api.dev/collections/${collectionName}/objects`
    
    const device = {
        name: "My Laptop",
        data: {
            year: 2024,
            price: 1200
        }
    }

    try {
        const responsive = await fetch(url, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "x-api-key": "YOUR_API_KEY"
            },

            body: JSON.stringify(device)
        })

        const data = await responsive.json();
        console.log(data);
    } catch(error) {
        console.log(error.message)
    }
}

createObject("myCollection");