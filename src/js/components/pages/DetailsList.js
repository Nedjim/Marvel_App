import React from 'react'

const DetailsList = (props) => {
  return (
    <div>
      <h3>Comics</h3>
      <ul>
        { props.comics.map((comic) => {
          return (<li>{comic.title}</li>)
        })}
      </ul>
      <h3>Series</h3>
      <ul>
        { props.series.map((serie) => {
          return (<li>{serie.title}</li>)
        })}
      </ul>
    </div>
  )
}

export default DetailsList

