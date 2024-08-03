// let api = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
let container = document.getElementById("container")

page = 1;

async function fetchdata(api) {
    res = await fetch(api)
    data = await res.json()
    console.log(data);
    displaydata(data)
}
fetchdata(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);

function displaydata(data) {
    data.forEach((ele) => {
        let card = document.createElement("div")

        let title = document.createElement("h3")
        title.textContent = ele.title

        let image = document.createElement("img")
        image.textContent = ele.url

        card.append(title, image)
        container.append(card)
    })
}

window.addEventListener("scroll", function () {
    let scrollheight = document.documentElement.scrollHeight;
    let clientheight = document.documentElement.clientHeight;
    let scrolltop = document.documentElement.scrollTop;

    console.log(scrollheight, clientheight, scrolltop);


    if (Math.ceil(scrollheight - clientheight) <= (Math.ceil(scrolltop))) {
        console.log("reach the bottom");
        page++
        fetchdata(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)

    }
})