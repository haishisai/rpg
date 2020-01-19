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
    },
    ainimateRun: function () {
        self = this;
        var i = 0;
        var speed = 10;
        var run = setInterval(function () {
            i++
            if (i > 4) {
                i = 1
            }
            self.player.src = `./images/down-${i}.png`;
            self.player.style.top = self.player.offsetTop + speed + "px"
        }, 100)
    },
    ainimateMove: function () {
        self = this;
        this.controller.addEventListener("click",function (e) {
            console.log(e.target)
            self.ainimateRun()
        })
        
    }
}