import { useEffect } from "react"

const Mouse = () => {

    useEffect(() => {
        const cursor = document.querySelector('.cursor') as HTMLElement;

        window.addEventListener('mousemove', (e: MouseEvent) => {
            if (cursor) {
                cursor.style.top = e.y + 'px';
                cursor.style.left = e.x + 'px';
            }
        });

        document.querySelectorAll(".hover").forEach((link) => {
             link.addEventListener("mouseover", () => {
                if (cursor) {
                    cursor.classList.add("hovered");
                }
              });
            link.addEventListener("mouseleave", () => {
                 if (cursor) {
                     cursor.style.transition = "0.3s ease-out";
                      cursor.classList.remove("hovered");
                    }
                });	
        })

    }, []);
        
  return (
    <span className="cursor"></span>
  )
}
export default Mouse