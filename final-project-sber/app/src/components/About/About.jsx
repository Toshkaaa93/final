import Form from "../Form/Form";

function About() {
  return (
    <div className="container">
      <h1>Дерзай!</h1>
      <Form />
    </div>
  );
}

// React.nemo позволяет компонентам не рендериться, если у них что-то не изменилось
export default About;
