import React, {useState} from "react";

const Form = (props) => {
    const [firstName, setFirstName]= useState("");
    const [firstNameError, setFirstNameError]= useState("");
    const [lastName, setLastName]= useState("");
    const [lastNameError, setLastNameError]= useState("");
    const [email, setEmail]= useState("");
    const [emailError, setEmailError]= useState("");
    const [password, setPassword]= useState("");
    const [passwordError, setPasswordError]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [confirmPasswordError, setConfirmPasswordError]= useState("");

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
        if(event.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (event.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters!")
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
        if(event.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if (event.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters!")
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
        if(event.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (event.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!")
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
        if(event.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (event.target.value.length < 5) {
            setPasswordError("Password must be at least 8 characters!")
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        if(event.target.value !== password ) {
            setConfirmPasswordError("Password and Confirm Password must match!");
        } else {
            setConfirmPasswordError("");
        }
    }
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange= { handleFirstName } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange= { handleLastName } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={email} onChange= { handleEmail } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" value={password} onChange= { handlePassword } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="text" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange= { handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
            </form>
            <div>
            <h3>Your Form Data</h3>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>
        </div>
        </div>
    )
}

export default Form;