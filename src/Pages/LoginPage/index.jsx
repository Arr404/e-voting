import "./style.css";
import React from 'react';
import {useRef, useEffect} from 'react';
import Background from "../Component/AnimatedBackground";
import Buttons from "../Component/NextButton";
import {Link} from "react-router-dom";
const Login = () =>{
    const signUp = useRef(null);
    const signIn = useRef(null);
    const container = useRef(null);
     useEffect(() => {
        const signUpButton = signUp.current;
        const signInButton = signIn.current;
        const containers = container.current;
        signUpButton.addEventListener('click', () => {
            containers.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            containers.classList.remove("right-panel-active");
        });

      }, []);

//     this.signUp = React.createRef();
//     this.signIn = React.createRef();
//     this.container = React.createRef();



    return(
        <>
            <Background/>
            <div class="container" ref={container} id="container">
            	<div class="form-container sign-up-container">
            		<form action="/#">
            			<h1>Create Account</h1>
            			<div class="social-container">
            				<a href="/#" class="social"><i class="fab fa-facebook-f"></i></a>
            				<a href="/#" class="social"><i class="fab fa-google-plus-g"></i></a>
            				<a href="/#" class="social"><i class="fab fa-linkedin-in"></i></a>
            			</div>
            			<span>use your email for registration</span>
            			<input type="text" placeholder="Name" />
            			<input type="email" placeholder="Email" />
            			<input type="password" placeholder="Password" />
            			<button>Sign Up</button>
            		</form>
            	</div>
            	<div class="form-container sign-in-container">
            		<form action="/#">
            			<h1>Sign in</h1>

            			<span>use your account</span>
            			<input type="email" placeholder="Email" />
            			<input type="password" placeholder="Password" />
						<Link to="/dashboard">
            				<button>Sign In</button>
						</Link>
            		</form>
            	</div>
            	<div class="overlay-container">
            		<div class="overlay">
            			<div class="overlay-panel overlay-left">
            				<h1>Welcome Back!</h1>
            				<p>To keep connected with us please login with your personal info</p>
            				<button class="ghost"  ref={signIn} id="signIn">Sign In</button>
            			</div>
            			<div class="overlay-panel overlay-right">
            				<h1>Hello, Friend!</h1>
            				<p>Enter your personal details and start journey with us</p>
            				<button class="ghost" ref={signUp} id="signUp">Sign Up</button>
            			</div>
            		</div>
            	</div>
            </div>
           <Buttons/>

        </>
    );
}

export default Login;
