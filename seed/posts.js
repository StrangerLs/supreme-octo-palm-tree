const Content = require('../models/content')
const db = require('../db/connection')

const main = async () => {
  const contents = [
    {
      "title": "hootenany at the barnstuff",
      "author": "Douglass Bubbletrousers",
      "imgURL": "test.png",
      "post": "hahahahahaha omg i love being online"
    },
    {
      "title": "where is my foot?",
      "author": "Stevie Butts",
      "imgURL": "test.png",
      "post": "oh man soooo goood love it!"
    }
  ]
  await Content.insertMany(contents)
  console.log("Created Content!")
}

const run = async () => {
  await main()
  db.close()
}

run()