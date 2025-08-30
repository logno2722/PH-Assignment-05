const heartCounter = document.querySelector('.heart h6');
const heartIcons = document.querySelectorAll('.fa-regular.fa-heart');

let count = 0;

for (const icon of heartIcons) {
    icon.addEventListener('click', function () {
        if (icon.className === "fa-regular fa-heart") {
            icon.className = "fa-solid fa-heart";
            icon.style.color = "#FF0000";
            count++;
        } else {
            icon.className = "fa-regular fa-heart";
            icon.style.color = "";
            count--;
        }
        heartCounter.textContent = count;
    });
}



const coinCounter = document.querySelector('.coin h6');
const callHistoryBox = document.querySelector('.call_history_box');
const callButtons = document.querySelectorAll('.pair_btn button:last-child');


let coins = parseInt(coinCounter.textContent);

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM
    const am_Or_Pm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' hour should be '12'

    // Add a leading zero to minutes and seconds if they are less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${am_Or_Pm}`;
}

function addCallToHistory(serviceName, serviceNumber) {
    const historyEntry = document.createElement('div');
    historyEntry.className = "history_entry";
    historyEntry.style.fontFamily = "Hind Madurai, sans-serif";

    const infoContainer = document.createElement('div');
    infoContainer.className = "info_container";

    const nameElement = document.createElement('p');
    nameElement.textContent = serviceName;

    const numberElement = document.createElement('h6');
    numberElement.textContent = serviceNumber;

    const timeElement = document.createElement('p');
    timeElement.textContent = getCurrentTime();
    timeElement.className = "call_time";

    infoContainer.appendChild(nameElement);
    infoContainer.appendChild(numberElement);

    historyEntry.appendChild(infoContainer);
    historyEntry.appendChild(timeElement);

    callHistoryBox.appendChild(historyEntry);
}

for (const button of callButtons) {
    button.onclick = function (event) {
        const btn = event.target;
        const card = btn.parentElement.parentElement;
        const serviceName = card.querySelector('.number_title').textContent;
        const serviceNumber = card.querySelector('.number').textContent;

        if (coins >= 20) {
            coins -= 20;
            coinCounter.textContent = coins;
            alert(`Calling ${serviceName} at ${serviceNumber}.......`);
            addCallToHistory(serviceName, serviceNumber);
        } else {
            alert("Not enough coins to make a call. Please add more coins.");
        }
    }
}


const clearButton = document.querySelector('.clear_button');

clearButton.addEventListener('click', function () {
    const historyEntries = document.querySelectorAll('.history_entry');
    for (const entry of historyEntries) {
        entry.remove();
    }
});



const copyButtons = document.querySelectorAll('.pair_btn button:first-child');
const copyButtonInNav = document.querySelector('.copycount');

let copycount = 0;
for (const copyButton of copyButtons) {
    copyButton.onclick = function (event) {
        const btn = event.target;
        const card = btn.parentElement.parentElement;
        const serviceNumber = card.querySelector('.number').textContent;

        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`The number ${serviceNumber} has been copied!`);
                copycount++;
                copyButtonInNav.textContent = copycount;
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }
}