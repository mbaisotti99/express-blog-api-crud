let arrayP = require("../array")




const findCurPost = (arr, id) =>{
    return arr.find((curPost) => (curPost.id === id))
}

const index = (req, resp) =>{

    const searchTerm = req.query.tags
    
    // if (searchTerm !== undefined){
    //     postFound = arrayP.filter((curPost) => curPost.tags.includes(searchTerm))
    //     resp.json(postFound)
    // } else{
    //     resp.json(arrayP)
    // }
    resp.json(
        (searchTerm !== undefined) ? 
        (arrayP.filter((curPost) => curPost.tags.includes(searchTerm))) : arrayP
    )
}

const showId = (req, resp) =>{
    let idPost = parseInt(req.params.id)
    let postSee = findCurPost(arrayP, idPost)
    
    if (postSee === undefined){
        resp.statusCode = 404;
        resp.json({
            error: true,
            message: "Post non trovato"
        })
    } else{
        resp.json(postSee);
    }
}

const destroy = (req, resp) =>{
    let idPost = parseInt(req.params.id);
    
    let deletedPostIndex = arrayP.findIndex((curPost) =>(curPost.id === idPost))
    if (deletedPostIndex === -1) {
        resp.statusCode = 404
        resp.json({
            message:"Post non trovato"
        })
    }else{
        arrayP.splice(deletedPostIndex, 1);
        resp.statusCode = 204;
        resp.json(arrayP);
    }


}

const modify = (req, resp) =>{
    let idPost = parseInt(req.params.id);
    let curPostIndex = arrayP.findIndex((curPost) =>(curPost.id === idPost))
    if (curPostIndex === -1){
        resp.statusCode = 404
        resp.json({
            error: true,
            message:"Post non trovato"
        })
    }else{
        arrayP[curPostIndex] = {
            id: idPost,
            ...req.body
        }
        resp.send(`Modificato elemento ${idPost}`)
    }

}

const create = (req, resp) =>{
    // console.log(req.body);
    // resp.send("OK")

    let newId = arrayP[arrayP.length - 1].id + 1
    // console.log(newId)  
    
    arrayP.push(
        {
            id: newId,
            ...req.body 
        }
        )
    // resp.send("OK")
    resp.send(`Aggiunto elemento ${req.body.titolo}`)
}


module.exports = {
    showId,
    index,
    destroy,
    create,
    modify
}







