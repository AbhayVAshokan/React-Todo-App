const styles = {
  wrapper: {
    display: "block",
    top: "0",
    position: "sticky",
    width: "calc(min(30vw, 600px))",
    height: "100%",
    borderLeft: "2px solid rgba(176, 176, 176, 0.25)",
    backgroundColor: "white"
  }
}

const SideBarRight = () => {
  return (
    <div style={styles.wrapper}>
      <div>Plan your week</div>
      <div>
        <p>Today</p>
        <div></div>
        <div></div>
        <p>Tue, Jun 23</p>
      </div>
      <div>Calendar</div>
    </div>
  );
}

export default SideBarRight;