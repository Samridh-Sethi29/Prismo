import { useAuth } from "../../context/AuthContext";

function Home() {

    const { user, logout } = useAuth();

    return (

        <div>

            <h1>Prismo Home</h1>

            {
                user ? (
                    <>
                        <h2>Welcome {user.username}</h2>

                        <button onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <h2>Please Login</h2>
                )
            }

        </div>

    );
}

export default Home;