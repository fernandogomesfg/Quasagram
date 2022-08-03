/*
  dependecies
*/
  const express = require('express')


  /**
   * config -express
   */
  const app = express()


  /**
   * endpoint - posts
   */
  app.get('/posts', (request, response) => {
    let posts = [
      {
        caption: 'Golden Gate Bridge',
        location: 'Inhambane, Mozambique'
      },
      {
        caption: 'Montanhas',
        location: 'Beira, Mozambique'
      }
    ]
    response.send(posts)
    //console.log('Good')
  })

app.listen(3000)
