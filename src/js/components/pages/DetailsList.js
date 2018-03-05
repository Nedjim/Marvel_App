import React from 'react'

const DetailsList = (data) => {
  return (
    <div>
      <h3>Comics</h3>
      <ul>
        { data.comics.map((comic) => {
          return (<li>{comic.title}</li>)
        })}
      </ul>
      <h3>Series</h3>
      <ul>
        { data.series.map((serie) => {
          return (<li>{serie.title}</li>)
        })}
      </ul>
    </div>
  )
}

export default DetailsList

