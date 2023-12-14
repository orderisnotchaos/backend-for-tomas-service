
const db = require('../database/models');
module.exports = {
    main: (req,res,next) =>{

        return res.render('index', { title: 'Express' });
    },

    recieveBill : async (req, res, next) =>{

        if(!req.body) return res.status(400);
        if(!req.body.name) return res.status(400);
        if(!req.body.address) return res.status(400);
        if(!req.body.street) return res.status(400);
        if(!req.body.postalCode) return res.status(400);
        if(!req.body.city) return res.status(400);
        if(!req.body.country) return res.status(400);
        if(!req.body.phone) return res.status(400);
        if(!req.body.ucoQuantity) return res.status(400);
        if(!req.body.ucoDestinatary) return res.status(400);
        if(!req.body.date) return res.status(400);
        if(!req.body.digitalSignature) return res.status(400);

        const data = await db.Data.create(req.body);
        return res.json(data);
    },

    searchProduct: async (req,res, next) =>{
        if(!req.body) return res.status(400);
        if(!req.body.code) return res.status(400);
        // const products = await db.Product.findAll();


        /*
            let product;
            products.forEach(product =>{
                if(product.code === req.body.code){
                    product = product
                }
            })

            return res.json(product);
        */

            return res.json({foo: "b ar"});
    },

    liveTracking: async (req, res , next) =>{
        const mockLiveTracking = {
            userId: 2, // Replace with an actual UUID
            origin: 'Origin City',
            destination: 'Destination City',
            product: 'Product Name',
            estimatedArrival: new Date(), // Replace with an actual timestamp
          };
       const livetracking = await db.livetracking.create(req.body);

       return res.json(livetracking);
    },
}