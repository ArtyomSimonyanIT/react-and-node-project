import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="flex-container1">
                <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://vk.com/"><i className="fa-brands fa-vk"></i></a>
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className="flex-container2">
                © This site was created by SFS students
            </div>
        </footer>
    )
}

export default Footer;