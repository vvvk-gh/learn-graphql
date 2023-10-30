async function fetchData() {
    const response = await fetch('http:localhost:9000/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: 'query { greeting }' //query to fetch from server
        }),
    });

    // destructing the data form reponse object
    const { data } = await response.json()
    return data.greeting;
}

fetchData().then((greeting) => {
    document.getElementById('greeting').textContent = greeting;
})