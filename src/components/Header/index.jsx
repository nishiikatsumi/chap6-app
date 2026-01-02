import { Routes, Route, Link } from 'react-router-dom';
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>
		      <Link to='/'>Blog</Link>
		    </div>
		    <div className={classes.contact}>
		      <p>お問い合わせ</p>
		    </div>
      </header>
    </div>
  );
}