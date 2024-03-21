import { useState } from "react"

export default function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const isSubmitDisabled = !(username && password);


    return (
        <div>
            <form>
                <label>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                </label>

                <label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </label>
                <button onClick={(e) => e.preventDefault()} type="submit" disabled={isSubmitDisabled}>Submit</button>
            </form>
        </div>
    )
}