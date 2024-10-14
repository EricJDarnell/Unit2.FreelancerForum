class Freelancer{
    constructor(name, occupation, startingPrice){
        this.name = name;
        this.occupation = occupation;
        this.startingPrice = startingPrice;
    }
}
const freelancers=[
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 }
]

const freelancerPool = []
freelancerPool.push(new Freelancer(`Bob`, `Teacher`, 50));
freelancerPool.push(new Freelancer(`Carol`, `Programmer`, 70));
freelancerPool.push(new Freelancer(`Yoshi`, `Artist`, 60));
freelancerPool.push(new Freelancer(`Old Scratch`, `Fiddle Lessons`, 666))
freelancerPool.push(new Freelancer(`Gabor`, `Doctor`, 350));
freelancerPool.push(new Freelancer(`Tifa`, `Personal Trainer`, 70));
freelancerPool.push(new Freelancer(`George`, `Author`, 150));
freelancerPool.push(new Freelancer(`Tomie`, `Assistant`, 50));
freelancerPool.push(new Freelancer(`Coop`, `Coffee Enjoyer`, 99));
freelancerPool.push(new Freelancer(`Motoko`, `Hacker`, 500));
freelancerPool.push(new Freelancer(`Scott`, `Bass Player`, 8));
freelancerPool.push(new Freelancer(`Jill`, `Zombie Hunter`, 98));
freelancerPool.push(new Freelancer(`Snake`, `Hazard Mechanic`, 1300));
freelancerPool.push(new Freelancer(`Aerith`, `Flower Girl`, 777));
freelancerPool.push(new Freelancer(`Mario`, `Plumber`, 120));
freelancerPool.push(new Freelancer(`Zero`, `Maverick hunter`, 300));
freelancerPool.push(new Freelancer(`James`, `Amatuer Investigator`, 20));
freelancerPool.push(new Freelancer(`Nanaki`, `Good boy`, 0));
freelancerPool.push(new Freelancer(`Ned`, `Headless Winter Enthusiast`, 80));


console.log(freelancerPool);

let i = 0;

function updateAverage(){
let sum = freelancers.reduce((sum, free) => sum + free.startingPrice, 0);
    let average = sum / freelancers.length;
    average = Math.floor(average * 100)/100;
    const averageDisplay = document.querySelector("#averageStartingPrice");
    averageDisplay.innerText = average;
}

function render() {
    if(i == freelancerPool.length){
        clearInterval(addFreelancerIntervalId);
    }
    const table = document.querySelector(".table");
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");
    table.appendChild(freelancerDiv);
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${freelancerPool[i].name}`;
    const occupationSpan = document.createElement("span")
    occupationSpan.textContent = `${freelancerPool[i].occupation}`;
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `$${freelancerPool[i].startingPrice}`;
    freelancerDiv.appendChild(nameSpan);
    freelancerDiv.appendChild(occupationSpan);
    freelancerDiv.appendChild(priceSpan);
    
    freelancers.push(freelancerPool[i]);
    updateAverage();
}
const addFreelancerIntervalId = setInterval(() => {
    render();
    i++;
}, 3000);