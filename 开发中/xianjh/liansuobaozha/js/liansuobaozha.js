function main(){jsGame.initImage([{id:"a",src:"img/a.png"},{id:"btn_sound1",src:"img/yx.png"},{id:"btn_sound2",src:"img/yx2.png"},{id:"btn_pause",src:"img/zt.png"},{id:"pause",src:"img/zt3.png"},{id:"btn_resume",src:"img/jxyx.png"},{id:"btn_back",src:"img/jsyx.png"},{id:"clue1",src:"img/clue1.png"},{id:"clue2",src:"img/clue2.png"},{id:"bg",src:"img/bj1.png"},{id:"blood",src:"img/blood.png"},{id:"baozha2",src:"img/boom.png"},{id:"fs",src:"img/fs.png"},{id:"fs2",src:"img/fs2.png"},{id:"fs3",src:"img/fs3.png"},{id:"zl",src:"img/zl.png"},{id:"zd",src:"img/zd.png"},{id:"shiyan3",src:"img/I-1.png"},{id:"shiyan4",src:"img/shiyan4.png"},{id:"shibai",src:"img/gksb.png"},{id:"I-1",src:"img/I-1.png"},{id:"I-2",src:"img/I-2.png"},{id:"I-3",src:"img/I-3.png"},{id:"II-1",src:"img/II-1.png"},{id:"II-2",src:"img/II-2.png"},{id:"II-3",src:"img/II-3.png"},{id:"III-1",src:"img/III-1.png"},{id:"III-2",src:"img/III-2.png"},{id:"III-3",src:"img/III-3.png"},{id:"IV-2",src:"img/IV-2.png"},{id:"IV-3",src:"img/IV-3.png"},{id:"V-2",src:"img/V-2.png"},{id:"V-3",src:"img/V-3.png"},{id:"2I-1",src:"img/2I-1.png"},{id:"2I-2",src:"img/2I-2.png"},{id:"2I-3",src:"img/2I-3.png"},{id:"2II-1",src:"img/2II-1.png"},{id:"2II-2",src:"img/2II-2.png"},{id:"2II-3",src:"img/2II-3.png"},{id:"2III-1",src:"img/2III-1.png"},{id:"2III-2",src:"img/2III-2.png"},{id:"2III-3",src:"img/2III-3.png"},{id:"2IV-2",src:"img/2IV-2.png"},{id:"jrgk1",src:"img/jrgk1.png"},{id:"g",src:"img/g.png"},{id:"jrgk2",src:"img/jrgk2.png"},{id:"mbjs",src:"img/mbjs.png"},{id:"tzcg",src:"img/tzcg.png"},{id:"tzgz",src:"img/tzgz.png"},{id:"tzsb",src:"img/tzsb.png"},{id:"ts",src:"img/ts.png"},{id:"gksb",src:"img/gksb.png"},{id:"ksyx",src:"img/ksyx.png"},{id:"logo1",src:"img/logo4.jpg"},{id:"gksb",src:"img/gksb.png"},{id:"gksb",src:"img/gksb.png"},{id:"btn_sound3",src:"img/yx3.png"},{id:"btn_sound4",src:"img/yx4.png"}]);var b={},c={x:0,y:0};b.initTouch=function(){jsGame.touch.init(false)};b.initCanvas=function(){b.width=window.innerWidth<<0;b.height=window.innerHeight<<0;b.offset=0;if(b.height>b.width){if(b.height>b.width*690/480){b.scale=b.width/480;
b.offset=(b.height-b.width*690/480)/2<<0;b.height=b.width*690/480<<0}else{b.width=b.height*480/690<<0;b.scale=b.height/690}b.portrait=true}else{if(b.height>800||b.width>800){b.width=b.height*480/690<<0;b.scale=b.height/690;b.portrait=true}else{b.portrait=false}}if(b.height>b.width&&(navigator.userAgent.toLowerCase().indexOf("iphone")!=-1||navigator.userAgent.toLowerCase().indexOf("ipod")!=-1)&&!window.navigator.standalone){b.portrait=true;b.height=616;b.width=b.height*2/3<<0;b.scale=b.height/690;jsGame.canvas.screen.setWidth(b.width);jsGame.canvas.screen.setHeight(b.height)}else{jsGame.canvas.screen.setWidth(b.width);jsGame.canvas.screen.setHeight(window.innerHeight)}b.canvas=document.getElementById("jsGameScreen");b.ctx=b.canvas.getContext("2d");b.buffer=document.createElement("canvas");b.buffer.width=480;b.buffer.height=690;b.ctxBuf=b.buffer.getContext("2d");b.initTouch();if(b.offset){try{b.ctx.drawImage(jsGame.getImage("shiyan3"),0,0,b.width,113*b.scale<<0);b.ctx.drawImage(jsGame.getImage("shiyan4"),0,window.innerHeight-(125*b.scale<<0),b.width,200*b.scale<<0)}catch(a){}}};b.initCanvas();jsGame.initImageCallBack(function(f,d){if(f>=d){jsGame.gameFlow.run()}else{try{var a=f/d;a=a>1?1:a;b.ctx.fillStyle="#FFFFFF";b.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);b.ctx.drawImage(jsGame.getImage("a"),0,0,250,81,(b.width-250)/2,(b.height-81)/2,250,81);b.ctx.drawImage(jsGame.getImage("a"),2,86,246*a,10,(b.width-246)/2,(b.height-81)/2+51,246*a,10)}catch(e){}}});jsGame.pageLoad(function(g){function e(h){b.life=[3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1];b.EnemyNum=[5,6,7,8,9,9,9,10,12,11,11,11,11,11,11,11,11];b.SpriteEnemyNum=[0,1,1,1,2,2,3,3,3,4,4,4,4,4,4,4,4];b.jiangshi.length=0;for(var l=b.bianliang=0;l<b.EnemyNum[h];l++){var j=g.commandFuns.getRandom(10,450),k=g.commandFuns.getRandom(10,500),i=0;b.jiangshi.push(new a(j,k,i))}for(l=0;l<b.SpriteEnemyNum[h];l++){j=g.commandFuns.getRandom(10,450);k=g.commandFuns.getRandom(10,500);i=1;b.jiangshi.push(new f(j,k,i))}b.jiafenY=510}function a(h,j,i){this.data=spriteActionNameSpace.getSpriteAction();
this.data.x=h;this.data.y=j;this.jiangshitype=i;this.fangxiang=g.commandFuns.getRandom(0,7);this.data.setSprite(this.fangxiang);this.move=function(){if(this.fangxiang==0){this.data.x+=0;this.data.y-=10}else{if(this.fangxiang==1){this.data.x-=10;this.data.y-=10}else{if(this.fangxiang==2){this.data.x+=10;this.data.y-=10}else{if(this.fangxiang==3){this.data.x-=10;this.data.y-=0}else{if(this.fangxiang==4){this.data.x+=10;this.data.y-=0}else{if(this.fangxiang==5){this.data.x+=0;this.data.y+=10}else{if(this.fangxiang==6){this.data.x-=10;this.data.y+=10}else{if(this.fangxiang==7){this.data.x+=10;this.data.y+=10}}}}}}}}if(this.data.y>=540){this.data.setSprite(1);var k=g.commandFuns.getRandom(0,2);this.fangxiang=d[0][k]}else{if(this.data.y<=50){this.data.setSprite(7);k=g.commandFuns.getRandom(0,2);this.fangxiang=d[1][k]}else{if(this.data.x<=15){this.data.setSprite(4);k=g.commandFuns.getRandom(0,2);this.fangxiang=d[3][k]}else{if(this.data.x>=475){this.data.setSprite(3);k=g.commandFuns.getRandom(0,2);this.fangxiang=d[2][k]}}}}};this.isAttack=function(o,n,k,m){if(this.data.y+this.getBodyRect()[1]>=n+m||n>=this.data.y+this.getBodyRect()[1]+this.getBodyRect()[3]||this.data.x+this.getBodyRect()[0]>=o+k||o>=this.data.x+this.getBodyRect()[0]+this.getBodyRect()[2]){return false}return true};this.getBodyRect=function(){return this.data.getBodyRect()};this.draw=function(){this.data.render(true,b.ctxBuf);this.data.getSprite().nextFrame()}}function f(h,j,i){this.data=spriteActionBigNameSpace.getSpriteActionBig();this.data.x=h;this.data.y=j;this.jiangshitype=i;this.fangxiang=g.commandFuns.getRandom(0,7);this.data.setSprite(this.fangxiang);this.move=function(){if(this.fangxiang==0){this.data.x+=0;this.data.y-=10}else{if(this.fangxiang==1){this.data.x-=10;this.data.y-=10}else{if(this.fangxiang==2){this.data.x+=10;this.data.y-=10}else{if(this.fangxiang==3){this.data.x-=10;this.data.y-=0}else{if(this.fangxiang==4){this.data.x+=10;this.data.y-=0}else{if(this.fangxiang==5){this.data.x+=0;this.data.y+=10}else{if(this.fangxiang==6){this.data.x-=10;
this.data.y+=10}else{if(this.fangxiang==7){this.data.x+=10;this.data.y+=10}}}}}}}}if(this.data.y>=540){this.data.setSprite(1);var k=g.commandFuns.getRandom(0,2);this.fangxiang=d[0][k]}else{if(this.data.y<=50){this.data.setSprite(7);k=g.commandFuns.getRandom(0,2);this.fangxiang=d[1][k]}else{if(this.data.x<=15){this.data.setSprite(4);k=g.commandFuns.getRandom(0,2);this.fangxiang=d[3][k]}else{if(this.data.x>=475){this.data.setSprite(3);k=g.commandFuns.getRandom(0,2);this.fangxiang=d[2][k]}}}}};this.isAttack=function(o,n,k,m){if(this.data.y+this.getBodyRect()[1]>=n+m||n>=this.data.y+this.getBodyRect()[1]+this.getBodyRect()[3]||this.data.x+this.getBodyRect()[0]>=o+k||o>=this.data.x+this.getBodyRect()[0]+this.getBodyRect()[2]){return false}return true};this.getBodyRect=function(){return this.data.getBodyRect()};this.draw=function(){this.data.render(true,b.ctxBuf);this.data.getSprite().nextFrame()}}g.setRunFrequency(50);b.showClue=function(){b.ctx.fillStyle="white";b.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);b.ctx.drawImage(g.getImage("clue2"),(window.innerWidth-122)/2,(window.innerHeight-145)/2)};b.initMusic=function(){for(var h=0;h<1;h++){b.music[h]=document.createElement("audio");var i="";switch(h){case 0:i="sound/meishi.mp3"}b.music[h].setAttribute("src",i);b.music[h].setAttribute("preload",true);b.music[h].load()}b.music[0].setAttribute("autoplay",true);b.music[0].setAttribute("loop",true);b.music[0].addEventListener("canplaythrough",function(){b.sound?b.music[0].play():b.music[0].pause()},true)};b.musicControl=function(){b.sound?b.music[0].play():b.music[0].pause()};b.init=function(){b.scoreArray=[];b.life=[];b.EnemyNum=[];b.WinNum=[];b.jiangshi=[];b.baozha=[];b.zuobiao=[];b.dieJS=0;b.bianliang=0;b.level=-1;b.mission=1;b.fangxiang=-1;b.LOCK=true;b.NULL=0;b.jiafenY=510;b.jiafenlock=true;b.shenglibianliang=true;b.score=0;b.jishu=0;b.nowLevelScore=0;c.x=0;c.y=0;b.pos={};b.WinNum=[2,5,6,7,9,8,9,10,11,12,12,12,12,12,12,12,12];b.timer=20;b.second=0;b.fps=0;b.t=(new Date).getTime();b.tmp123=0;b.over=false;b.paused=false;
b.pauseTimer=0;b.resumeTimer=0;b.ppArr=[];b.flashTimer=0;b.flashPos=0;b.logoPosY=0;b.flashV=0;b.logoInTimer=10;b.logoOutTimer=0;b.helpIndex=0};b.portrait=true;b.initCanvas();b.init();b.music=[];b.btns={};b.id=0;b.ppBuffer=[];b.sound=true;b.initMusic();if(b.offset){b.ctx.drawImage(jsGame.getImage("shiyan3"),0,0,b.width,113*b.scale<<0);b.ctx.drawImage(jsGame.getImage("shiyan4"),0,window.innerHeight-(125*b.scale<<0),b.width,200*b.scale<<0)}var d=[[1,0,2],[5,6,7],[1,3,6],[2,4,7]];b.drawNum=function(t,s,q,r,o,k){if(t<=0){b.ctxBuf.drawImage(r,0,0,o,k,s,q,o,k)}else{var m=t/10<<0,i=0;t%=10;for(var h=[];m||t;){h[i++]=t;t=m%10;m=m/10<<0}t=h.reverse();m=t.length;for(i=0;i<m;i++){b.ctxBuf.drawImage(r,o*t[i],0,o,k,s+o*i,q,o,k)}}};b.drawbaozha=function(){b.baozhaArea();for(var h=0;h<b.baozha.length;h++){if(b.baozha[h].jiangshiclass==0){b.baozha[h].number++;if(b.baozha[h].number<2){b.baozha[h].tem=0;b.baozha[h].fanweiX=53;b.baozha[h].fanweiY=59}else{if(b.baozha[h].number>=2&&b.baozha[h].number<4){b.baozha[h].tem=1;b.baozha[h].fanweiX=73;b.baozha[h].fanweiY=63}else{if(b.baozha[h].number>=4&&b.baozha[h].number<6){b.baozha[h].tem=2;b.baozha[h].fanweiX=100;b.baozha[h].fanweiY=79}else{if(b.baozha[h].number>=6&&b.baozha[h].number<8){b.baozha[h].tem=3;b.baozha[h].fanweiX=115;b.baozha[h].fanweiY=97}else{if(b.baozha[h].number>12){b.baozha.splice(h,1);h--;continue}}}}}if(b.baozha[h].type==1){b.ctxBuf.drawImage(g.getImage("blood"),b.baozha[h].tem*120,0,120,120,b.baozha[h].x-60,b.baozha[h].y-60,120,120)}else{b.baozha[h].type==2&&b.ctxBuf.drawImage(g.getImage("baozha2"),b.baozha[h].tem*120,0,120,120,b.baozha[h].x-60,b.baozha[h].y-60,120,120)}}else{if(b.baozha[h].jiangshiclass==1){b.baozha[h].number++;if(b.baozha[h].number<2){b.baozha[h].tem=0;b.baozha[h].fanweiX=53;b.baozha[h].fanweiY=59}else{if(b.baozha[h].number>=2&&b.baozha[h].number<4){b.baozha[h].tem=1;b.baozha[h].fanweiX=73;b.baozha[h].fanweiY=63}else{if(b.baozha[h].number>=4&&b.baozha[h].number<6){b.baozha[h].tem=2;b.baozha[h].fanweiX=100;b.baozha[h].fanweiY=79}else{if(b.baozha[h].number>=6&&b.baozha[h].number<8){b.baozha[h].tem=3;
b.baozha[h].fanweiX=115;b.baozha[h].fanweiY=97}else{if(b.baozha[h].number>=8&&b.baozha[h].number<10){b.baozha[h].tem=4;b.baozha[h].fanweiX=120;b.baozha[h].fanweiY=120}else{if(b.baozha[h].number>20){b.baozha.splice(h,1);h--;continue}}}}}}if(b.baozha[h].type==1){b.ctxBuf.drawImage(g.getImage("blood"),b.baozha[h].tem*120,0,120,120,b.baozha[h].x-60,b.baozha[h].y-60,120,120)}else{b.baozha[h].type==2&&b.ctxBuf.drawImage(g.getImage("baozha2"),b.baozha[h].tem*120,0,120,120,b.baozha[h].x-60,b.baozha[h].y-60,120,120)}}}}};b.refresh=function(){if(b.paused||b.over){if(b.pauseTimer>1){b.pauseTimer--}else{if(b.pauseTimer==1){b.ctxBuf.drawImage(g.getImage("pause"),80,159);b.showPausePage()}}if(b.resumeTimer>1){b.pauseTimer=0;b.resumeTimer--;b.refreshBuffer()}else{if(b.resumeTimer==1){b.resumeTimer=0;b.paused=false;b.over&&b.init();b.over=false}}}else{b.refreshBuffer()}b.ctx.drawImage(b.buffer,0,b.offset,b.width,b.height)};b.touchArea=function(){for(var h=0;h<b.jiangshi.length;h++){if(b.jiangshi[h].jiangshitype==0){if(b.jiangshi[h].isAttack(c.x,c.y,1,1)){b.baozha.push({x:c.x,y:c.y,number:0,fanweiX:0,fanweiY:0,type:1,tem:0,jiangshiclass:0});b.jiangshi.splice(h,1);b.bianliang+=1;b.score+=10;return}}else{if(b.jiangshi[h].isAttack(c.x,c.y,1,1)){b.baozha.push({x:c.x,y:c.y,number:0,fanweiX:0,fanweiY:0,type:1,tem:0,jiangshiclass:1});b.jiangshi.splice(h,1);b.bianliang+=1;b.score+=10;return}}}b.baozha.push({x:c.x,y:c.y,number:0,fanweiX:0,fanweiY:0,type:2,tem:0,jiangshiclass:0})};b.baozhaArea=function(){for(var h=0,j=0;j<b.jiangshi.length;j++){for(var i=0;i<b.baozha.length;i++){if(b.jiangshi[j].jiangshitype==0){if(b.jiangshi[j].isAttack(b.baozha[i].x-50,b.baozha[i].y-50,b.baozha[i].fanweiX,b.baozha[i].fanweiY)){b.baozha.push({x:b.jiangshi[j].data.x,y:b.jiangshi[j].data.y,number:0,fanweiX:0,fanweiY:0,type:1,tem:0,jiangshiclass:0});b.jiangshi.splice(j,1);j--;b.bianliang+=1;h+=1;b.score+=10;break}}else{if(b.jiangshi[j].isAttack(b.baozha[i].x-50,b.baozha[i].y-50,b.baozha[i].fanweiX,b.baozha[i].fanweiY)){b.baozha.push({x:b.jiangshi[j].data.x,y:b.jiangshi[j].data.y,number:0,fanweiX:0,fanweiY:0,type:1,tem:0,jiangshiclass:1});
b.jiangshi.splice(j,1);j--;b.bianliang+=1;h+=1;b.score+=10;break}}}}h=b.bianliang;if(h>=b.WinNum[b.level]&&b.life[b.level]>=0&&b.baozha.length==0){b.shenglibianliang=true;if(b.life[b.level]>0){b.jiafenlock=false;if(b.jiafenlock==false){b.jiafenY--;for(h=0;h<b.life[b.level];h++){b.ctxBuf.drawImage(g.getImage("fs2"),30+60*h,b.jiafenY)}if(b.jiafenY<=490){b.jiafenY=510;b.jiafenlock=true}}}if(b.life[b.level]==0||b.jiafenlock==true){b.state=4;b.score+=b.life[b.level]*100;b.shenglibianliang==true&&b.scoreArray.push(b.score);b.paused=true;if(b.level>10){b.level=11}b.jiafenY=510}}else{b.shenglibianliang=false;if(b.life[b.level]<=0&&b.baozha.length==0&&h<b.WinNum[b.level]){b.state=4;b.paused=true;b.jiafenY=510;b.bianliang=0;if(!(b.level<=8)){b.score=b.scoreArray[8];b.level=10}e(b.level)}}};b.drawBJ=function(h){if(h>13){h=13}switch(h){case 0:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);break;case 1:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);break;case 2:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("II-2"),0,0);break;case 3:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("II-2"),0,0);break;case 4:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("III-2"),0,0);break;case 5:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("III-2"),0,0);break;case 6:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("IV-2"),0,0);break;case 7:b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("IV-2"),0,0);break;case 8:b.ctxBuf.fillStyle="#396a8d";
b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("V-2"),0,0);break;case 9:b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2I-2"),0,0);break;case 10:b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2II-2"),0,0);break;case 11:b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2III-2"),0,0);break;case 12:b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2IV-2"),0,0);break;case 13:b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2IV-2"),0,0)}};b.drawZL=function(h){if(h>13){h=13}switch(h){case 0:b.ctxBuf.drawImage(g.getImage("I-3"),0,490);break;case 1:b.ctxBuf.drawImage(g.getImage("I-3"),0,490);break;case 2:b.ctxBuf.drawImage(g.getImage("II-3"),0,490);break;case 3:b.ctxBuf.drawImage(g.getImage("II-3"),0,490);break;case 4:b.ctxBuf.drawImage(g.getImage("III-3"),0,490);break;case 5:b.ctxBuf.drawImage(g.getImage("III-3"),0,490);break;case 6:b.ctxBuf.drawImage(g.getImage("IV-3"),0,490);break;case 7:b.ctxBuf.drawImage(g.getImage("IV-3"),0,490);break;case 8:b.ctxBuf.drawImage(g.getImage("V-3"),0,490);break;case 9:b.ctxBuf.drawImage(g.getImage("2I-3"),0,490);break;case 10:b.ctxBuf.drawImage(g.getImage("2II-3"),0,490);break;case 11:b.ctxBuf.drawImage(g.getImage("2III-3"),0,490);break;case 12:b.ctxBuf.drawImage(g.getImage("2III-3"),0,490);break;case 13:b.ctxBuf.drawImage(g.getImage("2III-3"),0,490)}b.ctxBuf.drawImage(g.getImage("mbjs"),200,540);b.drawNum(b.bianliang,213,560,g.getImage("fs3"),13,18);b.ctxBuf.drawImage(g.getImage("g"),238,560);b.drawNum(b.WinNum[h],255,560,g.getImage("fs3"),13,18)};b.refreshBuffer=function(){b.drawBJ(b.level);for(var h=0;h<b.jiangshi.length;h++){b.jiangshi[h].move();b.jiangshi[h].draw()}b.drawbaozha();b.drawZL(b.level);for(h=0;h<b.life[b.level];h++){b.ctxBuf.drawImage(g.getImage("zd"),30+60*h,545)}b.drawNum(b.score,80,625,g.getImage("fs"),23,37);
b.showGamePage()};b.drawBtns=function(h){b.ctxBuf.drawImage(h.img,h.pressed*h.w,0,h.w,h.h,h.x-h.w/2+0.5<<0,h.y-h.h/2+0.5<<0,h.w,h.h)};b.createClueDialog=function(){if(!b.btns.btn_clue1){b.btns.btn_clue1={img:g.getImage("clue1"),x:157,y:615,w:156,h:63}}};b.delClueDialog=function(){if(b.btns.btn_clue1){b.btns.btn_clue1=null}};b.showClueDialog=function(){b.btns.btn_clue1&&b.ctxBuf.drawImage(b.btns.btn_clue1.img,157,615)};b.createLogoPage=function(){b.paused=true;if(!(b.btns.btn_start||b.btns.btn_exit)){b.btns.btn_sound1={img:g.getImage("btn_sound4"),x:445,y:35,w:63,h:62,pressed:0};b.btns.btn_sound1.img=b.sound?g.getImage("btn_sound4"):g.getImage("btn_sound3");if((navigator.userAgent.toLowerCase().indexOf("iphone")!=-1||navigator.userAgent.toLowerCase().indexOf("ipod")!=-1)&&!window.navigator.standalone){b.createClueDialog()}}};b.delLogoPage=function(){if(b.btns.btn_sound1){b.btns.btn_sound1=null}};b.showLogoPage=function(){if(b.logoOutTimer>1){b.logoOutTimer--;b.showHelpPage()}else{if(b.logoOutTimer==1){b.delLogoPage();b.state=1;return}}b.ctxBuf.drawImage(g.getImage("logo1"),0,0-b.logoPosY);b.btns.btn_sound1.y-=b.logoPosY;b.drawBtns(b.btns.btn_sound1);b.showClueDialog();b.ctx.drawImage(b.buffer,0,b.offset,b.width,b.height)};b.showHelpPage=function(){b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("I-3"),0,490);b.ctxBuf.drawImage(g.getImage("ts"),80,108);b.ctx.drawImage(b.buffer,0,b.offset,b.width,b.height)};b.showTishiPage=function(){if(b.level<=8){if(b.shenglibianliang==true){if(b.level==-1){b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("jrgk1"),95,10);b.drawNum(b.WinNum[b.level+1],250,180,g.getImage("fs3"),13,18)}else{b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("jrgk2"),95,90);b.drawNum(b.bianliang,250,190,g.getImage("fs3"),13,18);b.ctxBuf.drawImage(g.getImage("g"),280,190);
b.drawNum(b.WinNum[b.level],310,190,g.getImage("fs3"),13,18);b.drawNum(b.score,190,240,g.getImage("fs3"),13,18)}}else{b.ctxBuf.fillStyle="#396a8d";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("I-2"),0,0);b.ctxBuf.drawImage(g.getImage("shibai"),95,28);b.ctxBuf.drawImage(g.getImage("I-3"),0,490);b.drawNum(b.score,260,300,g.getImage("fs3"),13,18)}}else{if(b.shenglibianliang==true){if(b.level==9){b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2I-2"),0,0);b.ctxBuf.drawImage(g.getImage("2I-3"),0,490);b.ctxBuf.drawImage(g.getImage("tzgz"),80,90);if(b.pos.x>270&&b.pos.x<360&&b.pos.y>410&&b.pos.y<445){b.level+=1;b.mission+=1;console.log(b.level);e(b.level);b.bianliang=0;b.state=2;b.paused=false}}else{if(b.level>=10){b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2I-2"),0,0);b.ctxBuf.drawImage(g.getImage("2I-3"),0,490);b.ctxBuf.drawImage(g.getImage("tzcg"),80,90);b.drawNum(b.score,250,275,g.getImage("fs3"),13,18)}}}else{if(b.shenglibianliang==false){b.ctxBuf.fillStyle="#474038";b.ctxBuf.fillRect(0,0,1000,1000);b.ctxBuf.drawImage(g.getImage("2I-2"),0,0);b.ctxBuf.drawImage(g.getImage("2I-3"),0,490);b.ctxBuf.drawImage(g.getImage("tzsb"),80,90);b.drawNum(b.score,240,200,g.getImage("fs3"),13,18)}}}b.ctx.drawImage(b.buffer,0,b.offset,b.width,b.height)};b.createGamePage=function(){if(!(b.btns.btn_color||b.btns.btn_bomb||b.btns.btn_stone)){b.btns.btn_sound={img:g.getImage("btn_sound1"),x:295,y:640,w:25,h:25,pressed:0};b.btns.btn_sound.img=b.sound?g.getImage("btn_sound1"):g.getImage("btn_sound2");b.btns.btn_pause={img:g.getImage("btn_pause"),x:400,y:640,w:25,h:25,pressed:0}}};b.delGamePage=function(){if(b.btns.btn_color){b.btns.btn_color=null;b.btns.btn_bomb=null;b.btns.btn_stone=null;b.btns.btn_sound=null;b.btns.btn_pause=null}};b.showGamePage=function(){b.drawBtns(b.btns.btn_sound);b.drawBtns(b.btns.btn_pause)};b.createPausePage=function(){if(!b.btns.btn_back){b.btns.btn_back={img:g.getImage("btn_back"),x:220,y:280,w:134,h:45,pressed:0};
if(b.over){b.btns.btn_restart={img:g.getImage("btn_restart"),x:220,y:240,w:58,h:53,pressed:0}}else{if(b.paused){b.btns.btn_resume={img:g.getImage("btn_resume"),x:220,y:220,w:134,h:45,pressed:0}}}}};b.delPausePage=function(){if(b.btns.btn_back){b.btns.btn_back=null;b.btns.btn_restart=null;b.btns.btn_resume=null}};b.showPausePage=function(){if(b.btns.btn_back){b.drawBtns(b.btns.btn_back);if(b.btns.btn_restart){b.drawBtns(b.btns.btn_restart)}else{b.btns.btn_resume&&b.drawBtns(b.btns.btn_resume)}}};b.delEnemy=function(){if(b.btns.btn_enemy){b.btns.btn_enemy=null}};g.touch.touchStart(function(){if(b.portrait==true){b.pos=g.touch.getStartPos();b.pos.x/=b.scale;b.pos.y=(b.pos.y-b.offset)/b.scale;if(b.state==2&&b.baozha.length<=0&&b.jiafenlock==true&&b.life[b.level]>0){if(b.LOCK==true){c.x=b.pos.x;c.y=b.pos.y}if(b.pos.y<=540&&b.paused==false){b.touchArea();b.life[b.level]-=1}}if(b.paused||b.over){if(b.state==0){if(b.btns.btn_clue1&&b.pos.x>150&&b.pos.x<300&&b.pos.y>600&&b.pos.y<670){b.btns.btn_clue1.pressed=1}else{if(b.btns.btn_sound1&&b.pos.x>408&&b.pos.x<470&&b.pos.y>0&&b.pos.y<65){b.btns.btn_sound1.pressed=1}else{if(b.btns.btn_start&&b.pos.x>67&&b.pos.x<253&&b.pos.y>333&&b.pos.y<377){b.btns.btn_start.pressed=1}else{if(b.btns.btn_exit&&b.pos.x>67&&b.pos.x<253&&b.pos.y>403&&b.pos.y<447){b.btns.btn_exit.pressed=1}}}}}else{if(b.state==2){if(b.btns.btn_back&&b.pos.x>152&&b.pos.x<285&&b.pos.y>258&&b.pos.y<300){b.btns.btn_back.pressed=1}else{if(b.btns.btn_restart&&b.pos.x>190&&b.pos.x<250&&b.pos.y>210&&b.pos.y<270){b.btns.btn_restart.pressed=1}else{if(b.btns.btn_resume&&b.pos.x>152&&b.pos.x<285&&b.pos.y>197&&b.pos.y<241){b.btns.btn_resume.pressed=1}}}}}}else{if(b.state==2){if(b.btns.btn_sound&&b.pos.x>290&&b.pos.x<320&&b.pos.y>630&&b.pos.y<660){b.btns.btn_sound.pressed=1}else{if(b.btns.btn_pause&&b.pos.x>390&&b.pos.x<420&&b.pos.y>630&&b.pos.y<660){b.btns.btn_pause.pressed=1}}}}}});g.touch.touchEnd(function(){if(b.portrait==true){b.pos=g.touch.getReleasePos();b.pos.x/=b.scale;b.pos.y=(b.pos.y-b.offset)/b.scale;if(b.over||b.paused){if(b.state==0){if(b.btns.btn_clue1&&b.btns.btn_clue1.pressed&&b.pos.x>150&&b.pos.x<300&&b.pos.y>600&&b.pos.y<670){b.btns.btn_clue1.pressed=0;
b.delClueDialog()}else{if(b.btns.btn_sound1&&b.btns.btn_sound1.pressed&&b.pos.x>408&&b.pos.x<470&&b.pos.y>0&&b.pos.y<65){b.btns.btn_sound1.pressed=0;b.sound=!b.sound;b.btns.btn_sound1.img=b.sound?g.getImage("btn_sound4"):g.getImage("btn_sound3");b.musicControl()}else{if(b.pos.x>149&&b.pos.x<297&&b.pos.y>436&&b.pos.y<499){b.logoOutTimer=2;b.createGamePage();b.delClueDialog()}else{if(b.pos.x>140&&b.pos.x<300&&b.pos.y>534&&b.pos.y<600){window.location.href="http://h5.qq.com"}}}}}else{if(b.state==1){if(b.pos.x>365&&b.pos.x<415&&b.pos.y>110&&b.pos.y<156){b.state=4}}else{if(b.state==4){if(b.shenglibianliang==true){if(b.level<8){if(b.pos.x>170&&b.pos.x<265&&b.pos.y>220&&b.pos.y<270&&b.mission==1||b.pos.x>80&&b.pos.x<380&&b.pos.y>340&&b.pos.y<385&&b.mission>=2){b.state=2;b.level+=1;b.mission+=1;e(b.level);b.paused=false}else{if(b.pos.x>170&&b.pos.x<265&&b.pos.y>280&&b.pos.y<325&&b.mission>=2){b.state=2;b.jiafenY=510;e(b.level);b.bianliang=0;b.score=b.mission==2?0:b.scoreArray[b.level-1];b.scoreArray.splice(b.level,1);b.paused=false}}}else{if(b.level==8){if(b.pos.x>119&&b.pos.x<216&&b.pos.y>344&&b.pos.y<384){b.level+=1;b.mission+=1;b.paused=false}}else{if(b.level>=9){if(b.level==9){if(b.pos.x>96&&b.pos.x<182&&b.pos.y>410&&b.pos.y<440){b.init();b.state=0;b.createLogoPage()}else{if(b.pos.x>270&&b.pos.x<355&&b.pos.y>410&&b.pos.y<440){b.state=2;b.level+=1;b.mission+=1;e(b.level);b.paused=false}}}else{if(b.level>=9){if(b.pos.x>270&&b.pos.x<360&&b.pos.y>340&&b.pos.y<376){b.state=2;console.log(b.level);e(b.level);b.paused=false}else{if(b.pos.x>96&&b.pos.x<182&&b.pos.y>340&&b.pos.y<376){b.init();b.state=0;b.createLogoPage()}}}}}}}}else{if(b.level<=8){if(b.pos.x>269&&b.pos.x<360&&b.pos.y>347&&b.pos.y<380){b.state=2;b.jiafenY=510;if(b.mission!=1){b.score=b.scoreArray[b.level-1]}else{b.level=0;b.mission=1;b.score=0}e(b.level);b.bianliang=0;b.paused=false}else{if(b.pos.x>95&&b.pos.x<183&&b.pos.y>347&&b.pos.y<380){b.init();b.state=0;b.createLogoPage()}}}else{if(b.pos.x>269&&b.pos.x<360&&b.pos.y>274&&b.pos.y<307){b.state=2;b.jiafenY=510;
b.mission=11;e(b.level);b.bianliang=0;b.score=b.scoreArray[8];b.scoreArray.splice(b.level,1);b.paused=false}else{if(b.pos.x>96&&b.pos.x<182&&b.pos.y>274&&b.pos.y<307){b.init();b.state=0;b.createLogoPage()}}}}}else{if(b.state==2){if(b.btns.btn_back&&b.btns.btn_back.pressed&&b.pos.x>152&&b.pos.x<285&&b.pos.y>258&&b.pos.y<300){b.btns.btn_back.pressed=0;b.delPausePage();b.init();b.state=0;b.createLogoPage()}else{if(b.btns.btn_resume&&b.btns.btn_resume.pressed&&b.pauseTimer==1&&b.pos.x>152&&b.pos.x<285&&b.pos.y>197&&b.pos.y<241){b.btns.btn_resume.pressed=0;b.resumeTimer=10;b.delPausePage()}}}}}}}else{if(b.btns.btn_sound.pressed&&b.pos.x>290&&b.pos.x<320&&b.pos.y>630&&b.pos.y<660){b.sound=!b.sound;b.btns.btn_sound.img=b.sound?g.getImage("btn_sound1"):g.getImage("btn_sound2");b.musicControl()}else{if(b.btns.btn_pause.pressed&&b.pos.x>380&&b.pos.x<430&&b.pos.y>620&&b.pos.y<670){b.paused=true;b.pauseTimer=10;b.createPausePage()}}}switch(b.state){case 0:b.btns.btn_clue1&&(b.btns.btn_clue1.pressed=0);b.btns.btn_sound1&&(b.btns.btn_sound1.pressed=0);b.btns.btn_start&&(b.btns.btn_start.pressed=0);break;case 2:b.btns.btn_back&&(b.btns.btn_back.pressed=0);b.btns.btn_resume&&(b.btns.btn_resume.pressed=0);b.btns.btn_sound&&(b.btns.btn_sound.pressed=0);b.btns.btn_pause&&(b.btns.btn_pause.pressed=0)}}});window.onorientationchange=function(){switch(window.orientation){case 0:case 180:b.initCanvas();b.portrait=true;break;case -90:case 90:b.initCanvas();b.portrait=false}};b.state=0;b.createLogoPage();g.run(function(){window.scrollTo(0,1);b.musicControl();if(b.portrait){switch(b.state){case 0:b.showLogoPage();break;case 1:b.showHelpPage();break;case 4:b.showTishiPage();break;case 2:b.refresh()}}else{b.showClue()}})})};