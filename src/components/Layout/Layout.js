import React, { Fragment } from 'react';
import Title from '../UI/Title/Title';
import classes from '../UI/Title/Title.module.css'
import Button from '../UI/Button/Button';
import btns from '../UI/Button/Button.module.css'
import FontAwesome from '../UI/FontAwesome/FontAwesome';
import { faCoffee, faCheckSquare, faArrowAltCircleLeft, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import layoutClass from './Layout.module.css';



const Layout = (props) => {
    return (
        <Fragment>
            <main className={layoutClass.wrapper}>
                <div className={layoutClass.main}>
                    <div className={layoutClass.main_left}>
                        <Title titleClass={classes.Title}>CAYCE POLLARD</Title>
                        <h4 className={layoutClass.subtitle}>MULTIVERSE ANALYST</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis tempore illo! Consequatur officiis quas temporibus reiciendis suscipit soluta ab!</p>

                        <ul className={layoutClass.ul}>
                            <li><Button Link={btns.Link} link='/more'>Work</Button></li>
                            <li><Button Link={btns.Link} link='/more'>About</Button></li>
                            <li><Button Link={btns.Link} link='/more'>Contact</Button></li>
                        </ul>

                    </div>
                    <div className={layoutClass.main_right}></div>
                </div>
            </main>

            <footer className={layoutClass.footer}>
                <div className={layoutClass.footer_left}>
                    <ul>
                        <li>
                            <FontAwesome iconLink="/cofee" icon={faCoffee} />
                        </li>
                        <li>
                            <FontAwesome iconLink="/check" icon={faCheckSquare} />
                        </li>
                        <li>
                            <FontAwesome iconLink="/cofee" icon={faArrowAltCircleLeft} />
                        </li>
                        <li>
                            <FontAwesome iconLink="/check" icon={faAlignJustify} />
                        </li>
                    </ul>
                </div>
                <div className={layoutClass.footer_right}>
                    <p>© Cayce Pollard. All rights reserved.</p>
                </div>
            </footer>
            
        </Fragment>
    );
};

export default Layout;