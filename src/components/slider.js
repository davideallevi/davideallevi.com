import React from 'react'
// Import React Carousel
import Carousel/*, { Dots }*/ from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// Import components
import Img from 'gatsby-image'
// Data import from GraphQL
import { useStaticQuery, graphql } from 'gatsby'
// Style module
import sliderStyle from '../style/modules/slider.module.scss'

const Slider = () => {

  const experimentsImages = useStaticQuery(graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "experiments"}}) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `)

    return (
        <Carousel
            slidesPerPage={3}
            infinite
            autoPlay={2000}
            animationSpeed={500}
            stopAutoPlayOnHover={true}
            centered={false}
            breakpoints={{
                1280: {
                  slidesPerPage: 3,
                  infinite: true,
                  keepDirectionWhenDragging: true,
                  stopAutoPlayOnHover: true,
                },
                768: {
                  slidesPerPage: 2,
                  infinite: true,
                  keepDirectionWhenDragging: true,
                  stopAutoPlayOnHover: true,
                },
                540: {
                  slidesPerPage: 1.1,
                  infinite: true,
                  autoPlay: 4000,
                  animationSpeed: 1000,
                  keepDirectionWhenDragging: true,
                  stopAutoPlayOnHover: true,
                },
            }}
        >
            {experimentsImages.allFile.edges.map((edge) => {
                return (
                  <Img fluid={edge.node.childImageSharp.fluid} alt="ui design, ux design, ui animation, motion graphic, interaction design, user interface, user experience" className={sliderStyle.experimentImage} />
                )
            })}
        </Carousel>
    )
}

export default Slider