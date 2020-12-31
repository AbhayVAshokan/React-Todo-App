import LightningIcon from "../../../assets/images/lightning.svg";
import ItemCard from "../ItemCard/ItemCard";

const styles = {
  wrapper: {
    backgroundColor: "#e8e8e8",
    borderRadius: "10px",
    paddingBottom: "0.5rem"
  },
  blockCard: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: " 0 3px rgba(158, 158, 158, 0.25)"
  },
  lightningIcon: {
    padding: "0 3rem",
    width: "1.5rem",
    borderRight: "2px solid rgba(158, 158, 158, 0.25)"
  },
  title: {
    color: "#ffaa00",
    fontWeight: "600",
    paddingLeft: "2rem",
  },
  tasks: {
    display: "flex",
    margin: "auto 2rem auto auto",
    color: "rgb(158, 158, 158)",
    fontWeight: "500",
  },
  tasksArrow: {
    display: "flex",
    margin: "auto 1rem",
  },
  arrowPart: {
    backgroundColor: "rgb(158, 158, 158)",
    height: "0.5rem",
    width: "2px",
    transform: "rotate(-45deg)"
  },
  arrowRight: {
    transform: "rotate(45deg)",
    marginLeft: "0.15rem"
  }
};

const BlockCard = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.blockCard}>
        <img src={LightningIcon} style={styles.lightningIcon} alt="lightning icon" />
        <p style={styles.title}>{props.title}</p>
        <p style={styles.tasks}>
        {props.tasks.length} tasks
          <div style={styles.tasksArrow}>
            <div style={styles.arrowPart} />
            <div style={{...styles.arrowPart, ...styles.arrowRight}} />
          </div>
        </p>
      </div>
      {
        props.tasks.map((task, key) => {
          return <ItemCard task={task}/>
        })
      }
    </div>
  );
}

export default BlockCard;