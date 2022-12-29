import React from "react"

import "./Card.css"

interface ICard {
  className: string
  children: any
}

const Card: React.FC<ICard> = ({ className, children }) => {
  const classes = "card " + className

  return <div className={classes}>{children}</div>
}

export default Card
