import todo from "../images/todo.png";


function  Projects() {
    return (
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
    )
}

export default Projects;