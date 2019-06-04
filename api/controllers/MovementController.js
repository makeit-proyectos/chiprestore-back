/**
 * MovementController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    get: function(req,res){
        Movement.find()
          .then(function(movements){
              if(!movements || movements.length == 0){
                  return res.send({
                      'success': false,
                      'message': 'No movements found'
                  })
              }
              return res.send({
                  'success':true,
                  'message':'Movements fetched',
                  'data':movements
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success':false,
                  'message':'Unable to fetched movements',
                  'error':err
              })
          })
    },
  
    create: function(req,res){
        Movement.create(req.allParams())
          .then(function(movements){
              return res.send({
                  'success':true,
                  'message': 'Movement created successfully',
                  'movements':movements
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success': false,
                  'message':'Unable to create movements',
                  'error':err
              })
          })
    },
  
    update: function(req,res){
        Movement.update(req.param('id'),req.allParams())
          .then(function(movements){
              return res.send({
                  'success': true,
                  'message': 'Movement updated successfully',
                  'data': movements
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success':false,
                  'message':'Unable to update movements',
                  'error':err
              })
          })
    },
  
    delete: function(req,res){
        Movement.destroy(req.param('id'))
          .then(function(movements){
              return res.send({
                  'success':true,
                  'message':'Movement deleted successfully',
                  'data':movements
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success':false,
                  'message':'Unable to delete movements',
                  'error':err
              })
          })
    }
  

};

