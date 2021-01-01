const styles = {
  wrapper: {
    display: "block",
    top: "0",
    position: "sticky",
    width: "calc(min(30vw, 600px))",
    height: "100vh",
    borderLeft: "2px solid rgba(176, 176, 176, 0.25)",
    backgroundColor: "white",
    padding: "30px 1rem",
  },
  planButton: {
    backgroundColor: "#623DD0",
    border: "1px solid #623DD0",
    color: "white",
    width: "100%",
    borderRadius: "10px",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  arrowIcon: {
    display: "flex",
    margin: "0 1rem",
  },
  arrowLeft: {
    width: "3px",
    height: "0.5rem",
    backgroundColor: "white",
    transform: "rotate(-45deg)",
  },
  arrowLeftSecond: {
    width: "3px",
    height: "0.5rem",
    backgroundColor: "#623DD0",
    transform: "rotate(-45deg)",
  },
  arrowRight: {
    transform: "rotate(45deg)"
  },
  dayButton: {
    color: "#623DD0",
    fontWeight: "600",
    border: "2px solid rgba(98, 61, 208, 0.1)",
    backgroundColor: "white",
    padding: "0.4rem 1.2rem",
    borderRadius: "10px",
    maxHeight: "3rem",
  },
  secondArrow: {
    backgroundColor: "white",
    border: "2px solid rgba(98, 61, 208, 0.1)",
    height: "3rem",
    borderRadius: "10px",
    color: "#623DD0",
    padding: "0.4rem 1.2rem",
    display: "flex",
    alignItems: "center",
    transform: "rotate(90deg)"
  },
  calendar: {
    backgroundColor: "#f1f1f1",
    borderRadius: "20px",
    height: "100%"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0"
  },
  date: {
    fontWeight: "bold",
    overflow: "hidden",
    whiteSpace: "nowrap",
    padding: "1rem 0"
  },
  directionRight: {
    transform: "rotate(-90deg)"
  }
}

const SideBarRight = () => {
  return (
    <div style={styles.wrapper}>
      <button style={styles.planButton}><div style={styles.arrowIcon}><div style={styles.arrowLeft} /><div style={{ ...styles.arrowLeft, ...styles.arrowRight }} /></div>Plan your week<p /></button>
      <div style={styles.row}>
        <button style={styles.dayButton} >Today</button>
        <div style={{ ...styles.arrowIcon, ...styles.secondArrow }}><div style={styles.arrowLeftSecond} /><div style={{ ...styles.arrowLeftSecond, ...styles.arrowRight }} /></div>
        <div style={{ ...styles.arrowIcon, ...styles.secondArrow, ...styles.directionRight }}><div style={styles.arrowLeftSecond} /><div style={{ ...styles.arrowLeftSecond, ...styles.arrowRight }} /></div>
        <p style={styles.date}>Tue, Jun 23</p>
      </div>
      <div style={styles.calendar} />
    </div>
  );
}

export default SideBarRight;