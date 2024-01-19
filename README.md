# react-each-of

A lightweight React library for effortlessly rendering lists, providing dynamic mapping over arrays with fallback support for empty states.

## Installation

```bash
npm install react-each-of
```

## Usage

```tsx
import { Each } from "react-each-of";

interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "Create Awesome Library" },
  { id: 2, name: "Publish Awesome Library to NPM" },
];

const TaskListItem = ({ task }: { task: Task }) => {
  return (
    <button onClick={() => alert(JSON.stringify(task))}>{task.name}</button>
  );
};

function App() {
  return (
    <div>
      <Each<Task>
        of={tasks}
        render={(task) => <TaskListItem key={task.id} task={task} />}
        renderFallback={<span>No tasks found</span>}
      />
    </div>
  );
}

export default App;
```
