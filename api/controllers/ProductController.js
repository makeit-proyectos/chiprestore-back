/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    create: function (req, res){
        Product.create(req.allParams())
                .then(function(products){
                    return res.send({
                        'data':products
                    })
                })
                .catch(function(err){
                    return res.send({
                        'error':err
                    })
                })
    },

    findAttire: function(req,res){
        Product.find({attire:req.param('attire')})
                .then(function(products){
                    return res.send({
                        'success':true,
                        'data':products
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

