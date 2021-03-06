/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName:'products',
  attributes: {
    //Name'll be concatenation from the others fields. That combination will describe a unique product and in that way we control repeated products 
    name:{
      type:'string',
      required:true
    },
    color:{
      type: 'string',
      required:true
    },
    attire:{
      type: 'string',
      isIn: ['Remera', 'Camisa', 'Pantalon', 'Buzo','Sweater'],
      required:true
    },
    size:{
      type: 'string',
      isIn: ['S', 'M', 'L', 'XL','XS'],
      required:true
    },
    brand:{
      type: 'string',
      required:true
    },
    style:{
      type: 'string',
      required:true
    },
    code:{
      type: 'string'
    },
    description:{
      type: 'string'
    },

    stores:{
      collection:'store',
      via:'product',
      through:'stock'
    }


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

