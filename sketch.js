var face_x = [] 
var face_y = []
var face_size = []
var face_num = 10
var song
var songIsplay=false //設定此變數為"假"(false)，收到按下滑鼠把變數改為真，音樂開始播放
var amp
var vol

function preload(){
  song = loadSound("Tsum Tsum .mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
 
  for(var i=0;i<face_num;i++){
    face_size[i] = random(100,300)  //臉的大小100~300
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }
}
function draw() {
  background("#CDC6AE");
  textSize(30)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
    push()  
      var f_s = face_size[j]
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
      //腳
      fill("#FEFAE0")
      noStroke()
      ellipse(-f_s/3.6,f_s/2.2,f_s/8) //左腳
      ellipse(f_s/3.6,f_s/2.2,f_s/8) //右腳
      //臉的部分
      fill(0)
      noStroke()
      ellipse(0,0,f_s) //臉
      //膚色部分
      noStroke()
      fill("#FFE8D6")
      ellipse(-f_s/10,-f_s/76,f_s/2,f_s/1.5) //左膚色臉
      ellipse(f_s/10,-f_s/76,f_s/2,f_s/1.5) //右膚色臉
      fill("#FFE8D6")
      ellipse(-f_s/160,f_s/4,f_s/1.2,f_s/2) //下膚色臉
      //耳朵部分
      fill(0)
      noStroke()
      ellipse(-f_s/1.8,-f_s/2,f_s/1.8) //左耳朵
      ellipse(f_s/1.8,-f_s/2,f_s/1.8) //右耳朵
      //鼻子部分
      stroke(0)
      fill(0)
      ellipse(f_s/90,f_s/4,f_s/6,f_s/10) //鼻子橢圓
      //腮紅部分
      noStroke()
      fill("#FFCDB2")
      ellipse(-f_s/4,f_s/5,f_s/6,f_s/10) //左腮紅
      ellipse(f_s/4,f_s/5,f_s/6,f_s/10) //右腮紅

      //左眼
      fill(0)
      stroke(0)
      ellipse(-f_s/12+map(mouseX,0,width,-f_s/100,f_s/40),-f_s/60+map(mouseY,0,height,-f_s/60,f_s/60),f_s/12,f_s/8)
      //右眼
      fill(0)
      ellipse(f_s/12+map(mouseX,0,width,-f_s/100,f_s/40),-f_s/60+map(mouseY,0,height,-f_s/60,f_s/60),f_s/12,f_s/8)
      

      if(!songIsplay){
        fill("#FFCDB2")
        noStroke()
        ellipse(-f_s/4,f_s/5,f_s/6,f_s/10) //左腮紅
        ellipse(f_s/4,f_s/5,f_s/6,f_s/10) //右腮紅 //沒有播放
      }
      else{
        if(!songIsplay){
          fill("#FFCDB2")
          noStroke()
          ellipse(-f_s/4,f_s/5,f_s/6,f_s/10) //左腮紅
          ellipse(f_s/4,f_s/5,f_s/6,f_s/10) //右腮紅
      }
        vol = amp.getLevel() //取得聲音值(值為0~1之間)
        // console.log(vol) //網頁中console數字
        fill("#E5989B")
        noStroke()
        ellipse(-f_s/4,f_s/5,f_s/6,f_s/10) //左腮紅
        ellipse(f_s/4,f_s/5,f_s/6,f_s/10) //右腮紅 
      }
    
    

      noFill()
    pop()

  }
}

  function mousePressed() //音樂播放或暫停
  {
    if(!songIsplay){
      song.play()
      songIsplay = true
      amp=new p5.Amplitude()

    }
    else{
      song.pause()
      songIsplay = false

    }
    
  }