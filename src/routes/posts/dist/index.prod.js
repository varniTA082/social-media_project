"use strict";var _require=require("express"),Router=_require.Router,_require2=require("../../controllers/posts"),findAllPosts=_require2.findAllPosts,createNewPost=_require2.createNewPost,route=Router();route.get("/",function(e,r){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(findAllPosts());case 2:t=e.sent,r.status(200).send(t);case 4:case"end":return e.stop()}})}),route.post("/",function(r,t){var s,n,o,u,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.body,n=s.userId,o=s.title,u=s.body,n&&o&&u){e.next=3;break}return e.abrupt("return",t.status(400).send({error:"Need userid, title and body to create post"}));case 3:return e.next=5,regeneratorRuntime.awrap(createNewPost(n,o,u));case 5:a=e.sent,t.status(201).send(a);case 7:case"end":return e.stop()}})}),module.exports={postsRoute:route};