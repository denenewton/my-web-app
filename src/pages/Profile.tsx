import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Profile = () => {
    return (
        <>
          <section>
            <div className="flex flex-col items-center justify-center">
            
              <img
                width="80px"
                height="80px"
                src="/images/me.jpg"
                alt="Picture of the author"
                className="rounded-full mt-4"
              />
              
              <h1 className="mt-2 text-indigo-700 font-medium text-3xl tracking-wider">
                Daniel Santos Araújo
              </h1>
              <p className="font-mono tracking-tight">denenewton@icloud.com</p>
              <div className="flex space-x-3 mt-2">
                <a href="https://github.com/denenewton">
                  <FaGithub fontSize="1.5rem" />
                </a>
                <a href="https://github.com/denenewton">
                  <FaInstagram color="#ec4899" fontSize="1.5rem" />
                </a>
                <a href="https://github.com/denenewton">
                  <FaFacebook color="#1d4ed8" fontSize="1.5rem" />
                </a>
              </div>
            </div>
          </section>
          <section className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center justify-evenly  gap-5 text-center mt-8 ">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="h-44">
                <img
                 width="100%"
                 height="100%"
                  src="/images/matematica.jpg"
                  alt="Shoes"
                  className="w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Matemático
                  <div className="badge badge-secondary">Desde 2009</div>
                </h2>
                <p className="text-justify">
                  Pós Graduado com título de mestre em Matemática, na UFG. Foi
                  Professor axiliar entres os anos de 2017 a 2019 na UFG. Hoje se
                  encontra em disponibilidade para mudanças no Brasil e no exterior.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Ensino</div>
                  <div className="badge badge-outline">Docencia</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="h-44">
                <img src="/images/frontend.png" alt="Shoes" className="bg-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Programador
                  <div className="badge badge-secondary">Desde 2020</div>
                </h2>
                <p className="text-justify">
                  Graduado em Análise e desenvolvimento de sistemas, na Facudade
                  Estácio de Sá de Santa Catarina. Tem experiência com
                  desenvolvimento web tanto no backend como no frontend.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Frontend</div>
                  <div className="badge badge-outline">Backend</div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    

export default Profile