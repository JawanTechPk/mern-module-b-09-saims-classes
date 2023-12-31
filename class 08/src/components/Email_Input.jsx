const Email_input_Component = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export { Email_input_Component };
