import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await register(formData);

            alert(res.data.message);

            navigate("/login");
        } catch (err) {
    console.log(err);
    console.log(err.response);
    console.log(err.response?.data);

    alert(JSON.stringify(err.response?.data));
}
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;