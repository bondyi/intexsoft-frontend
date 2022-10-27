import './app.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

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
            <TextField id="input-login" variant="outlined" placeholder="Login"/>
            <TextField id="input-password" variant="outlined" placeholder="Password"/>
            <Button id="button-say-in-json" variant="contained" onClick={handleClick}>
                Say in JSON
            </Button>
        </div>
    );
}

export default app;
