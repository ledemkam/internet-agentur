const SocialNetwork = () => {
    const anim = () => {
        const icons = document.querySelectorAll('.social-network a');
        icons.forEach(icon => {
            icon.addEventListener('mouseover', (e) => {
                    const mouseEvent = e as MouseEvent;
                    (icon as HTMLElement).style.transform = `translate(${mouseEvent.offsetX - 20}px, ${mouseEvent.offsetY - 13}px)`;    
            
            });
            icon.addEventListener('mouseleave', () => {
                (icon as HTMLElement).style.transform = '';
            });
        })    
    }
  return (
    <div className="social-network">
        <ul className="content">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} onFocus={anim}>
            <li><i className="fab fa-facebook-f"></i></li>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} onFocus={anim}>
            <li><i className="fab fa-twitter"></i></li>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} onFocus={anim}>
            <li><i className="fab fa-instagram"></i></li>
            </a>
        </ul>
    </div>
  )
}
export default SocialNetwork