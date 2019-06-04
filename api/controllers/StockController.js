/**
 * StockController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: function(req,res){
        Stock.find()
          .then(function(Stocks){
              if(!Stocks || Stocks.length === 0){
                  return res.send({
                      'success': false,
                      'message': 'No stocks found'
                  })
              }
              return res.send({
                  'success':true,
                  'message':'Stocks fetched',
                  'data':Stocks
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success':false,
                  'message':'Unable to fetched stock',
                  'error':err
              })
          })
    },
  
    create: function(req,res){
        Stock.create(req.allParams())
          .then(function(Stock){
              return res.send({
                  'success':true,
                  'message': 'Stock created successfully',
                  'Stock':Stock
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success': false,
                  'message':'Unable to create Stock',
                  'error':err
              })
          })
    },
  
    update: function(req,res){
        Stock.update(req.param('id'),req.allParams())
          .then(function(Stock){
              return res.send({
                  'success': true,
                  'message': 'Stock updated successfully',
                  'data': Stock
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success':false,
                  'message':'Unable to update Stock',
                  'error':err
              })
          })
    },
  
    delete: function(req,res){
        Stock.destroy(req.param('id'))
          .then(function(Stock){
              return res.send({
                  'success':true,
                  'message':'Stock deleted successfully',
                  'data':Stock
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success':false,
                  'message':'Unable to delete Stock',
                  'error':err
              })
          })
    }
  
};

