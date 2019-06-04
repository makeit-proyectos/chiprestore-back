/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    get: function(req,res){
        User.find()
            .then(function(users){
                if(!users || users.length===0){
                    return res.send({
                        'success':false,
                        'message':"No se pudo obtener ningun usuario"
                    })
                }
            })
    },

    create: function(req, res){
        User.create(req.allParams())
            .then(function(user,err){
                return res.send({
                    'success':true,
                    'message':'Usuario creado correctamente',
                    'user': user
                })
            })
            .catch(function(err){
                return res.send({
                    'success':false,
                    'error':err
                })
            })
    },

    edit: function(req,res){
        let user = User.find({userName:req.param('userName')})
        if(user!==null){
            user.edit(req.allParams())
                .then(function(user){
                    return res.send({
                        'success':true,
                        'message':'Usuario modificado correctamente'
                    })
                })
                .catch(function(err){
                    return res.send({
                        'success':false,
                        'error':err
                    })
                })
        }
    }

};

