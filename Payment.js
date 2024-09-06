import './payment.css'
import scaner from './assets/scaner.jpg';
import React, { useState } from 'react';

function Payment() {
    const [showForm, setShowForm] = useState(false);
    const [showupi, setShowupi] = useState(false);
    const [showNetBanking, setShowNetBanking] = useState(false);

    const handleClick = () => {
        setShowForm(true);
        setShowupi(false);
        setShowNetBanking(false);
    };
    const UPIClick = () => {
        setShowForm(false);
        setShowupi(true);
        setShowNetBanking(false);
    };

    const NetBankingClick = () => {
        setShowForm(false);
        setShowupi(false);
        setShowNetBanking(true);
    };



    return (
        <>
            <center>
                <div className="scaner">
                    <img src={scaner} alt="image not found" height={250} />
                    <h1>Scan for Payment</h1>

                </div>
            </center>
            <div className='opt_payment'>
                <h3>Select your payment option</h3>
                <p>  3 options available</p>
                <form>
                    <div className='CreditCard'>
                        <input onClick={handleClick} type='radio' name='pay' /> Credit/Dedit Card<br />
                        {showForm && (
                            <form>
                                <label>Card Number: <input type="text" /></label> <br/>
                                <label>Expiry Date:<input type="text" /></label><br/>
                                <label> CVV:<input type="text" /></label><br/>
                                <label>Name On Card : <input type="text" /></label> <br/>
                                <button type="submit">Submit</button>
                            </form>
                        )}
                    </div>

                    <div className='UpiApp'>
                        <input onClick={UPIClick} type='radio' name='pay' /> UPI Payment<br />
                        {showupi && (
                            <form>
                                <h3>UPI App</h3>
                                <label> <input type="radio" name='app' /> PhonePe</label><br/>
                                <label> <input type="radio" name='app'/> Google Pay</label><br/>
                                <label> <input type="radio" name='app' /> Paytm</label><br/>
                                <label> <input type="radio" name='app' /> Amzon Pay</label><br/>

                                <h3>Other Way</h3>
                                <label> Enter UPI ID:<input type="text" /></label>

                            </form>
                        )}
                    </div>

                    <div className='NetBanking'>

                        <input onClick={NetBankingClick} type='radio' name='pay' /> NetBanking<br />
                        {showNetBanking && (
                            <form>
                                <select>
                                    <option>Select bank</option>
                                    <option>Bank Of Baroda</option>
                                    <option>State Bank of India </option>
                                    <option>Central Bank of India</option>
                                    <option>HDFC Bank</option>
                                </select>

                            </form>
                        )}
                    </div>
                </form>



            </div>

        </>
    );
}

export default Payment;