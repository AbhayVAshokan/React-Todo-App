import BlockCard from "./BlockCard/BlockCard";
import TopBar from "./TopBar/TopBar";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: "2.5%",
  },
  addTaskBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    border: "2px solid rgba(158, 158, 158, 0.25)",
    margin: "5%",
    height: "2.5rem",
    color: "rgb(158, 158, 158)",
    fontWeight: "500",
    padding: "1rem 0 0 0"
  },
  plus: {
    border: "2px solid rgba(158, 158, 158, 0.5)",
    padding: "0 5px",
    marginRight: "0.5rem",
    borderRadius: "5px"
  }
}

const TodoList = () => {
  // console.log(store);
  const dummyTasks = [
    [{
      title: "Switch on kids mode on mobile",
      appName: "Kids Stuff",
      link: "https://www.google.com",
      color: "red",
    },
    {
      title: "Create Admin API",
      appName: "Private Stuff",
      link: "https://www.yahoo.com",
      color: "orange",
    },
    {
      title: "LinkedIn Strategy",
      appName: "Work Stuff",
      link: "",
      color: "blue",
    }],
    [{
      title: "Complete the backend",
      appName: "Private Stuff",
      link: "https://www.google.com",
      color: "orange",
    },
    {
      title: "Debugging splash screen",
      appName: "Private Stuff",
      link: "https://www.yahoo.com",
      color: "orange",
    },
    {
      title: "LinkedIn Strategy",
      appName: "Work Stuff",
      link: "",
      color: "blue",
    }],
    [{
      title: "Plan marketting strategy",
      appName: "Private Stuff",
      link: "https://www.google.com",
      color: "orange",
    },
    {
      title: "Talk with mentor",
      appName: "Private Stuff",
      link: "https://www.yahoo.com",
      color: "orange",
    },
    {
      title: "LinkedIn Strategy",
      appName: "Work Stuff",
      link: "",
      color: "blue",
    }],
  ];

  return (
    <div style={styles.wrapper}>
      <TopBar />
      <div style={styles.addTaskBtn}>
        <p style={styles.plus}>+</p>
        <p>Add a task</p>
      </div>

      <div>
        <BlockCard time={Date.now()} title={"App Related Works"} tasks={dummyTasks[0]} />
        <BlockCard time={Date.now()} title={"Planning for a new website"} tasks={dummyTasks[1]} />
        <BlockCard time={Date.now()} title={"Product Stategy"} tasks={dummyTasks[2]} />
      </div>
    </div>
  )
}

export default TodoList;