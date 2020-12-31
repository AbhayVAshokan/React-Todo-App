const styles = {
  wrapper: {
    display: "sticky",
    width: "calc(min(30vw, 600px))",
    height: "100vh",
    borderRight: "2px solid rgba(176, 176, 176, 0.25)",
  }
}

const SideBarLeft = () => {
  return (
    <div style={styles.wrapper}>
      <ul>
        <li>Today</li>
        <li>Uncategorized</li>
        <li>
          Projects
            <ul>
            <li><div />Private Stuff</li>
            <li><div />Kid's Stuff</li>
            <li><div />Private Works</li>
            <li><div />Add New</li>
          </ul>
        </li>
        <li>Show Archived</li>
      </ul>
      <div>
        Tags
      </div>
    </div>
  );
}

export default SideBarLeft;