const todo_list = require("../models/todo-list")

module.exports.home = function(req, res){
    //console.log(req.cookies);
    //res.cookie('user_id', 25);
    return res.render('home', {
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}
module.exports.create_todo = function(req,res){

    todo_list.create(req.body, function(err, user){
        console.log(req.body)
        if(err){console.log('error in creating data'); return}

        return res.redirect('back');
    })
}