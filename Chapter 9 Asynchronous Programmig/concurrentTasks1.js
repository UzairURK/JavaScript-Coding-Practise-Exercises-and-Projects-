// 9.1 Concurrent Tasks in JavaScript
const addImage = (url, element) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = 'blob'
  
    request.addEventListener('load', () => {
      if (request.status == 200) {
        const blob = new Blob([request.response], { type: 'image/jpg' })
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        element.appendChild(img)
      } else {
        console.log(`${request.status}: ${request.statusText}`)
      }
    })
    request.addEventListener('error', event => console.log('Network error'));
    request.send()
  }

const imgdiv = document.getElementById('images')
addImage('Images/download.jpg', imgdiv)
addImage('Images/download-2.jpg', imgdiv)
// addImage('hanafuda/1-4.png', imgdiv)
