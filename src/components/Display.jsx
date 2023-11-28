import styles from "./Display.module.css";
const Display = ({ display }) => {
  return (
    <>
      <input type="text" value={display} className={styles.display} readOnly />
    </>
  );
};
export default Display;
