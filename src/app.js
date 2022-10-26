import './app.css';

const app = () => {
    const handleClick = () => {
        let login = document.getElementById('input-login').value.toString();
        let password = document.getElementById('input-password').value.toString();

        let JSONObject = {
            login: login,
            password: password
        };

        alert(JSON.stringify(JSONObject));
    }

    return (
        <div className="app">
            <input type="text" id="input-login"/>
            <input type="text" id="input-password"/>
            <button onClick={handleClick}>
                Say in JSON
            </button>
        </div>
    );
}

export default app;
