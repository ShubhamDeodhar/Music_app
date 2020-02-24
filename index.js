window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll('.music');
    const pads = document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#f368e0",
        "#ff9f43",
        "#ee5253",
        "#0abde3",
        "#10ac84"
    ];

    //lets get going with music here
    pads.forEach((pad,index) =>{
      pad.addEventListener('click',function(){
          sounds[index].currentTime=0;
        sounds[index].play();

        createBubbles(index);
      });
    });
//create a function that makes bubbles
    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild('bubble');
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation= 'jump 1s ease';
        bubble.addEventListener("animationend",function(){
            visual.removeChild();
        });
    };


});
