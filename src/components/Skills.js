import bootstrap from '../images/bootstrap.svg';
import vuejs from '../images/vue.svg';
import javascript from '../images/javascript.svg';
import firebase from '../images/firebase.svg';
import mongo from '../images/mongo.svg';
import mysql from '../images/mysql.svg';
import nodejs from '../images/nodejs.svg';
import php from '../images/php.svg';
import sass from '../images/sass.svg';
import laravel from '../images/laravel.svg';
import reactImg from '../images/react.svg';

function Skills () {
    return (
        <div className="skills">
            <img src={bootstrap} title="Bootstrap" alt="Bootstrap"/>
            <img src={vuejs} title="Vue js" alt="Vue js"/>
            <img src={reactImg} title="React" alt="React"/>
            <img src={javascript} title="JS" alt="JS"/>
            <img src={firebase} title="Firebase" alt="Firebase"/>
            <img src={mongo} title="Mongo" alt="Mongo"/>
            <img src={mysql} title="MySQL" alt="MySQL"/>
            <img src={nodejs} title="Node js" alt="Node js"/>
            <img src={php} title="PHP" alt="PHP"/>
            <img src={sass} title="SASS" alt="SASS"/>
            <img src={laravel} title="Laravel" alt="Laravel"/>
          </div>
    );
}

export default Skills;