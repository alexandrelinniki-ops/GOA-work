async function testAPI() {

    const getResponse = await fetch(
        "https://api.restful-api.dev/objects"
    );
    const getData = await getResponse.json();
    console.log("GET:", getData);

    const postResponse = await fetch(
        "https://api.restful-api.dev/objects",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "My Laptop",
                data: {
                    year: 2026,
                    price: 1500
                }
            })
        }
    );

    const postData = await postResponse.json();
    console.log("POST:", postData);

    const putResponse = await fetch(
        "https://api.restful-api.dev/objects/7",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Updated Laptop",
                data: {
                    year: 2026,
                    price: 1800
                }
            })
        }
    );

    const putData = await putResponse.json();
    console.log("PUT:", putData);

    const patchResponse = await fetch(
        "https://api.restful-api.dev/objects/7",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            name: "Patched Laptop"
            })
        }
    );

  const patchData = await patchResponse.json();
  console.log("PATCH:", patchData);

  const deleteResponse = await fetch(
        "https://api.restful-api.dev/objects/7",
        {
            method: "DELETE"
        }
    );

    const deleteData = await deleteResponse.json();
    console.log("DELETE:", deleteData);
}

testAPI();