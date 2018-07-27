var orm = require("../config/orm");
var burger = {
    all : function(cb){
        orm.selectAll("burgers",function(result){
            cb(result)
        })
        },
    insert:function( valOfCol1,valOfCol2,cb){
        orm.insertOne("burgers","burger_name","devoured", valOfCol1,valOfCol2,function(result){
           cb(result)
        })
    },
    update:function(valToUpdate,valOfCondition,cb){
        orm.updateOne("burgers","devoured",valToUpdate,"id",valOfCondition,function(result){
cb(result)
        })
    }


    }
    

module.exports=burger;