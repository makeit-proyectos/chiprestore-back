/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: function(req,res){
        Product.find()
          .then(function(products){
              if(!products || products.length == 0){
                  return res.send({
                      'success': false,
                      'message': 'No products found'
                  })
              }
              return res.send({
                  'success':true,
                  'message':'products fetched',
                  'data':products
              })
          })
          .catch(function(err){
              sails.log.debug(err)
              return res.send({
                  'success':false,
                  'message':'Unable to fetched products',
                  'error':err
              })
          })
    },
    create: function (req, res){
        Product.create(req.allParams())
                .then(function(product){
                    return res.send({
                        'success':true,
                        'message':'Product created successfully',
                        'data':product
                    })
                })
                .catch(function(err){
                    return res.send({
                        'success':false,
                        'message':'Unable to create product',
                        'error':err
                    })
                })
    },
    update: function(req,res){
        Product.update(req.param('id'),req.allParams())
            .then(function(product){
                return res.send({
                    'success':true,
                    'message':'Product updated successfully',
                    'data':product
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success':false,
                    'message':'Unable to update product',
                    'error':err
                })
            })
    },
    delete:function(req,res){
        Product.destroy(req.param('id'))
            .then(function(product){
                return res.send({
                    'success':true,
                    'message':'Product deleted successfully',
                    'data':product
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success':false,
                    'message':'Unable to delete product',
                    'error':err
                })
            })
    },
    findByAttire: function(req,res){
        Product.find({attire:req.param('attire')})
                .then(function(products){
                    if(!products || products.length == 0){
                        return res.send({
                            'success':false,
                            'message': 'No products found'
                        })
                    }
                    return res.send({
                        'success':true,
                        'message':'Products fetched successfully',
                        'data':products
                    })
                })
                .catch(function(err){
                    sails.log.debug(err)
                    return res.send({
                        'success':false,
                        'message':'Unable to fetch products',
                        'error':err
                    })
                })
    },

    search: function(req,res){
        
        Product.find({
            parametro:{contains:req.param('parametro')}
        })
        /*.find({
            or : [
                {attire:{contains:req.param('parametro')}},
                {size:{contains:req.param('parametro')}},
                {brand:{contains:req.param('parametro')}},
                {color:{contains:req.param('parametro')}}
              ]
        })*/
        
        .then(function(products){
                return res.send({
                    'success':true,
                    'data':products
                })
            })
            .catch(function(err){
                return res.send({
                    'success':false,
                    'error':err
                })
            })
    }
};

