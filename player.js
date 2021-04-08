class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }
    getCount(){
        db.ref('playerCount').on("value",function(data){
            pc=data.val()
        })
    }

    updatePlayerCount(pc){
        db.ref('/').update({playerCount:pc})
    }
    update(){
        var playerIndex="players/player"+this.index
        db.ref(playerIndex).set({name:this.name,distance:this.distance})
    }
    static getPlayerInfo(){
        db.ref("players").on("value",function(data){
            allPlayers=data.val()
        })
    } 
}