import classes from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>Blog</div>
        <a href="/contact" className={classes.contact}>お問い合わせ</a>
      </header>
    </div>
  );
}