Using the Aggregation Framework, find a count of the number of movies that have a title composed of one word. To clarify, "Cinderella" and "3-25" should count, where as "Cast Away" would not.

var pipeline = [
    {$project: 
    {"_id":0, "title":1, "titleWords": {$size : {$split: ["$title", " "]}}}
    },
    {$match: {
      "titleWords": 1
    }}
  ]

