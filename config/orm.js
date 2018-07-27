var connection=require("./connection");

var orm = {
 selectAll:function(tableInput,cb){
    var sqlQuery = "select * from ??" ;
    connection.query(sqlQuery,[tableInput],function(err,data){
        if( err) throw err;
        cb(data);
       // console.log(data);
    })

 },

 insertOne:function(tableInput, col1ToAdd,col2ToAdd, valOfCol1,valOfCol2,cb){
    var sqlQuery = "INSERT INTO ?? (??,??) VALUES (?,?)";
    connection.query(sqlQuery,[tableInput,col1ToAdd,col2ToAdd,valOfCol1,valOfCol2],function(err,data){
        if(err)throw err;
        cb(data)
      //  console.log(data)
    })

 },

updateOne:function(tableInput,colToUpdate,valToUpdate,colOfCondition,valOfCondition,cb){
var sqlQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
connection.query(sqlQuery,[tableInput,colToUpdate,valToUpdate,colOfCondition,valOfCondition],function(err,data){
    if(err)throw err;
    cb(data)
  //  console.log(data)
})
}
}

module.exports=orm;