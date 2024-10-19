import InputEmail from "../components/InputEmail";
import InputName from "../components/InputName";
import InputPassword from "../components/InputPassword";

const Home = () => {
  return (
    <section className="w-full">
      <div className="max-w-[500px] mx-auto">
        <form
          action=""
          className="w-full flex flex-col justify-center space-y-5 mx-auto mt-10"
          autoComplete="off"
        >
          <Title text="Create an account before"/>
          
          <InputEmail />

          <InputName />

          <InputPassword />

          <ButtonSubmit text="Enviar" />
        </form>
      </div>
    </section>
  );
};

export default Home;

function ButtonSubmit({ text }: { text: string }) {
  return (
    <button type="button" className="btn btn-outline btn-primary">
      {text}
    </button>
  );
}

function Title({ text }: { text: string }) {
  return (
    <h1 className=" card-title font-medium  self-center text-4xl  text-indigo-700 mb-4 ">
      {text}
    </h1>
  );
}
