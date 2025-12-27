const News = require('../models/News');

exports.getAll = async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });
  res.json(news);
};

exports.getById = async (req, res) => {
  const news = await News.findById(req.params.id);
  res.json(news);
};

exports.create = async (req, res) => {
  const news = await News.create(req.body);
  res.status(201).json(news);
};

exports.update = async (req, res) => {
  const updated = await News.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.remove = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
