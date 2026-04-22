// Aggregation (basic find-esque)
db.books.aggregate([
    { $match: { genre: 'Fantasy' }
}])

// Same as
db.books.find({ genre: 'Fantasy' })

// Aggregation (group by)
db.books.aggregate([
    { $match: { genre: 'Fantasy' } },
    { $group: { _id: '$publisher', titles: { $addToSet: '$title' } } }
])

// Aggregation (group by, another accumulator object)
db.books.aggregate([
    { $match: { genre: 'Fantasy' } },
    { $group: { _id: '$publisher', titles: { $addToSet: '$title' }, averageRating: { $avg: '$rating' } } }
])

// Projection example
db.books.aggregate([
    { $match: { genre: 'Fantasy' } },
    { $group: { _id: '$publisher', titles: { $addToSet: '$title' }, averageRating: { $avg: '$rating' } } },
    { $project: { _id: 0 } }
])

// Projection example with a rename + show a couple attributes
db.books.aggregate([
    { $match: { genre: 'Fantasy' } },
    { $group: { _id: '$publisher', titles: { $addToSet: '$title' }, averageRating: { $avg: '$rating' } } },
    { $project: { _id: 0, publisher: '$_id', titles: 1, averageRating: 1 } }
])

// Filter based on average book rating for Fantasy titles by publisher
db.books.aggregate([
    { $match: { genre: 'Fantasy' } },
    { $group: { _id: '$publisher', titles: { $addToSet: '$title' }, averageRating: { $avg: '$rating' } } },
    { $project: { _id: 0, publisher: '$_id', titles: 1, averageRating: 1 } },
    { $match: { averageRating: { $gt: 4 } } }
])

// Unwind based on book titles
db.books.aggregate([
    { $match: { genre: 'Fantasy' } },
    { $group: { _id: '$publisher', titles: { $addToSet: '$title' }, averageRating: { $avg: '$rating' } } },
    { $project: { _id: 0, publisher: '$_id', titles: 1, averageRating: 1 } },
    { $match: { averageRating: { $gt: 4 } } },
    { $unwind: '$titles' },
    { $project: { title: '$titles', averageRating: 1, publisher: 1 } }
])

// Lookup author -> books
db.authors.aggregate([{
    $lookup: {
        from: 'books',
        localField: 'booksArray',
        foreignField: '_id',
        as: 'authoredBooks'
    }
}, {
    $project: { name: 1, authoredBooks: 1, _id: 0 },
}, {
    $limit: 5
}])

// Projection on an array's objects
db.authors.aggregate([{
    $lookup: {
        from: 'books',
        localField: 'booksArray',
        foreignField: '_id',
        as: 'authoredBooks'
    }
}, {
    $project: { name: 1, authoredBooks: 1, _id: 0, authoredBooks: {
        $map: {
          input: "$authoredBooks",
          as: "book",
          in: {
            title: "$$book.title"
          }
        }
      }
    },
}, {
    $limit: 1
}])