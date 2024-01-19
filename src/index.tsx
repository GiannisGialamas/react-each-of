import React from "react";

type EachProps<T> = {
  render: (item: T, index: number) => React.ReactNode;
  renderFallback?: React.ReactNode;
  of: T[];
};

export function Each<T>({ of, render, renderFallback }: EachProps<T>) {
  return of.length > 0
    ? React.Children.toArray(of.map((item, index) => render(item, index)))
    : renderFallback;
}
