

const About = () => {
    return (
        <section className="container flex flex-col items-center mt-4 mx-auto">
          <div className="card bg-base-100 max-w-[700px] mt-3 shadow-xl">
            <div className="card-body">
              <h1 className="card-title font-medium text-3xl text-center text-indigo-700 mb-4">
                Sobre este app
              </h1>
    
              <p>
              Este é meu aplicativo pessoal para praticar e melhorar minhas habilidades como desenvolvedor web. Espero que você esteja gostando do recurso em que estou trabalhando aqui. Se você tem algo para compartilhar conosco, vá até a página de contato para nos enviar uma mensagem, sinta-se à vontade para nos dizer o que você tem em mente.
              </p>
              <div className="h-20  mt-10 chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="/images/me.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Denenewton {" "}
                  <time className="text-xs opacity-50"> 12:46</time>
                </div>
                <div className="chat-bubble">This is my playground. Hope you liked</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  export default About;  

    