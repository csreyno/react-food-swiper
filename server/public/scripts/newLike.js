const newLike = (recipeid) => {
    console.log(recipeid)
        fetch('/members-only/addlike', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({recipeid})

    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error => {
        console.error('Error:', error)
    }));
}