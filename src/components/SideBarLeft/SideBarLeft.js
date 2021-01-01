import TodayIcon from "../../assets/images/today.svg";
import FolderIcon from "../../assets/images/folder.svg";
import ArchivedIcon from "../../assets/images/archived.svg";
import UncategorizedIcon from "../../assets/images/uncategorized.svg";

const styles = {
  wrapper: {
    top: "0",
    bottom: "0",
    position: "sticky",
    width: "calc(min(30vw, 600px))",
    height: "100vh",
    borderRight: "2px solid rgba(176, 176, 176, 0.25)",
    backgroundColor: "white",
    paddingTop: "30px",
  },
  icon: {
    height: "1.5rem",
    marginRight: "1rem"
  },
  cardStyle: {
    display: "flex",
    alignItems: "center",
    margin: "1rem 0",
    fontSize: "1.1rem"
  },
  dropDown: {
    display: "flex",
    margin: "auto 2rem auto auto",
    transform: "rotate(-90deg)"
  },
  dropDownLeft: {
    width: "3px",
    height: "0.5rem",
    backgroundColor: "#b8b8b8",
    transform: "rotate(-45deg)",
  },
  dropDownRight: {
    transform: "rotate(45deg)"
  }
}

const SideBarLeft = () => {
  return (
    <div style={styles.wrapper}>
      <ul>
        <li style={styles.cardStyle}><img src={TodayIcon} style={styles.icon} alt="today icon" />Today<div style={styles.dropDown}><div style={styles.dropDownLeft} /><div style={{ ...styles.dropDownLeft, ...styles.dropDownRight }} /></div></li>
        <li style={styles.cardStyle}><img src={UncategorizedIcon} style={styles.icon} alt="uncategorized icon" />Uncategorized<div style={styles.dropDown}><div style={styles.dropDownLeft} /><div style={{ ...styles.dropDownLeft, ...styles.dropDownRight }} /></div></li>
        <li style={styles.cardStyle}>
          <img src={FolderIcon} style={styles.icon} alt="folder icon" />Projects<div style={styles.dropDown}><div style={styles.dropDownLeft} /><div style={{ ...styles.dropDownLeft, ...styles.dropDownRight }} /></div></li>
        <li style={styles.cardStyle}><img src={ArchivedIcon} style={styles.icon} alt="folder icon" />Show Archived<div style={styles.dropDown}><div style={styles.dropDownLeft} /><div style={{ ...styles.dropDownLeft, ...styles.dropDownRight }} /></div></li>
      </ul>
    </div>
  );
}

export default SideBarLeft;