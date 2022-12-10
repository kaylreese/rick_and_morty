import React from "react";
import { validation } from "./validation";
import styles from "./Form.module.css"

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    });

    function handleInputChange(e){
        setUserData({
            ...userData, [e.target.name]: e.target.value
        });

        setErrors(
            validation({
                ...userData, [e.target.name]: e.target.value
            })
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return (
        <div className={styles.containerlogin}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.titulo}>Welcome</h2>
                <div>
                    <label className={styles.label} htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Ingresar Usuario" 
                        value={userData.username} onChange={handleInputChange} className={errors.username && 'danger'}/>
                    { 
                        errors.username && <p className="danger">{errors.username}</p>
                    }
                </div>
                <div>
                    <label className={styles.label}>Password:</label>
                    <input type="password" id="password" name="password" placeholder="Ingresar Password" 
                    value={userData.password} onChange={handleInputChange} className={errors.password && 'danger'}/>
                    {
                        errors.password &&<p className="danger">{errors.password}</p>
                    }
                </div>
                <button className={styles.btnlogin} type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}