import React from 'react'

export const Footer = () => {
    let footerstyle={
            position: "relative",
            top: "20vh",
            width: "100%"
    }
    return (
        <footer className="bg-dark  text-light" style={footerstyle}>
            <p className="text-center">
                Copyright &copy; MyTodolist.com
            </p>
        </footer>
    )
}

