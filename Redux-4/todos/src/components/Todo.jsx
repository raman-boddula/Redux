import React from "react";
import connect from "../Redux/connect";
import { addTodo, deleteTodo } from "../Redux/action";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleDelete = (e) => {
    const { name: id } = e.target;
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };
  render() {
    const { todo, addTodo } = this.props;
    return (
      <>
        <input
          value={this.state.value}
          onChange={(e) =>
            this.setState({
              value: e.target.value
            })
          }
        />
        <button
          onClick={() => {
            addTodo(this.state.value);
          }}
        >
          ADD
        </button>
        {todo &&
          todo.map((item) => (
            <div key={item.title}>
              {item.title}
              <button name={item.id} onClick={this.handleDelete}>
                Delete
              </button>
            </div>
          ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => dispatch(addTodo(payload)),
  deleteTodo: (payload) => dispatch(deleteTodo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
