const gameContent = [
    {
        question: "How many weeks are in a year?",
        allAnswers: ["365", "31", "100"],
        correctAnswer: "52",
    },
    {
        question: "How many continents are in the world?",
        allAnswers: ["Six", "Eight", "Eleven"],
        correctAnswer: "Seven",
    },
    {
        question: "What makes up a century?",
        allAnswers: ["10 years", "1000 years", "120 years"],
        correctAnswer: "100 years",
    },
    {
        question: "Who was the first president of the United States?",
        allAnswers: ["Larry Page", "Martin Luther", "Donald Trump"],
        correctAnswer: "George Washington",
    },
    {
        question: "Which is the fastest car?",
        allAnswers: ["Larmbogini", "Bugatti Cheron", "Bugatti Bolide"],
        correctAnswer: "Koenigsegg Jesko Absolut",
    },
    {
        question: "Which is the biggest country in the World?",
        allAnswers: ["USA", "Brazil", "China"],
        correctAnswer: "Russia",
    },
    {
        question: "Which is the Largest lake?",
        allAnswers: ["Lake Michigan", "Lake Victoria", "Lake Tanganyika"],
        correctAnswer: "Caspian sea",
    },
    {
        question: "Which is the largest ocean in the world?",
        allAnswers: ["Indian Ocean", "Atlantic Ocean", "Arctic"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "Which is the largest Mountain in the world?",
        allAnswers: ["Mount Kilimanjaro", "The Himalayas", "Atlas Mountains"],
        correctAnswer: "Mount Everest",
    },
    {
        question: "Which is the richest Country in the world?",
        allAnswers: ["United states", "England", "Switzerland"],
        correctAnswer: "Luxembourg",
    },
    {
        question: "Which animal is the biggest in the world?",
        allAnswers: ["Elephant", "Seal", "Komodo Dragon"],
        correctAnswer: "The blue whale",
    },
    {
        question: "Which country is the most beautiful Country?",
        allAnswers: ["New zealand", "Egypt", "China"],
        correctAnswer: "Switzerland",
    },
    {
        question: "What is UNICEF in full?",
        allAnswers: ["United Nations Confrence Federation", "United Nations Children's Federation", "United Nations Climate Fund"],
        correctAnswer: "United Nations Children's Fund",
    },
    {
        question: "Who owns Twitter?",
        allAnswers: ["Jeff Bezos", "Warren Buffet", "Taylor Swift"],
        correctAnswer: "Elon Musk",
    },
    {
        question: "How many people are on Earth?",
        allAnswers: ["2.6 million", "5 Billion", "15 billion"],
        correctAnswer: "8 Billion",
    },
]
let allContent = [...new Set(gameContent.map((items)=>{
    return items
}))]
let inc = 0
let gameAreaContainer = document.querySelector("main")
let congratsMessage = document.querySelector(".congratulation-popup")
let messageUserName = document.querySelector(".username")
let userNameScoreMes = document.querySelector(".user-score") 
let finishedGameAud = new Audio("game music/game-complete.mp3")

//game area content
gameAreaContainer.innerHTML = allContent.map((item)=>{
    let {question, allAnswers, correctAnswer} = item
    return(
        `<div class="questions">
        <h4 class="question">${question}</h4>
         <button class='answers wrong' onclick=wrongAnswer()>${allAnswers[0]}</button>
         <button class='answers wrong' onclick=wrongAnswer()>${allAnswers[1]}</button>
         <button class='answers wrong' onclick=wrongAnswer()>${allAnswers[2]}</button>
         <button class='answers correct'>${correctAnswer}</button>
        </div>`
    )
}).join('')

console.log(gameContent)

let answersEls = document.querySelectorAll(".answers")

for (let i = 0; i < answersEls.length; i++) {
   
    answersEls[i].style.order = Math.floor(Math.random()*4)
}

//correct and wrong answers and adding points

let correctEl = document.querySelectorAll(".correct")
let points = 0
let pointsEl = document.querySelector(".points")
let correctAnsAudio = new Audio("game music/correct.mp3")
let wrongAnsAudio = new Audio("game music/wrong-answer.mp3")
for (let i = 0; i < correctEl.length; i++) {
    correctEl[i].addEventListener("click", ()=>{
        correctEl[i].style.backgroundColor = "rgba(0, 255, 149, 0.466)"
        correctEl[i].style.border = '1px solid rgb(0, 255, 149)'
        correctEl[i].style.transitionDuration = "2s"
        points++
        pointsEl.textContent = points
        correctAnsAudio.play()
        document.querySelector(".next-que-btn").removeAttribute("disabled")
        inc++
        if (inc >= 15) {
            congratsMessage.classList.add("active") 
            messageUserName.textContent = "Congratulations " + playerNameInp.value
            userNameScoreMes.textContent = "You have scored " + points + " " + "out of " + gameContent.length  
            finishedGameAud.play()
         }
    })
    
}
let wrongEl = document.querySelectorAll(".wrong")
        
function wrongAnswer() {
        points -= 1
        pointsEl.textContent = points
        inc++
        if (inc >= 15) {
            congratsMessage.classList.add("active") 
            messageUserName.textContent = "Congratulations " + playerNameInp.value
            userNameScoreMes.textContent = "You have scored " + points + " " + "out of " + gameContent.length  
            finishedGameAud.play()
         }
         wrongAnsAudio.play()
    for (let i = 0; i < wrongEl.length; i++) {
        wrongEl[i].style.backgroundColor = "rgba(255, 0, 0, 0.466)"
        wrongEl[i].style.border = '1px solid rgba(255, 0, 0)'
        wrongEl[i].style.transitionDuration = "2s"
        setTimeout(()=>{
            wrongEl[i].style.backgroundColor = "white"
            wrongEl[i].style.border = 'none'
            wrongEl[i].style.transitionDuration = "2s"  
        }, 2000)
        setTimeout(()=>{
            document.querySelector(".next-que-btn").removeAttribute("disabled")
        }, 2500)
    }
}


//next question

function nextQuestion() {
    document.querySelector("body").classList.remove("stop-scroll")
    if (window.innerWidth > 900) {
        window.scrollBy(0, 900)
    }else{
        window.scrollBy(0, 500) 
    }
    console.log(window.scrollY)
    setTimeout(()=>{
        document.querySelector("body").classList.add("stop-scroll")
        document.querySelector(".next-que-btn").setAttribute("disabled", "disabled")
    }, 1000)
}


//Player profile saved on local storage

let submitPlayerDataBtn = document.getElementById("submit-data")
let playerNameInp = document.getElementById("player-name-inp")
let profPicBig = document.querySelector(".prof-pic-big")
let profilePicSelect = document.getElementById("profile-pic")
let playerImage = document.getElementById("player-img")
let playerName = document.getElementById("player-name")
const playerDetails = document.querySelector(".player-details")
const firstPopUpCaller = document.getElementById("call-first-popup")
let firstPopUp = document.querySelector(".first-popup")
let firstPopUpCloser = document.querySelector(".close-first-popup")

firstPopUpCaller.addEventListener("click", ()=>{
    firstPopUp.classList.add("active")
})

firstPopUpCloser.addEventListener("click", ()=>{
    firstPopUp.classList.remove("active")
})

profilePicSelect.addEventListener("change", ()=>{
    profPicBig.src = URL.createObjectURL(profilePicSelect.files[0])
})
if (playerDetails) {
    playerDetails.innerHTML = localStorage.getItem("playerDetails")
}
    const newPlayerName = document.createElement("h3")
    const newPlayerImg = document.createElement("img")
    
submitPlayerDataBtn.addEventListener("click", ()=>{
    newPlayerImg.style.width = "50px"
    newPlayerImg.style.height = "50px"
    newPlayerImg.style.borderRadius = "50%"
    newPlayerImg.style.objectFit = "cover"
    newPlayerImg.src = profPicBig.src
    newPlayerName.textContent = playerNameInp.value
    playerDetails.appendChild(newPlayerImg)
    playerDetails.appendChild(newPlayerName)
    localStorage.setItem("playerDetails", playerDetails.innerHTML)
    firstPopUp.classList.remove("active")
})
playerDetails.addEventListener("click", ()=>{
    localStorage.removeItem("playerDetails")
    playerDetails.innerHTML = ""
    firstPopUp.classList.add("active")
})

//Dark mode and light mode

let switchModesToggle = document.querySelector(".modes-checkbox")
switchModesToggle.checked = JSON.parse(localStorage.getItem("mode"))
let allQuestions = document.querySelectorAll(".questions")
let optionsEl = document.querySelector(".options")
let musicAndmodes = document.querySelector(".music-and-modes")

function modeChange() {
    if (switchModesToggle.checked) {
        for (let i = 0; i < allQuestions.length; i++) {
            allQuestions[i].style.background = "radial-gradient(#001107, #04060e)"
            allQuestions[i].style.color = "white"
            gameAreaContainer.style.background = "radial-gradient(#001107, #04060e)"
            playerDetails.style.background = "radial-gradient(#022150, #04020d)"
            playerDetails.style.color = "white"
            optionsEl.style.background = "radial-gradient(#022150, #04020d)"
            optionsEl.style.color = "white"
            musicAndmodes.style.background = "radial-gradient(#001107, #04060e)"
            musicAndmodes.style.color = "white"
        }
    }else{
        for (let i = 0; i < allQuestions.length; i++) {
            allQuestions[i].style.background = "rgb(0, 119, 255)"
            allQuestions[i].style.color = "black"
            gameAreaContainer.style.background = "rgb(0, 119, 255)"
            playerDetails.style.background = "aliceblue"
            playerDetails.style.color = "black"
            optionsEl.style.background = "aliceblue"
            optionsEl.style.color = "black"
            musicAndmodes.style.background = "aliceblue"
            musicAndmodes.style.color = "black"
        }
    }
}

modeChange()

switchModesToggle.addEventListener("input", ()=>{
    modeChange()
    modeStorage()
})

function modeStorage() {
    localStorage.setItem("mode", JSON.stringify(switchModesToggle.checked))
}

// let gameMusicList = [
//     "game music/study.mp3",
//     "game music/empty-mind.mp3",
//     "game music/autumn-sky-meditation.mp3",
//     "game music/little-break.mp3",
//     "game music/wish-you-were-here.mp3",
//     "game music/close-study-relax.mp3",
//     "game music/night-coffee-shop.mp3"
// ] 
// let musicToggle = document.querySelector("#music-checkbox")
// let musicToggleText = document.querySelector(".music-switch-text")
// musicToggle.checked = false
// let music = new Audio(gameMusicList[Math.floor(Math.random()*gameMusicList.length)])
// music.setAttribute("loop", "loop")
// music.volume = 0.5

//     function playMusic() {
//         if (musicToggle.checked) {
//             music.play()
//             musicToggleText.textContent = "Playing now"
//         } else {
//             music.pause()
//             musicToggleText.textContent = "Paused"
//         }
//     }
//     musicToggle.addEventListener("input", ()=>{
//         playMusic()
    
//     })    

// let musicChanger = document.querySelector(".music-changer")
// musicChanger.addEventListener("click", ()=>{
//     music.load()
//     music = new Audio(gameMusicList[Math.floor(Math.random()*gameMusicList.length)])
//     setTimeout(()=>{
//         music.play()
//     }, 1000)
// })


let restartBtn = document.querySelectorAll(".restart")

for (let i = 0; i < restartBtn.length; i++) {
    restartBtn[i].addEventListener("click", ()=>{
        congratsMessage.classList.remove("active")
        points = 0
        document.querySelector("body").classList.remove("stop-scroll")
        window.scrollBy(0, -window.scrollY)
        setTimeout(()=>{
            document.querySelector("body").classList.add("stop-scroll")
            window.location.reload(true)
        }, 1000)
    })
    
}

//OPTIONS TOGGLING

let optionsToggle = document.querySelectorAll(".options-toggle")

for (let i = 0; i < optionsToggle.length; i++) {
    optionsToggle[i].addEventListener("click", function () {
        optionsEl.classList.toggle("active")
    })
}