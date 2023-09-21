const btn = document.querySelector("#outer .game_btn")
const gbtns = document.querySelectorAll('#questions .game_btn') // returns a Nodelist
const text = document.querySelectorAll(".game_text2")
const outer = document.querySelector("#outer")
const ques = document.querySelector("#questions")
const par = document.querySelector('.game_text2')
const btn1 = document.querySelector('.a1')
const btn2 = document.querySelector('.a2')

const contents = {
    questions : ['Are you a cat or a dog person??', 'What do look for in a guy??' , 'Which one matters the most?' , 'kaely ki gore'],
    button1 : ['Cat' , 'Looks ' , 'Height' , 'Kaley'],
    button2 : ['Dog' , 'Personality' , 'Face' , 'Gore!']
}


btn.addEventListener('click' , ()=>{
    outer.remove();
    ques.style.display = "block";
    
})



let count = 0;

gbtns.forEach((gbtn) =>{    //to loop over every buttons 
    gbtn.addEventListener('click', (e)=>{

        if (count === 0 && e.target.classList.contains("a2")){
                // Set the location to the home page URL
                window.location.href = "https://www.lamadawa.com.np"; 
        }

        if (count < contents.questions.length) {
            par.innerText = contents.questions[count]; 
            btn1.innerText = contents.button1[count];
            btn2.innerText = contents.button2[count];
            count++;  
        } else {
            ques.innerHTML = "<p class='game_text2'>That's all!</p><div class='loader'></div><p class='loading'>Finding the man of ur dreams!!</p>";
            setTimeout(()=>{
                ques.innerHTML = "<img src='../Images/profile.jpg' width=200px class='guy' alt='' /> <p class='loading'>What u waiting for? get in touch!!!</p>  <a class='fb' target='_blank' href='https://www.facebook.com/profile.php?id=100007967177753'><img width='64' height='64' src='https://img.icons8.com/plasticine/100/facebook-new.png' alt='facebook-new'/></a>" ;       
            },5000)

            
            
        }
    })
})