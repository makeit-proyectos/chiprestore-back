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
                if(!users || users.length==0){
                    return res.send({
                        'success':false,
                        'message':"No records found"
                    })
                }
                return res.send({
                      'success': true,
                      'message': 'Recods fetched',
                      'data':users
                  })
              })
              .catch(function(err){
                  sails.log.debug(err)
                  return res.send({
                      'success': false,
                      'message': 'Unable to fetched records',
                      'error':err
                  })
              })
    },

    create: function(req, res){
        User.create(req.allParams())
            .then(function(user){
                return res.send({
                    'success':true,
                    'message':'User created successfully',
                    'user': user
                })
            })
            .catch(function(err){
                return res.send({
                    'success':false,
                    'message':'Unable to create user',
                    'error':err
                })
            })
    },

    /*edit: function(req,res){
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
    }*/

    update: function(req,res){
        sails.log.debug(req.param('id'))
        User.update(req.param('id'),req.allParams())
            .then(function(user){
                return res.send({
                    'success': true,
                    'message': 'Record updated successfully',
                    'data': user
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to update record',
                    'error':err
                })
            })
    },

    delete: function(req,res){
        User.destroy(req.param('id'))
            .then(function(user){
                return res.send({
                    'success': true,
                    'message': 'User deleted successfully',
                    'data': user
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to delete user',
                    'error':err
                })
            })
    }

};

