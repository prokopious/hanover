import comments from './products.json'

export default (req, res) => {
  res.status(200).json(comments)
}