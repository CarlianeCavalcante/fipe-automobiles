fetch('https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(data => {
    console.log(
      data.results
        .map(item => {
          return {
            nome: item.name,
            genero: item.gender,
            avatar: item.image,
            especie: item.species,
          }
        })
        .filter(item => {
          switch (item.nome) {
            case 'Rick Sanchez':
              return item
            case 'Morty Smith':
              return item
            case 'Summer Smith':
              return item
            case 'Beth Smith':
              return item
            case 'Jerry Smith':
              return item
            default:
              break
          }
        })
    )
  })
