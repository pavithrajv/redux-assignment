const broadcastLastNameClicked= function (lastname){
    console.log(this.props)
    console.log("last name clicked..")
    return({
        type:"LAST_NAME_CLICKED",
        payload:lastname
    })
}

export default broadcastLastNameClicked;