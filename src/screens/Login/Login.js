import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import main from '../../assets/ee.jpg'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

	const navigate = useNavigate();
const [email , setemail] = useState()
const [password , setpassword] = useState()
	
    const onPressLogin = async () => {
    //    await signInWithEmailAndPassword(auth, email, password)
    //         .then(() => {
                    navigate('/home')
            // })
            // .catch((err) => {
            //     if (email === '' || password === '') {
            //         alert('Please fill out all the fields')
            //     }
            //     else {
            //         console.log('sign in error',err.message );
            //         alert(err.message)
            //     }
            // });
    }
	return (
		<div>
			<div style={{
				backgroundColor: '#ffff', width: '80%',
				margin: '0 auto', marginTop: '10%', borderRadius: 10, padding: '5%'
			}}>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<img style={{ borderRadius: 10, marginBottom: 20, width: '50%', height: '10%' , textAlign: 'center' }} src={main} className="img-fluid" alt="..."></img>
				<h1 style={{color: 'black', fontFamily: 'cursive'}}  >Login </h1>
				</div>
				<form>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">Email </label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
						onChange={(e) => setemail(e.target.value)}
						value={email} />
						<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1"
						value={password}
						onChange={(e) => setpassword(e.target.value)} />
					</div>

					<button onClick={onPressLogin} type="submit"  className=" mt-5 btn btn-primary">Login</button>

					<div className="mt-3 form-check">
						<label className="form-check-label" for="exampleCheck1">Dont have an account ? <a onClick={() => navigate('/signup')} href='#'>SignUp</a> </label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
