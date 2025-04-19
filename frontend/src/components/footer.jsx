import React from 'react'

const Footer = () => {
    return(
        <footer>
            <p>&copy;{new Date().getFullYear()} prakhar bajpai.</p>
            <p> All rights reserved.</p>
            <div className='social-links'>
                <a href="https://www.instagram.com/iprakharbajpai25/" target="_blank"><img src="\src\assets\instagram.png" alt="instagram-iprakharbajpai25" /></a>
                <a href="https://x.com/2503prakhar/" target="_blank"><img src="\src\assets\twitter.png" alt="twitter-2503prakhar" /></a>
                <a href="https://github.com/iprakhar25/" target="_blank"><img src="\src\assets\github.png" alt="github-iprakhar25" /></a>
                <a href="https://www.linkedin.com/in/prakhar-bajpai-559683235/" target="_blank"><img src="\src\assets\linkedin.png" alt="linkedIn" /></a>
            </div>
        </footer>
    )
}

export default Footer;