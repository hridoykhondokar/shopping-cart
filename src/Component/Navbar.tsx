import {
  Container,
  Nav,
  Navbar as NavbarBs,
  NavLink,
  Button,
} from "react-bootstrap";
const Navbar = () => {
  return (
    <div>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link href="/store" as={NavLink}>
              Store
            </Nav.Link>
          </Nav>
          <Button 
          className="rounded-circle" 
          variant="outline-primary"
          style={{position:'relative'}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              fill="currentColor"
              className="bi bi-cart-dash-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />{" "}
            </svg>
          <div 
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
          style={{
            width:"1.5rem",
            height:"1.5rem",
            color:"white",
            position:"absolute",
            bottom:"0",
            right:"0",
            transform:"translate(25%,25%)"
          }}
          >
            3
          </div>
          </Button>
        </Container>
      </NavbarBs>
    </div>
  );
};

export default Navbar;
