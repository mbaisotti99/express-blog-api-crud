let arrayP = require("../array")

const findCurPost = (arr, id) =>{
    return arr.find((curPost) => (curPost.id === id))
}

const index = (req, resp) =>{

    const searchTerm = req.query.tags
    
    if (searchTerm !== undefined){
        postFound = arrayP.filter((curPost) => curPost.tags.includes(searchTerm))
        resp.json(postFound)
    } else{
        resp.json(arrayP)
    }
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
    if (idPost === -1) {
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


module.exports = {
    showId,
    index,
    destroy
}