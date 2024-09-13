type Route<T> = Readonly<{
  title: T;
  path: T;
}>;

export const routes: ReadonlyArray<Route<string>> = [
  {
    title: "Home",
    path: "/",
  },
];
