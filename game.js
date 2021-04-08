class Game{
    constructor(){

    }
    getGameState(){
        db.ref('gameState').on("value",function(data){
            gs=data.val()
        })
    }
    updateGameState(gs){
        db.ref('/').update({gameState:gs})
    }
    start(){
        if(gs===0){
            player=new Player()
            form=new Form()
            player.getCount()
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car1.addImage(blueCarIMG)
        car2.addImage(blackCarIMG)
        cars=[car1,car2]
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            image(trackOfDeath,0,-displayHeight*4,displayWidth,displayHeight*5,)
            var index=0
            var x=500
            var y=0
            for(var plr in allPlayers){
                index++
                x=x+200
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=10
            player.update()
        }
        drawSprites()
    }
}