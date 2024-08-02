let url = `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10`
let container = document.getElementById("container")

async function fetchdata() {
    res = await fetch(url)
    data = await res.json()
    console.log(data);
    displaydata(data)
}
fetchdata();

function displaydata(data) {
    data.forEach((ele) => {
        let card = document.createElement("div")

        let title = document.createElement("h3")
        title.textContent = ele.Title

        let image = document.createElement("img")
        image.textContent = ele.url

        card.append(title, image)
        container.append(card)
    })
}