import { signin } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { hideloading, redirectUser, showloading, showMessage } from "../utils";

const SignInScreen = {
    after_render: () => {
        document
        .getElementById('signin-form')
        .addEventListener('submit', async (e) => {
            e.preventDefault();
            showloading();
            const data = await signin({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            });
            hideloading();
            if (data.error) {
                showMessage(data.error);
            } else {
                setUserInfo(data);
                redirectUser();
            }
        });
    },
    render: () =>{
        if (getUserInfo().name) {
            redirectUser();
        }
        return `

        <div class="form-container">
        <form id="signin-form">
            <ul class="form-items">
                <li>
                    <h1>Sign-In</h1>
                </li>
                <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email">
                </li>
                <li>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password">
                </li>
                <li>
                    <button type="submit" class="primary">Signin</button>
                </li>
                <li>
                    <div>
                        new User?
                        <a href="/#/register">Create your account</a>
                    </div>
                </li>
            </ul>
        </form>
    </div>
        `;
    },
};

export default SignInScreen;