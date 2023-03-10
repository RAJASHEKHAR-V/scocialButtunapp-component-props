const Button = (props) => {
  const { className, btnText } = props;
  return <button className={className}>{btnText}</button>;
};

const element = (
  <div className="bg-Container">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-Container">
      <Button className="btn1" btnText="Like" />
      <Button className="btn2" btnText="Comment" />
      <Button className="btn3" btnText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
