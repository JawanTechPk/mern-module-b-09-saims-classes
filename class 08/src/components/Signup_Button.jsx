const Signup_Button_Component = (props) => {
  console.log(props);

  return (
    <div>
      <button className="btn-style">{props.label}</button>
    </div>
  );
};

export { Signup_Button_Component };
