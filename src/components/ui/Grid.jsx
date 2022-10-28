function Grid(props) {
  return (
    <div className="p-4 max-w-full grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {props.children}
    </div>
  );
}

export default Grid;
