const TaskReducer = (state=1, action) => {
  switch(action.type) {
    case "ADD":
      return state;
    default:
      return state;
  }
}

export default TaskReducer;