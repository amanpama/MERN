import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstNameError] = useState("");

    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");





    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, firstnameError, lastname, lastnameError, email, emailError, password, passwordError, confirmpassword, confirmpasswordError };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstName("name is required!");
        } else if (e.target.value.length < 3) {
            setFirstNameError("First Name must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstName("name is required!");
        } else if (e.target.value.length < 3) {
            setFirstNameError("Last Name must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPassword("name is required!");
        } else if (e.target.value.length < 3) {
            setFirstNameError("Last Name must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setPassword(e.target.value);
        if (password != confirmpassword) {
            setPasswordError("password needs to match!");
        } else if (password = confirmpassword) {
            setPasswordError("matched it");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (confirmpassword !== password) {
            setConfirmPassword("password needs to match!");
        } else if (confirmpassword = password) {
            setConfirmPasswordError("matchedd it!");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {
                        firstnameError ?
                            <p style={{ color: 'red' }}>{firstnameError}</p> :
                            ''
                    }
                </div>
                <div>
                <label>Last Name: </label>
                <input type="text" onChange={handleLastName} />
                {
                    lastnameError ?
                        <p style={{ color: 'red' }}>{lastnameError}</p> :
                        ''
                }
                </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                        <p style={{ color: 'red' }}>{emailError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword} />
                {
                    passwordError ?
                        <p style={{ color: 'red' }}>{passwordError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={handleConfirmPassword} />
                {
                    confirmpasswordError ?
                        <p style={{ color: 'red' }}>{confirmpasswordError}</p> :
                        ''
                }
            </div>
            <input type="submit" value="Create User" />
            <div>
                {firstname}
            </div>
            <div>
                {lastname}
            </div>
            <div>
                {email}
            </div>
            <div>
                {password}
            </div>
            <div>
                {confirmpassword}
            </div>
        </form>
    );
}
export default UserForm;

