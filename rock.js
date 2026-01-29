let playimg=document.getElementById('playimg');
let compimg=document.getElementById('comp');
let w=document.getElementById('w');
let l=document.getElementById('l');
let d=document.getElementById('d');
let box=document.querySelector('.box');
let winner=document.querySelector('#winner');
let pb=document.getElementById('pb');
let com=['rock.png','paper.png','scis.png'];
let win=0,lose=0,draw=0;
function r(msg){

    let ran=Math.floor(Math.random()*3);
    if(msg==='rock'){
          playimg.innerHTML=`<img src="rock.png"  width="300" height="250" alt="">` ;
        playimg.classList.add('anim');
        compimg.classList.add('anim');
         
        setTimeout(()=>{
          playimg.innerHTML=`<img src="rock.png"  width="300" height="250" alt="">` ;
          compimg.src=com[ran];
        if(ran===0){
            draw++;
            winner.innerHTML='DRAW!';
            pb.innerText='Play Again?';
            d.innerText=draw;
        }
         else if(ran===1){
            lose++;
            winner.innerHTML='Computer WON!';
            pb.innerText='Play Again?';
            l.innerText=lose;
        }
         else{
            win++;
            winner.innerHTML='You WON!';
            pb.innerText='Play Again?';
            w.innerText=win;
        }
          playimg.classList.remove('anim');
          compimg.classList.remove('anim');
        },800);
       
        
        
        
    }
    else if(msg==='paper'){
         playimg.innerHTML=`<img src="rock.png"  width="300" height="250" alt="">` ;
         playimg.classList.add('anim');
         compimg.classList.add('anim');
         setTimeout(()=>{
           playimg.innerHTML=`<img src="paper.png"  width="300" height="250" alt="">` ;
        compimg.src=com[ran];
             if(ran===0){
            win++;
            winner.innerHTML='You WON!';
            pb.innerText='Play Again?';
            d.innerText=draw;
        }
         else if(ran===1){
            draw++;
            winner.innerHTML='DRAW!';
            pb.innerText='Play Again?';
            d.innerText=draw;
        }
         else{
            lose++;
            winner.innerHTML='Computer WON!';
            pb.innerText='Play Again?';
            l.innerText=lose;
        }
        playimg.classList.remove('anim');
  compimg.classList.remove('anim');
         },800);
        
        
    }
    else {
          playimg.innerHTML=`<img src="rock.png"  width="300" height="250" alt="">` ;
          playimg.classList.add('anim');
            compimg.classList.add('anim');
        setTimeout(() => {
             playimg.innerHTML=`<img src="scis.png"  width="300" height="250" alt="">` ;
        compimg.src=com[ran];
             if(ran===0){
            lose++;
            winner.innerHTML='Computer WON!';
            pb.innerText='Play Again?';
            l.innerText=lose;
        }
         else if(ran===1){
            win++;
            winner.innerHTML='You WON!';
            pb.innerText='Play Again?';
            w.innerText=win;
        }
         else{
            draw++;
            winner.innerHTML='DRAW!';
            pb.innerText='Play Again?';
            d.innerText=draw;
        }
         playimg.classList.remove('anim');
           compimg.classList.remove('anim');
        }, 800);
        
    }
    
}

function op(){
    playimg.innerHTML=`                <button onclick="r('rock')">Rock</button>
                <button onclick="r('paper')">Paper</button>
                <button onclick="r('scis')">Scissor</button>`;
 winner.innerText='';
compimg.src=com[0];
pb.innerText='';

}