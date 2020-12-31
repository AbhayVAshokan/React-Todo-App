const styles = {
  wrapper: {
    display: "sticky",
    width: "calc(min(30vw, 600px))",
    height: "100vh",
    borderLeft: "2px solid rgba(176, 176, 176, 0.25)",
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