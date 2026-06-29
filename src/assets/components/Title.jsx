const Title = function (props) {
  const now = new Date().getFullYear;

  return (
    <div>
      <h2>
        Ciao, sono un titolo in <code>h2</code>
      </h2>
      <h3>
        Ciao, sono un titolo in <code>h3</code>
      </h3>
      <h4>{now}</h4>
      <p>Mia ha creato {props.name}</p>
    </div>
  );
};

export default Title;
