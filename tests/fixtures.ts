export interface Task {
  id: number;
  name: string;
}

export const tasks: Task[] = [
  { id: 1, name: "Create Awesome Library" },
  { id: 2, name: "Publish Awesome Library to NPM" },
];
