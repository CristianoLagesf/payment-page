import React, { useRef, useState } from 'react';
import classes from './FormPayment.module.css';


const isEmpy = value => value.trim() === '';
const is16Chars = value => value.trim().length === 16;

const FormPayment = () => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        cardNumber: true,
        cardHolder: true,
        expMM: true,
        expYY: true,
        cvv: true,
    })
    const nameInputRef = useRef()
    const cardNumberInputRef = useRef()
    const expMMInputRef = useRef()
    const expYYInputRef = useRef()
    const cvvInputRef = useRef()

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredCardNumber = cardNumberInputRef.current.value;
        const enteredExpMM = expMMInputRef.current.value;
        const enteredExpYY = expYYInputRef.current.value;
        const enteredCvv = cvvInputRef.current.value;

        const enteredNameIsValid = !isEmpy(enteredName);
        const enteredCardNumberIsValid = is16Chars(enteredCardNumber);
        const enteredExpMMIsValid = !isEmpy(enteredExpMM);
        const enteredExpYYIsValid = !isEmpy(enteredExpYY);
        const enteredCvvIsValid = !isEmpy(enteredCvv);

        setFormInputsValidity({
            cardNumber: enteredCardNumberIsValid,
            cardHolder: enteredNameIsValid,
            expMM: enteredExpMMIsValid,
            expYY: enteredExpYYIsValid,
            cvv: enteredCvvIsValid,
        })
        const formIsValid =
            enteredNameIsValid &&
            enteredCardNumberIsValid &&
            enteredExpMMIsValid &&
            enteredExpYYIsValid &&
            enteredCvvIsValid;
        if (!formIsValid) {
            return;
        }
    }
    const nameControlClasses = `${classes.control} ${formInputsValidity.cardHolder ? '' : classes.invalid}`
    const cardNumberControlClasses = `${classes.control} ${formInputsValidity.cardNumber ? '' : classes.invalid}`
    const expMMControlClasses = `${classes.expDate} ${formInputsValidity.expMM ? '' : classes.invalid}`
    const expYYControlClasses = `${classes.expDate} ${formInputsValidity.expYY ? '' : classes.invalid}`
    const cvvControlClasses = `${classes.expDate} ${formInputsValidity.cvv ? '' : classes.invalid}`

    return (
        <>
            <div className="flex justify-center w-[500px] tracking-wide">
                <div className="flex justify-self-center self-center ">
                    <form onSubmit={confirmHandler}>
                        <div className={nameControlClasses}>
                            <label htmlFor="cardName">CARDHOLDER NAME</label>
                            <input type="text" id="cardName" placeholder='e.g. Maria ' ref={nameInputRef} />
                        </div>
                        <div className={cardNumberControlClasses}>
                            <label htmlFor="cardNumber">CARD NUMBER</label>
                            <input type="text" id="cardNumber" placeholder='e.g. 1234 5678 9123 0000 ' ref={cardNumberInputRef} />
                        </div>
                        <div className={classes.flex}>
                            <div className={expMMControlClasses}>
                                <label htmlFor="expDate">EXP. DATE (MM/YY)</label>
                                <input type="number" id="expDate" placeholder='MM' ref={expMMInputRef} />
                                <input type="number" id="expDate" placeholder='YY' ref={expYYInputRef} />
                            </div>
                            <div className={cvvControlClasses}>
                                <label htmlFor="cvc">CVC</label>
                                <input type="number" id="cvc" placeholder='CVC' ref={cvvInputRef} />
                            </div>
                        </div>
                        <div className={classes.actions}>
                            <button className={classes.submit}>Confirm</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );

};



export default FormPayment