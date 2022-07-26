import React, { useRef } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';


const Header = (props) => {
    const inputRef = useRef();
    const formSubmitted = e => {
        // console.log(e.target.value);
        e.preventDefault();
        props.setSearchkey(inputRef.current.value);
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="logoName" href="./">GeeksGallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex" onSubmit={formSubmitted}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                ref={inputRef}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header;

