const express=require('express');
const { getallbooks, createbook, getById, updatebook, deletebook}=require('../Controllers/book-Controller');
const BookRouter=express.Router();

BookRouter
.route('/')
.get(getallbooks)
.post(createbook)

BookRouter
.route('/:id')
.get(getById)
.patch(updatebook)
.delete(deletebook)

module.exports=BookRouter;
