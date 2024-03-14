const ContentWrapper = ({ children, className="" }) => {
    return <div className={`${className} max-w-screen-xl mx-auto px-5`}>{children}</div>
}

export default ContentWrapper