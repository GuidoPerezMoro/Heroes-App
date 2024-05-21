import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // Estado local para controlar la visibilidad de la contraseña
  const [showPass, setShowPass] = useState(false);

  // Uso del hook useForm para manejar el estado del formulario de inicio de sesión
  const { values, handleChange } = useForm({
    user: "",
    password: "",
  });
  const { user, password } = values;

  // Despachador de acciones de Redux
  const dispatch = useAppDispatch();
  // Función navigate para la navegación
  const navigate = useNavigate();

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Obtener los datos de usuario desde un archivo JSON simulado
    const response = await fetch("/user.json");
    const usersData = await response.json();
    // Buscar el usuario en los datos de usuario
    const userFound = usersData.users.find(
      (u: { username: string; password: string }) =>
        u.username === user && u.password === password
    );
    // Si se encuentra el usuario, iniciar sesión y redirigir al usuario a la página de inicio
    if (userFound) {
      dispatch(setLogin(user));
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>
        <span
          style={{ fontSize: "10vh" }}
          className="material-symbols-outlined"
        >
          person
        </span>

        <Form onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3 p-2">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="user"
              value={user}
              type="text"
              placeholder="Usuario"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 p-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={handleChange}
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
              required
            />
          </Form.Group>
          <div className="m-3 d-flex justify-content-center align-items-center">
            <Form.Check
              type="switch"
              onChange={() => setShowPass(!showPass)}
              id="show-password"
              label="Mostrar contraseña"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
