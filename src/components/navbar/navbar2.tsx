

const Navbar2 = () => {
    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navigation-bar w-nav">
            <div className="w-container">
                <a href="/" aria-current="page" className="brand-link w-nav-brand w--current" aria-label="home">
                    <img src="https://assets-global.website-files.com/65d92b1be796924374991899/65dc9cb096d1b652e6c0c615_ICON-removebg-preview.png" loading="lazy" width="28" alt="" />
                    <h1 className="brand-text">ELAXION</h1>
                </a>
                <div className="hamburger-button w-nav-button" style={{
                    "WebkitUserSelect": "text"
                }} aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                    <div className="w-icon-nav-menu">
                    </div>
                </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0">
            </div>
        </div>
    )
}

export default Navbar2