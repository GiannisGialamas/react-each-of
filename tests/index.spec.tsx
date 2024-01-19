import React from "react";
import { describe, expect, it, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Each } from "../src";
import { type Task, tasks } from "./fixtures";

afterEach(() => cleanup());

describe("react-each-of", () => {
  it("should render tasks on the screen when data is present", async () => {
    render(
      <Each<Task>
        of={tasks}
        render={(task) => <div key={task.id}>{task.name}</div>}
        renderFallback={<span>No tasks found</span>}
      />
    );

    expect(screen.getByText(/Create Awesome Library/i)).not.toBe(null);
    expect(screen.getByText(/Publish Awesome Library to NPM/i)).not.toBe(null);
    expect(screen.queryByText(/No tasks found/i)).toBe(null);
  });

  it("should render fallback content when data is empty", async () => {
    render(
      <Each<Task>
        of={[]}
        render={(task) => <div key={task.id}>{task.name}</div>}
        renderFallback={<span>No tasks found</span>}
      />
    );

    expect(screen.getByText(/No tasks found/i)).not.toBe(null);
    expect(screen.queryByText(/Create Awesome Library/i)).toBe(null);
    expect(screen.queryByText(/Publish Awesome Library to NPM/i)).toBe(null);
  });
});
