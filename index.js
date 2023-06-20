import getInfo from "./scripts/getInfo.js";

const btn = document.querySelector("#btn")
const timer = document.querySelector("#timer")

btn.addEventListener("click", async ()=>{
    console.log("test")
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.scripting
        .executeScript({
            target: { tabId: tab.id},
            function: getInfo
        })
        .then((injection) => {
            console.log(injection)
            console.log(injection[0].result)
            const x = injection[0].result
            timer.innerHTML = `${x[0]}:${x[1]}:${x[2]}`
        })
})



