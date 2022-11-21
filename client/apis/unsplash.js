import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1' // *** DOG IMAGES ***

export function getUnsplash() {
  return request
    .get(`${serverURL}/unsplash`)
    .then((response) => response.body)
    .catch((err) => {
      console.log(err)
    })
}
