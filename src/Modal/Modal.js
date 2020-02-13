import React from 'react'
import './Modal.css'
import './Login.css'



const Modal = (props) => {
    
    
    const login = () =>{
       return( 
       <div id="myModal" class="modal">
        <div class="modal-content">
            <a onClick={props.loginModalClick}><span class="close">&times;</span></a>
            <p><b>cutTOGO</b></p>
            
            <label for="uname"><b>Email</b></label>
            
            <input type="text" placeholder="Enter Username" name="uname" required></input>
            
            <label for="psw"><b>Adgangskode</b></label>
            
            <input type="password" placeholder="Enter Password" name="psw" required></input>
            
            <button id="loginBTN" type="submit">Login</button>
        </div>
    </div>
       );
    }

    const create = () =>{




    }
    
    
    
    
    
    
    return (
        <div>
            {props.loginModal === true ?
            login()
                : null}
        </div>
    );
}

export default Modal