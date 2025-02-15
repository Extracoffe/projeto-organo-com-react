/* eslint-disable react/prop-types */
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const primaria = { borderColor: props.corPrimaria };

  return (
    <section className="time" style={css}>
      <h3 style={primaria}>{props.nome}</h3>
    </section>
  );
};

export default Time;
