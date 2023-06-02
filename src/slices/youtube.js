import React from "react"

export const Youtube = props => {

const url = props.slice.primary.youtube_link
 

console.log("asdad", URL)

  return (
    <section className="container youtubeWrapper">
        <iframe
            src={url}
            title='DWF video'
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            frameBorder="0"
            allowFullScreen
        />
    </section>
  )
}