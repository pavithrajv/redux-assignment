const broadcastFirstNameClicked= function (firstname){
    console.log(this.props)
    console.log("first name clicked..")
    return({
        type:"FIRST_NAME_CLICKED",
        payload:firstname
    })
}

export default broadcastFirstNameClicked;