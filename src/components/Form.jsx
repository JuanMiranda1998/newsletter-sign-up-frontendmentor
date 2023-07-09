import { useState } from 'react';
import './Form.css'


export function Form (){
    let [email, setEmail] = useState('');
    let [errMsg, setErrMsg] = useState('');
    let [submitted, setSubmitted] = useState(null);

    const validateEmail = email => { 
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return (pattern.test(email));
    };  

    const submitHandler = e =>{
        e.preventDefault();
        if (email === ''){
            e.target.emailInput.classList.add('error');
            setErrMsg('No email entered');
        } else {
            if (validateEmail(email)){
                e.target.emailInput.classList.remove('error');
                setErrMsg('');
                setSubmitted(true);
            } else { 
                e.target.emailInput.classList.add('error');
                setErrMsg('Valid email required');
            } 
        }
    }

return submitted? (
    <div className="formCard-Submitted">
        <div className='formCard-submittedContent'>
            <img className='formCard-successIcon' src="images\icon-success.svg" />
            <h1 className='formCard-submittedTitle'>Thanks for subscribing!</h1>
            <p className='formCard-submittedText'>A confirmation email has been sent to <span className='formCard-textEmail'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <button className='formCard-dismissButton' onClick={()=>setSubmitted(null)}>Dismiss message</button>
    </div>
    ):(
        <div className='formCard'>
            <picture className='formCard-Picture'>
                <source media='(min-width:768px)' srcSet="images\illustration-sign-up-desktop.svg" />
                <img src="images\illustration-sign-up-mobile.svg" alt="Window screen illustration" />
            </picture>
            <div className="formCard-Content">
                <h1 className='formCard-title'>Stay updated!</h1>
                <p className='formCard-text'>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className='formCard-list'>
                    <li className='formCard-listElement'>
                        <img src="images\icon-list.svg"/>
                        Product discovery and building what matters
                    </li>
                    <li className='formCard-listElement'>
                        <img src="images\icon-list.svg"/>
                        Measuring to ensure updates are a success
                    </li>
                    <li className='formCard-listElement'>
                        <img src="images\icon-list.svg"/>
                        And much more!
                    </li>
                    <form className='formCard-form' onSubmit={submitHandler}>
                        <label className='formCard-label' htmlFor="email">Email address <p className='formCard-errorMsg'>{errMsg}</p></label>
                        <input className='formCard-input' name='emailInput' type="text" id="email" placeholder='email@company.com' autoComplete='off' value={email} onChange={e =>{
                            setEmail(e.target.value);
                            e.target.classList.remove('error');
                        }
                        }/>
                        <button className='formCard-button' id='submitFormButton'>Subscribe to monthly newsletter</button>
                    </form>
                </ul>
            </div>    
        </div>
    )
}