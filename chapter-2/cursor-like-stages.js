 released in the USA with a tomatoes.viewer.rating greater than or equal to 3, calculate a new field called num_favs that represets how many favorites appear in the cast field of the movie.

Sort your results by num_favs, tomatoes.viewer.rating, and title, all in descending order.

What is the title of the 25th film in the aggregation result?

var pipeline = [
  {$match:{
    "tomatoes.viewer.rating": {$gte: 3},
    "countries": {$in: ["USA"]},
    cast: {$in: ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey","George Clooney"]}
  }},
  {$project: {
    _id:0, 
      num_favs: {
      $size: {
       $filter: {
          input: "$cast",
          as: "actor",
          cond: { $in: ["$$actor", ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey","George Clooney"]]}
       }
     }
   },
   title:1, 
   rating:"$tomatoes.viewer.rating"
 }},
 { $sort : { num_favs : -1, rating: -1, title: -1 } },
 { $skip: 24 }
]
