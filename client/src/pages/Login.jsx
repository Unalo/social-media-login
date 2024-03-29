import Google from '../img/google.png';
import Facebook from '../img/facebook.png';
import Github from '../img/github.png';

const Login = () => {
    return (
        <div className="login">
            <h1 className="loginTittle"> Choose a Login Method </h1>
            <div className="wapper">
                <div className="left">
                    <div className="loginButton google">
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button className='submit' type="submit">login</button>
                </div>
            </div>

        </div>
    )
}

export default Login;