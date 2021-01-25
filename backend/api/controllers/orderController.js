const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const mongoose = require("mongoose")

exports.get_all_orders = (req, res, next) => {
  Order.find({})
    .select("_id product quantity createdAt updatedAt")
    .populate("productId", "name price")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            _id: doc._id,
            productId: doc.productId,
            quantity: doc.quantity,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            request: {
              type: "GET",
              url: `http://localhost:3000/orders/${doc._id}`,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.get_one_order = (req, res, next) => {
  const id = req.params.orderId;

  Order.findById(id)
    .populate("productId", "name price")
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          _id: doc._id,
          productId: doc.productId,
          quantity: doc.quantity,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt,
          request: {
            type: "GET",
            response: "Retrieves all orders",
            url: "http://localhost:3000/orders/",
          },
        });
      } else {
        res.status(404).json({
          message: `Order with ID: ${id}, not found. Please provide a valid ID and try again.`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.create_an_order = (req, res, next) => {
  Product.findById(req.body.productId).then(product => {
      if(!product) {
          return res.status(404).json({
              message: "Product not found"
          })
      }else{
        const order = new Order({
            _id: new mongoose.Types.ObjectId(),
            productId: req.body.productId,
            quantity: req.body.quantity,
          })
            .save()
            .then((result) => {
              res.status(201).json({
                message: "Created Successfully",
                order: {
                  _id: result._id,
                  productId: result.productId,
                  quantity: result.quantity,
                  createdAt: result.createdAt,
                  request: {
                    type: "GET",
                    url: `http://localhost:3000/orders/${result._id}`,
                  },
                },
              });
            })
            .catch((err) => console.log(err));
      }
  }).catch(err => {
      res.status(500).json({
          error: err
      })
  })
};

exports.delete_an_order = (req, res, next) => {
  const id = req.params.orderId;

  Order.remove({ _id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: `Hey! This order ID: ${id}, has been deleted successfully`,
        request: {
          type: "POST",
          response: "Creates new order",
          url: "http://localhost:3000/orders/",
          body: {
            productId: "ID",
            quantity: "Number",
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};