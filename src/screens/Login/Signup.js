import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

	const navigate = useNavigate();
    const [email , setemail] = useState()
    const [password , setpassword] = useState()

    const onPressSignUp = () => {
        if(!email || !password){
            alert('Fill all the fields!')
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Account created succesfully!')
                navigate('/home')
            })
            .catch((error) => {
                    console.log('sign up error', error)
                    alert(error.message)
            });
        }        
    }

	return (
		<div>
			<div style={{
				backgroundColor: '#ffff', width: '80%',
				margin: '0 auto', marginTop: '10%', borderRadius: 10, padding: '5%'
			}}>
                	<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<img style={{ marginBottom: 20, width: '50%', textAlign: 'center' }} src="https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg" className="img-fluid" alt="..."></img>
                <h1 style={{color: 'black', fontFamily: 'cursive'}}  >Sign Up </h1>

                </div>
				<form>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">Email </label>
						<input
                        onChange={(e) => setemail(e.target.value)}
						value={email}
                         type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
						<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">Password</label>
						<input
                        onChange={(e) => setpassword(e.target.value)}
						value={password}
                        type="password" className="form-control" id="exampleInputPassword1" />
					</div>

					<button onClick={onPressSignUp} type="submit" className="btn btn-primary">Signup</button>

				</form>
			</div>
		</div>
	);
};

export default Signup;
