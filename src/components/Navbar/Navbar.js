import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom"
import Modal from 'react-modal';
import { useState } from 'react/cjs/react.development'
import { auth } from "../../firebase/fbconfig"
import { Search } from '../Search.js'
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    overlay: {
        width: '900px',
        height: '700px',
        backgroundColor: "rgba(0,0,0,0.5)",
        margin: "150px auto",
    }
};
export const Navbar = (props) => {
    const [isLogin, setLogin] = useState(false)
    const [isSign, setSign] = useState(false)
    const [flag, setFlag] = useState(false)
    const history = useHistory()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setFlag(true)
                setLogin(false)
                setSign(false)
            } else {
                setFlag(false)
            }
        })
    }, [])
    const divEl = flag ? (
        <div style={{ display: "flex", flexDirection: 'row', gap: 15 }}>
            <button style={{ padding: 10, borderRadius: 8, fontSize: 20 }}>
                <Link to="/favorites" style={{ color: "red", textDecoration: "none" }}>Favorites</Link>
            </button>
            <button onClick={() => auth.signOut()} style={{ padding: 10, borderRadius: 8, fontSize: 20 }}>Logout </button>
        </div>
    ) : (
            <div style={{ display: "flex", flexDirection: 'row', gap: 15 }}>
                <button onClick={() => setLogin(true)} style={{ padding: 10, borderRadius: 8, fontSize: 20 }}>Login </button>
                <button onClick={() => setSign(true)} style={{ padding: 10, borderRadius: 8, fontSize: 20 }}>SignUp </button>
            </div>
        )
    return (
        <div style={{ display: "flex", backgroundColor: "rgba(30,30,30,0.7)", justifyContent: "space-between", color: "white", padding: 10, alignItems: "center" }}>
            <div style={{ color: "white", borderRadius: 40, height: 80, width: 80, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                   
                </Link>
            </div>
            <Modal
                isOpen={isSign}
                shouldCloseOnOverlayClick={true}
                style={modalStyles}
            >
                <SignUp/>
            </Modal>
            <Modal
                isOpen={isLogin}
                shouldCloseOnOverlayClick={true}
                style={modalStyles}
            >
                <Login setLogin={setLogin}/>
            </Modal>
            <Modal>
                
            </Modal>
            <Search />
            {
                divEl
            }
        </div>
    )
}