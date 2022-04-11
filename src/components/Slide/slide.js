import React from "react"
import styled from "styled-components"
import Carousel from 'react-elastic-carousel'


function Slide() {
    return(
        <Carousel itemsToShow={1}>
  <Item>1</Item>
  <Item>2</Item>
  <Item>3</Item>
  <Item>4</Item>
  <Item>5</Item>
  <Item>6</Item>
</Carousel>
    )
}

export default Slide;