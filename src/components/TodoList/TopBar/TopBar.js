import ArrowIcon from "../../../assets/images/arrow.svg";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 5%",
  },
  title: {
    color: "#262626",
    fontSize: "2.25rem",
    fontWeight: "500",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    color: "#636363",
    fontSize: "1rem",
    fontWeight: "500",
  },
  navArrow: {
    height: "15px",
    fill: "red",
    margin: "-5px 10px 10px 10px",
  },
  arrowRight: {
    transform: "scaleX(-1)"
  }
}

const TopBar = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.btn}>
        <img src={ArrowIcon} style={styles.navArrow} alt="arrow left"/>
        <p>Archive</p>
      </div>
      <div style={styles.title}>Today</div>
      <div style={styles.btn}>
        <p>This Week</p>
        <img src={ArrowIcon} style={{ ...styles.navArrow, ...styles.arrowRight }} alt="arrow right"/>
      </div>
    </div>
  );
}

export default TopBar;