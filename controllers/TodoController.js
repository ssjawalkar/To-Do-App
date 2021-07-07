const todo_list = require("../models/todo-list")

module.exports.home = function(req, res){
    //console.log(req.cookies);
    //res.cookie('user_id', 25);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return res.render('home', {
        title: "Home",
        today_date : String(date)
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