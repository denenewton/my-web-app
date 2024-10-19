import { Link } from 'react-router-dom';
import { useContext} from 'react';
import SearchContext, { MovieObj } from '../contex/SearchContext';



const Movies = () => {
    // @ts-ignore
    const { searchText ,movies } = useContext(SearchContext);

    let _mov: MovieObj[]  = searchText ?
        movies.filter((m: { title: string }) => m.title.
            toLowerCase().includes(searchText.toLowerCase()))
        : movies;



    return (
    <section>
         <section className="w-full grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-5">
          {_mov?.map((mov) => (
            <div
              key={mov?._id}
              className="w-full h-min-42 overflow-hidden shadow-md rounded-lg"
            >
              <img
                className="w-full   object-cover"
                src={mov?.url_image}
                alt="kkk"
              />
              <Link to={`/pages/single_movie/${mov?._id}${mov?.backdrop_path.split('original')[1]}`}>
                <h3 className="font-normal  pl-2 py-2 text-md"> {mov.title}</h3>
              </Link>
            </div>
          ))}
        </section>
      
    </section>
  )
}

export default Movies


