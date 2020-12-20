import todo from '../images/todo.png';
import gallery from '../images/gallery.png';
import pc_shop from '../images/pc_shop.png';
import meme from '../images/meme.png';

function  Projects() {
    return (
        <section id="projects">
            <div className="skill-project todo">
                <img src={todo} alt="Todo"/>
                <div className="skill-project__description">
                    <h3>Todo</h3>
                    <p>JS</p>
                    <div className="skill-project__links">
                        <button><a href="https://oscar-sherelis-todo.netlify.app/">Demo</a></button>
                        <button><a href="https://github.com/Oscar-Sherelis/todo">Code</a></button>
                    </div>
                </div>
            </div>
            <div className="skill-project gallery">
                <img src={gallery} alt="Gallery"/>
                <div className="skill-project__description">
                    <h3>Gallery</h3>
                    <p>JS API</p>
                    <div className="skill-project__links">
                        <button><a href="https://oscar-sherelis-gallery.netlify.app/">Demo</a></button>
                        <button><a href="https://github.com/Oscar-Sherelis/gallery">Code</a></button>
                    </div>
                </div>
            </div>
            <div className="skill-project pc-shop">
                <img src={pc_shop} alt="PC shop"/>
                <div className="skill-project__description">
                    <h3>PC shop</h3>
                    <p>Vue</p>
                    <div className="skill-project__links">
                        <button><a href="https://oscar-sherelis-pc-shop.netlify.app/">Demo</a></button>
                        <button><a href="https://github.com/Oscar-Sherelis/vuejs-desktops">Code</a></button>
                    </div>
                </div>
            </div>
            <div className="skill-project pc-shop">
                <img src={meme} alt="PC shop"/>
                <div className="skill-project__description">
                    <h3>Meme generator</h3>
                    <p>JS</p>
                    <div className="skill-project__links">
                        <button><a href="https://meme-generator-oscar.netlify.app/">Demo</a></button>
                        <button><a href="https://github.com/Oscar-Sherelis/meme_generator">Code</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;