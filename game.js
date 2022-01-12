let Game={
  button:{
    topLeft:document.getElementById("topLeft"),
    topRight:document.getElementById("topRight"),
    bottomLeft:document.getElementById("bottomLeft"),
    bottomRight:document.getElementById("bottomRight"),
    start:document.getElementById("start"),
    reset:document.getElementById("reset"),
    currentScore:document.getElementById("currentScore"),
    highScore:document.getElementById("highScore")
  },
  sequencing:{
    sequence:[],
    makeSequence:function(num){
      for (let i=0;i<num;i++){
        this.sequence.push(this.getRandomPanel());
      }
    },
    getRandomPanel:function(){
      let panels=["topLeft","topRight","bottomLeft","bottomRight"];
      let panel=panels[parseInt(Math.random()*panels.length)];
      console.log(panel);
      return(panel);
    }
  },
  flashing:{
    flash:function(panel){
      this.addFlash(panel);
      setTimeout(()=>{this.removeFlash(panel)},1000);
    },
    addFlash:function(panel){
      this.getPanel(panel).classList.add("active");
    },
    getPanel:function(panel){
      if (panel=="topLeft"){
        return(Game.button.topLeft);
      }
      if(panel=="topRight"){
        return(topRight);
      }
      if (panel=="bottomLeft"){
        return(bottomLeft);
      }
      if (panel=="bottomRight"){
        return(bottomRight);
      }
    },
    removeFlash:function(panel){
      this.getPanel(panel).classList.remove("active");
    },
    doFlashes:function(){
      for (let i=0;i<Game.sequencing.sequence.length;i++){
        setTimeout(()=>{this.flash(Game.sequencing.sequence[i])},2000*i);
        setTimeout(()=>{},1000);
      }
    }
  },
  playing:{
    answerCompleted:false,
    playerSequence:[],
    level:1,
    ready:false,
    failed:false,
    startGame:function(){
      if (this.failed!=true){
        Game.sequencing.makeSequence(4);
        Game.flashing.doFlashes();
        this.ready=true;
        if (this.ready==true){
          Game.button.topLeft.addEventListener("click",Game.answers.addTopLeft);
          Game.button.topRight.addEventListener("click",Game.answers.addTopRight);
          Game.button.bottomLeft.addEventListener("click",Game.answers.addBottomLeft);
          Game.button.bottomRight.addEventListener("click",Game.answers.addBottomRight);
        }
      }
    },
    checkAnswer:function(){
        if (arraysEqual(this.playerSequence,this.sequence)){
          alert("Sequence Correct!");
          this.level=this.level+1;
        }
        else{
          alert("Sequence Wrong!");
          this.failed=true;
        }
    },
    checkIfAnswerIsDone:function(){
      if(this.playerSequence.length==this.sequence.length){
        this.checkAnswer();
      }
    },
    arraysEqual:function(playerSequence,sequence){
      for(let i=0;i<sequence.length;i++){
        if (playerSequence[i]!=sequence[i]){
          return (false);
        }
      }
      return (true);
    }
  },
  answers:{
    addTopLeft:function(){
      this.playerSequence.push("topLeft");
      console.log("topLeft");
      checkIfAnswerIsDone();
    },
    addTopRight:function(){
      this.playerSequence.push("topRight");
      console.log("topRight");
      checkIfAnswerIsDone();
    },
    addBottomLeft:function(){
      this.playerSequence.push("bottomLeft");
      console.log("bottomLeft");
      checkIfAnswerIsDone();
    },
    addBottomRight:function(){
      this.playerSequence.push("bottomRight");
      console.log("bottomRight");
      checkIfAnswerIsDone();
    }
  }
}
Game.button.start.addEventListener("click",Game.playing.startGame);
