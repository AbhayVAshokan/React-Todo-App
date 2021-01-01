import TodoList from "../TodoList/TodoList";
import SideBarLeft from "../SideBarLeft/SideBarLeft";
import SideBarRight from "../SideBarRight/SideBarRight";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "#f5f5f5"
  },
}

const Home = () => {
  return (
    <div style={styles.wrapper}>
      <SideBarLeft />
      <TodoList />
      <SideBarRight />
    </div>
  );
}

export default Home;