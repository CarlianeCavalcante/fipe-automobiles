fetch('https://rickandmortyapi.com/api/character', { method: 'GET' }).then(async response => console.log(await response.json()))
