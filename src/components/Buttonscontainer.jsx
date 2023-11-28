import styles from "./Buttonscontainer.module.css";
const Buttonscontainer = ({ changedisplay }) => {
  let buttonsval = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "C",
    "=",
    "/",
    "B",
  ];
  return (
    <div className={styles.buttonscontainer}>
      {buttonsval.map((val) => {
        {
          return (
            <button
              className={styles.btn}
              onClick={() => {
                changedisplay(val);
              }}
            >
              {val}
            </button>
          );
        }
      })}
    </div>
  );
};
export default Buttonscontainer;
