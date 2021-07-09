//getting mongodb object
const todo_list = require("../models/todo-list")

//calling home, loading data if present
module.exports.home = function(req, res){
    //console.log(req.cookies);
    //res.cookie('user_id', 25);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    //getting all data from collection
    todo_list.find({}, function(err, data){

        return res.render('home', {
            title: "Home",
            today_date : String(date),
            todo_obj:data
        });

    });

    
}

// controller to create data
module.exports.create_todo = function(req,res){

    //row would be created
    todo_list.create(req.body, function(err, user){
        console.log(req.body)
        if(err){console.log('error in creating data'); return}

        return res.redirect('back');
    })
}

//controller to delete
module.exports.deleteTODO = function(req,res){
    console.log(req.query)
    let id = req.query.id
    console.log(id)
    //find by id and delete
    todo_list.findOneAndDelete({_id:id}, function(err) {
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    });

}