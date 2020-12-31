import PlayIcon from "../../../assets/images/play.svg";

const styles = {
  wrapper: {
    display: "flex",
    backgroundColor: "white",
    margin: "0.5rem 1.5rem",
    padding: "0.25rem 2rem",
    borderRadius: "10px",
    boxShadow: "0 5px rgba(50, 50, 50, 0.1)",
    textDecoration: "none",
  },
  playIcon: {
    height: "0.5rem",
  },
  purpleShadow: {
    backgroundColor: "rgba(149, 0, 186, 0.1)",
    height: "0.9rem",
    width: "0.9rem",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 2rem 2.5rem 1rem",
  },
  contentWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    borderLeft: "2px solid rgba(158, 158, 158, 0.25)",
  },
  circle: {
    height: "1rem",
    width: "1rem",
    borderRadius: "100%",
    border: "2.5px solid rgba(120, 120, 120, 0.5)",
    margin: "1rem"
  },
  black: {
    color: "black"
  },
  link: {
    color: "rgb(158, 158, 158)",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  subWrapper: {
    display: "flex",
  },
  appName: {
    display: "flex",
    alignItems: "center",
    color: "rgb(158, 158, 158)",
    fontSize: "0.9rem",
    fontWeight: "500",
    marginTop: "3rem"
  },
  coloredBox: {
    height: "0.75rem",
    width: "0.75rem",
    borderRadius: "5px",
    marginLeft: "0.5rem"
  }
};

const ItemCard = ({ task }) => {
  return (
    <a href={task.link} style={styles.wrapper}>
      <div style={styles.purpleShadow}>
        <img src={PlayIcon} style={styles.playIcon} alt="play icon" />
      </div>
      <div style={styles.contentWrapper}>
        <div style={styles.subWrapper}>
          <div style={styles.circle}></div>
          <div>
            <p style={styles.black}>{task.title}</p>
            <p style={styles.link}>{task.link}</p>
          </div>
        </div>
        <div>
          <p style={styles.appName}>{task.appName} <div style={{ ...styles.coloredBox, backgroundColor: task.color }} /></p>
          <div></div>
        </div>
      </div>
    </a>
  );
}

export default ItemCard;