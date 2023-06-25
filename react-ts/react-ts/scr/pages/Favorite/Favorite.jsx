import React from 'react'

function Favorite() {
  const favorite = useSelector(state => state.movies.favorite)

  return (
    <div>
      {favorite.map(i => {
        return <div>{i.title}</div>
      })}

    </div>
  )
}

export default Favorite