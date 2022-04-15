let items = []
let totalCost = 0
const itemsList = document.getElementById("items")
const costEl = document.getElementById("total-cost")
const resetBtn = document.getElementById("reset-btn")

const cost = {
    "Car Wash": 10,
    "Mow Lawn": 20,
    "Pull Weeds": 30,
}

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
    costEl.textContent = '$' + totalCost
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
    totalCost -= cost[item]
    render()
}

resetBtn.addEventListener("click", () => {
    totalCost = 0;
    items = []
    render()
})