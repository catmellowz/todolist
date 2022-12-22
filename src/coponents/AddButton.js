export default function AddButton(props) {
  return (
    <div className="input-group">
      <input type="text" className="form-control" value={props.content} onChange={props.onChange} />
      <button onClick={props.onSubmit} className="btn btn-primary">
        <i className="fa-solid fa-check" />
      </button>
      <button className="btn btn-secondary" onClick={props.onClick}>
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}
