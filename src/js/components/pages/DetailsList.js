import React from 'react'

const DetailsList = (data) => {
  return (
    <div>
      <div id="comics" className="details-list">
        <h3>Comics</h3>
        <ul>
          { data.comics.map((comic) => {
            return (<li>{comic.title}</li>)
          })}
        </ul>
      </div>
      <div id="series" className="details-list">
        <h3>Series</h3>
        <ul>
          { data.series.map((serie) => {
            return (<li>{serie.title}</li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default DetailsList

