import PropTypes from 'prop-types';

function TaskInput({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.task.value;
    onAdd(value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="task" placeholder="Enter task" />
      <button type="submit">Add</button>
    </form>
  );
}

TaskInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TaskInput;
