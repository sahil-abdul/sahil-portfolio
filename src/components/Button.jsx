function Button({ children,fun}) {
    
    return (
        <button className="bg-[#9f3878cb] shadow-[0_0_10px_#ff009d]  p-3 rounded-xl tracking-wide text-xl  hover:scale-110 transition-all duration-500 flex gap-2 justify-center items-center" onClick={fun}>
            {children}
        </button>
    )
}

export default Button