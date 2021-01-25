const mongoose = require("mongoose")
const Product = require("../models/productModel");

exports.get_all_products = (req, res, next) => {
    Product.find({})
      .select("_id name price productImage createdAt updatedAt")
      .exec()
      .then((docs) => {
        const response = {
          count: docs.length,
          products: docs.map((doc) => {
            return {
              _id: doc._id,
              name: doc.name,
              price: doc.price,
              productImage: doc.productImage,
              createdAt: doc.createdAt,
              updatedAt: doc.updatedAt,
              request: {
                type: "GET",
                url: `http://localhost:3000/products/${doc._id}`,
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
  }

exports.get_a_product = (req, res, next) => {
    const id = req.params.productId;

    Product.findById(id)
      .exec()
      .then((doc) => {
        if (doc) {
          res.status(200).json({
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            productImage: doc.productImage,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            request: {
              type: "GET",
              response: "Retrieves all products",
              url: "http://localhost:3000/products/",
            },
          });
        } else {
          res.status(404).json({
            message: `Product with ID: ${id}, not found. Please provide a valid ID and try again.`,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }

exports.create_a_product = (req, res, next) => {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
      productImage: req.file.path
    })
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Created Successfully",
          product: {
            _id: result._id,
            name: result.name,
            price: result.price,
            createdAt: result.createdAt,
            request: {
              type: "GET",
              url: `http://localhost:3000/products/${result._id}`,
            },
          },
        });
      })
      .catch((err) => console.log(err));
  }

exports.edit_a_product = (req, res, next) => {
    const id = req.params.productId;
    Product.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
        },
      }
    )
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          message: "Created Successfully",
          product: {
            _id: result._id,
            name: result.name,
            price: result.price,
            createdAt: result.createdAt,
            request: {
              type: "GET",
              url: `http://localhost:3000/products/${result._id}`,
            },
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }

exports.delete_a_product = (req, res, next) => {
    const id = req.params.productId;

    Product.remove({ _id: id })
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          message: `Hey! This product ID: ${id}, has been deleted successfully`,
          request: {
            type: "POST",
            response: "Creates new product",
            url: "http://localhost:3000/products/",
            body: {
              name: "String",
              price: "Number",
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
  }