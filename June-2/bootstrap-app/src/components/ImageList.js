import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';
import Masonry from "react-masonry-css";



const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };




const ImageList = (props) => {


    return (
        <>
            <Container fluid className='mt-4'>
                <Row>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {
                            props.images.map((single_image, idx) => {
                                // console.log(single_image);

                                // there own grid to width 100% mASOnry
                                // return <Col sm={6} lg={4} xl={3} xxl={2} key={idx}> <ImageCard click={props.cardClick} image_details={single_image} /> </Col>
                                return <Col  key={idx}> <ImageCard click={props.cardClick} image_details={single_image} /> </Col>

                            })
                        }
                    </Masonry>

                </Row>
            </Container>

        </>
    )
}

export default ImageList;
