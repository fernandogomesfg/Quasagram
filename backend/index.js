/*
  dependecies
*/
  const express = require('express')

  const admin = require('firebase-admin');

  const serviceAccount = require('./serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const db = admin.firestore();


  /**
   * config -express
   */
  const app = express()


  /**
   * endpoint - posts
   */
  app.get('/posts', (request, response) => {
    let posts = []
    db.collection('posts').get().then(snapshot => {
      snapshot.forEach((doc) => {
        posts.push(doc.data())
      });
      response.send(posts)
    })
  })

app.listen(3000)
