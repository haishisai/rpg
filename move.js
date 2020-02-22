var rpg = {
    init: function (msg) {
        this.initData(msg);
        // this.ainimateRun();
        this.ainimateMove();
    },
    initData: function (msg) {
        this.el = msg.el;
        console.log(this.el)
        this.player = document.getElementsByClassName("player-img")[0];
        this.controller = document.getElementsByClassName("controller")[0];
        this.run = null;
        this.lastmove = null;
    },
    ainimateRun: function (data) {
        self = this;
        var i = 0;
        var speed = 10;
        // console.log( this.lastmove)
        if( data == "" ){
            return
        }
        if( data == "stop" ){
            clearInterval(this.run)
            this.player.src = `./images/${this.lastmove}-1.png`;
            return
        }else{
            // 记录之前的动作
            this.lastmove = data;
        }
        clearInterval(this.run)
        this.run = setInterval(function () {
            i++
            if (i > 4) {
                i = 1
            }
            self.player.src = `./images/${data}-${i}.png`;
            switch(data){
                case "up" :
                    self.player.style.top = self.player.offsetTop - speed + "px";
                    break;
                case "down" :
                    self.player.style.top = self.player.offsetTop + speed + "px";
                    break;
                case "left" :
                    self.player.style.left = self.player.offsetLeft - speed + "px";
                    break;
                case "right" :
                    self.player.style.left = self.player.offsetLeft + speed + "px";
                    break;
                // 左上    
                case "lu" :
                    self.player.style.top = self.player.offsetTop - speed + "px";
                    self.player.style.left = self.player.offsetLeft - speed + "px";
                    break;
                // 左下
                case "ld" :
                    self.player.style.top = self.player.offsetTop + speed + "px";
                    self.player.style.left = self.player.offsetLeft - speed + "px";
                    break;
                // 右上    
                case "rightUp" :
                    self.player.style.top = self.player.offsetTop - speed + "px";
                    self.player.style.left = self.player.offsetLeft + speed + "px";
                    break;
                // 右下
                case "rd" :
                    self.player.style.top = self.player.offsetTop + speed + "px";
                    self.player.style.left = self.player.offsetLeft + speed + "px";
                    break;
            }
        }, 100)        
    },
    ainimateMove: function () {
        self = this;
        this.controller.addEventListener("click",function (e) {
            // console.log(e.target.id)
            self.ainimateRun(e.target.id)
        })  
    }
}