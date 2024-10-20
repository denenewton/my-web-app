import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import personData from '../data/actors.json';
import { Actors } from "../interfaces/interfaces";


const Person = () => {
  const params = useParams();
  const [person, setMovie] = useState<Actors>();
  const [loading, setLoading] = useState(true);

  async function populateMovieData(id:any) {
    setLoading(true);
    const data = await Object.create(personData);
    const person:Actors = data.find((m: { _id: string }) => m._id == id);
    setMovie(person);
    setLoading(false)
  }

  useEffect(() => {
    populateMovieData(params?.id_person);
  }, [params?.id_person]);
  
  const data = person;

  if (loading) {
    return(
      <div className="w-full h-screen flex items-center justify-center">
        <h5 className="text-center">Loading...</h5>
      </div>
    )
  }

  return (
    <>
      {data && (
          <div className="backdrop-blur-[1px] bg-white/70 text-slate-700 w-full h-full max-w-[1024px] min-h-[700px] mx-auto top-[1rem] rounded-xl relative mt-0 mt-[-3rem] sm:mt-0 py-10 px-4 sm:px-5">
            <div className="w-full h-full flex flex-col gap-[5rem] ">
              <div className="w-full h-full max-w-[848px] mx-auto flex flex-col gap-5 ">
                <div className="flex flex-col  w-full mx-auto  relative ">
                  <div className="w-[200px] mx-auto sm:hidden flex">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
                      alt={data?.name}
                      className="w-full mx-auto h-40 w-40 rounded-full object-cover sm:h-fit sm:rounded-lg"
                    />
                  </div>

                  <div className="flex mt-10">
                    <div className="w-[200px] sm:flex hidden"></div>
                    <div className="w-full flex flex-col items-center justify-center   mx-auto">
                      <a
                         href={data?.homepage || 'https://image.tmdb.org/t/p/w500/'+ data?.profile_path}
                        target="_blank"
                        rel="noreferrer"
                      >
                     <h1 className='text-4xl text-slate-700'>{data?.name} <span>({data?.gender === 2 ? 'Actor' : 'Actress'})</span></h1>
                     </a>
                     <p className='tracking-wide flex items-center gap-4'>
                        <span className="text-xl text-slate-700">
                          {data?.place_of_birth}
                        </span>
                        <span className="text-xl justify-self-auto ">&bull;</span>
                        <span> {data?.birthday?.split("-").join("/")}</span>
                      </p>

                      <p className="tracking-wide flex items-center gap-4">
                        <span className="flex gap-0  text-xl">Popularity: </span>{" "}
                        {data?.popularity}
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-1">
                    <div className="w-[200px] sm:flex hidden"></div>
                    <h2 className="w-full text-center text-2xl leading-10 mt-3">
                      Biography
                    </h2>
                  </div>
                  <span className="w-full text-justify">
                    <a
                      href={data?.homepage || 'https://image.tmdb.org/t/p/w500/'+ data?.profile_path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
                        alt={data?.name}
                        width={100}
                        height={100}
                        className="w-[200px] h-fit rounded-lg object-cover float-left mt-[-170px] mr-5 sm:flex hidden"
                      />
                    </a>
                    {data?.biography}
                  </span>
                </div>
              </div>
            </div>
          </div>       
      )}
    </>
  );
};

export default Person;
