import { FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Contact = () => {
  return (
    <>
      <section className="w-full mx-auto">
        <div className="card bg-base-100 max-w-[600px]  mx-auto">
          <div className="card-body">
            <h2 className="card-title  text-4xl text-indigo-700 mb-3 self-center">
              Contate-nos
            </h2>
            <p className="text-center mb-3">
              Você pode entrar em contato conosco por e-mail, celular e
              WhatSapp, você decide. Ou você pode simplesmente nos enviar uma
              mensagem diretamente usando o formulário abaixo.
            </p>
            <div className="card-actions items-center flex-col self-center">
              <div className="flex items-center space-x-2 mt-0">
                <GoMail color="#f43f5e" fontSize="1.5rem" className="mt-1" />
                <p> denenewton@icloud.com</p>
              </div>
              <div className="flex items-center space-x-2 ">
                <FaWhatsapp color="#15803d" fontSize="1.5rem" />
                <p> +55 61 999590929</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 max-w-[500px] mt-5 shadow-md mx-auto">
          <div className="card-body">
            <form
              action=""
              className="w-full flex flex-col justify-center space-y-5 mx-auto mt-0"
            >
              <h2 className="card-title  text-indigo-700  tracking-wider self-center ">
                Formulário de contato
              </h2>
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    name=""
                    className="grow"
                    placeholder="Email"
                  />
                </label>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Seu nome" />
              </label>
              <label className="flex items-center gap-2">
                <textarea
                  className="textarea textarea-bordered grow"
                  placeholder="Mensagem"
                ></textarea>
              </label>
              <button type="button" className="btn btn-outline btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}



export default Contact