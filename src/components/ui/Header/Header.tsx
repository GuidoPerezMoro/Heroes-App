import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogout } from "../../../redux/slices/auth";

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              Heroes App
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Link to={"/search"} className="nav-link">
                Buscar heroe
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/marvelHeroes"} className="nav-link">
                Marvel
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/dcHeroes"} className="nav-link">
                DC
              </Link>
            </Nav.Item>
          </Nav>
          <NavbarCollapse className="justify-content-end gap-2">
            <Navbar.Text>Ingresado como: Admin</Navbar.Text>
            <Nav.Item>
              <div
                className="d-flex justify-content-center align-items-center"
                onClick={handleLogout}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ cursor: "pointer" }}
                >
                  logout
                </span>
              </div>
            </Nav.Item>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};
