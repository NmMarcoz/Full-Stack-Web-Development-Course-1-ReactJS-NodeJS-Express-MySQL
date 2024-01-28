const express = require('express')
const {Posts} = require('../models')

const getPosts = async(req, res) =>{
    const posts = await Posts.findAll();
    res.status(200).send([
        {message:"Here is your posts"}, 
        {posts}
    ])
}

const simplePost = async(req, res)=>{
    const post = req.body;
    const{title, postText, username} = post
    if(!title || !postText || !username){
        return res.status(500).send("Todos os campos são obrigatórios!")
    }
    
    await Posts.create(post);
    return res.status(200).send([
        {message: "All clear sir!"},
        {post}
    ])

}

module.exports={
    simplePost,
    getPosts
}