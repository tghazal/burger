var express=require("express");
var burger=require("../models/burger")
var router =express.Router();


router.get("/index",function(req,res){
burger.all(function(result){
    res.render("index",{data:result})
})

})

router.post("/index",function(req,res){
    var bugerToEat=req.body;
burgerName=bugerToEat.name;
//burgerDevoured=bugerToEat.devoured;
    burger.insert(burgerName,"false",function(result){
         res.redirect("/index");   
    })
 
})

router.put("/api/burgers/:id",function(req,res){
    var id=req.params.id;
    burger.update(true,id,function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})


// Export routes for server.js to use.
module.exports = router;