import React from "react"

export const Image = props => {
  const anchorId = props.slice.primary.anchor_id
  const autoHeigh = props.slice.primary.auto_image_height
  const text = props.slice.primary.text

  return (
    <section 
      className="container imageWrapper"
      id = {anchorId}
      >
      <div className="row">
        <div className="col p-0 txt-center">
          <img
            src={props.slice.primary.image.url}
            alt={props.slice.primary.image.alt ? props.slice.primary.image.alt : props.slice.primary.image.url}
            className={`${autoHeigh ? "autoHeight" : "fixHeight"}`}
          />
        </div>
      </div>
      {text && (
        <p className="txt-center px-1">{text}</p>
      )}
    </section>
  )
}
