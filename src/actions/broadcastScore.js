const broadcastScoreClicked= function(score){
    console.log(this.props)
    console.log("score clicked..")
    return({
        type:"SCORE_CLICKED",
        payload:score
    })
}

export default broadcastScoreClicked;