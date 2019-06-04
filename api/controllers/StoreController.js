/**
 * StoreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function(req,res){
      Store.find()
        .then(function(stores){
            if(!stores || stores.length === 0){
                return res.send({
                    'success': false,
                    'message': 'No records found'
                })
            }
            return res.send({
                'success':true,
                'message':'Records fetched',
                'data':stores
            })
        })
        .catch(function(err){
            sails.log.debug(err)
            return res.send({
                'success':false,
                'message':'Unable to fetched records',
                'error':err
            })
        })
  },

  create: function(req,res){
      Store.create(req.allParams())
        .then(function(store){
            return res.send({
                'success':true,
                'message': 'Store created successfully',
                'store':store
            })
        })
        .catch(function(err){
            sails.log.debug(err)
            return res.send({
                'success': false,
                'message':'Unable to create store',
                'error':err
            })
        })
  },

  update: function(req,res){
      Store.update(req.param('id'),req.allParams())
        .then(function(store){
            return res.send({
                'success': true,
                'message': 'Store updated successfully',
                'data': store
            })
        })
        .catch(function(err){
            sails.log.debug(err)
            return res.send({
                'success':false,
                'message':'Unable to update store',
                'error':err
            })
        })
  },

  delete: function(req,res){
      Store.destroy(req.param('id'))
        .then(function(store){
            return res.send({
                'success':true,
                'message':'Store deleted successfully',
                'data':store
            })
        })
        .catch(function(err){
            sails.log.debug(err)
            return res.send({
                'success':false,
                'message':'Unable to delete store',
                'error':err
            })
        })
  }

};
