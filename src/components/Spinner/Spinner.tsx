const Spinner = () => {

  return (
    <div className={"spinner-border position-fixed end-50 z-3  text-primary"} role={"status"}>
      <span className={"visually-hidden"}>Loading...</span>
    </div>
  );
};

export default Spinner;