let items = []
let totalCost = 0

const cost = {
    "Car Wash": 10,
    "Mow Lawn": 20,
    "Pull Weeds": 30,
}

const itemsList = document.getElementById("items")
//const itemsButton = document.querySelector(".button")

function render() {
    let html = ""
    
    for (let i = 0; i < items.length; i++) {
        let item =  items[i]

        html += `<li>
                    <div>
                        ${item}
                        <button id="remove-btn" onclick="removeItem('${item}')">Remove</button>
                    </div>
                    <div>
                        <p><span>$</span>${cost[item]}</p>
                    </div>   
                 </li>
                `
    }

    itemsList.innerHTML = html
}

function addItem(item) {
    if (!items.includes(item)) {
        items.push(item)
        totalCost += cost[item]
        render()
    }
}

function removeItem(item) {
    items.splice(items.indexOf(item), 1)
    render()
}
