import React from 'react';

const SignUp = () => {
    return (
        <>
            <div className='homeHead'>
                <h1 style={{ fontSize: "3rem", fontWeight: "900", color: "white", textAlign: "center" }}>Unlimited movies, TV shows and more</h1>
                <p style={{ fontSize: "1.6rem", fontWeight: "500", color: "white", textAlign: "center" }}>Watch anywhere. Cancel anytime.</p>
                <div>
                    <p style={{ fontSize: "1.6rem", fontWeight: "500", color: "white", textAlign: "center" }}>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input
                                className='language'
                                placeholder='Email Address'
                                style={{ width: "300px", height: "50px", background: "#0a0a0ac9" }}
                            />
                            <button style={{ width: "150px", height: "50px", fontSize: "23px" }} className='signInBtn'>{`Get Started ${">"}`}</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <HomeDarkSection /> */}
        </>
    )
}

export default SignUp