// Find all books
db.books.find()

// Find books by George Orwell
db.books.find({ author: "George Orwell" })

// Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// Find all in-stock books
db.books.find({ in_stock: true })

// Sort by published_year descending
db.books.find().sort({ published_year: -1 })

// Count how many books are in the store
db.books.countDocuments()


db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      totalBooks: { $sum: 1 }
    }
  }
])

db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])

db.books.createIndex({ author: 1 })

db.books.createIndex({ genre: 1, price: -1 })

db.books.createIndex({ genre: 1, price: -1 })


