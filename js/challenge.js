
document.addEventListener('DOMContentLoaded', function () {
    let counter = document.getElementById('counter')
    let heartButton = document.getElementById('heart')
    let clickCounter
    let likesList = document.querySelector('.likes')
    let pauseButton = document.getElementById('pause')
    let plusButton = document.getElementById('plus')
    let minusButton = document.getElementById('minus')
    let form = document.querySelector('form')

    counter.innerHTML = 0
        
    function timer() {
        
     intervalID =  setInterval(function () {
            // let num = parseInt(counter.innerHTML) + 1
            // counter.innerHTML = num

            heartButton.onclick = (function outer() {
                clickCounter = 0
                return function inner() {
                    clickCounter++;
                    console.log('ID:' + heartButton.id + 'Number of clicks: ' + clickCounter);
                };
            })();


            
            

            counter.innerHTML++
           
        }, 1000) 
    }

    
    timer()
    decrementCounter()
    incrementCounter()
    likeCounter()
    pauseGame()
    leaveComments()
    


function incrementCounter() {
    
    plusButton.addEventListener('click', function () {
        parseInt(counter.innerHTML++)
        
    })
}

function decrementCounter() {
    
    minusButton.addEventListener('click', function () {
        parseInt(counter.innerHTML--)
    })
}

function likeCounter() {
    heartButton.addEventListener('click', function name(event) {
        
        let newLike = document.createElement('li')
        
        newLike.innerHTML = `${counter.innerHTML} has been liked ${clickCounter+1} times!`
        likesList.append(newLike)
        // likesList.querySelectorAll('li').forEach( item => item.style.fontSize = '10px')

    })
    
}

function pauseGame() {
    pauseButton.addEventListener('click', function () {
        
        
        if (pauseButton.innerHTML == 'resume') {
            pauseButton.innerHTML = 'pause'
            plusButton.disabled = false
            minusButton.disabled = false
            heartButton.disabled = false
            timer()
            
        }
        else {
            clearInterval(intervalID)
        pauseButton.innerHTML = 'resume'
        plusButton.disabled = true
        minusButton.disabled = true
        heartButton.disabled = true
        }
        
    })

   
}

function leaveComments() {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        let newComment = document.createElement('p')
        newComment.textContent = e.target['comment-input'].value
        document.querySelector("#list").appendChild(newComment)
    })
    
    
}




})


