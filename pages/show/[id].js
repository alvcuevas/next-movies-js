const ShowDetails = ({ show }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-around mt-10">
        <div className="w-1/4">
          <img src={show.image.original} />
        </div>
        <div className="w-2/4">
          <div className="text-5xl mb-3">
            {show.name}{" "}
            <span className="text-base font-thin text-gray-500">
              ({show.premiered})
            </span>
          </div>
          <div className="flex justify-between mb-3">
            <div className="text-lg font-semibold text-gray-500">
              Genres · <span className="text-sm text-gray-400 italic">{show.genres.join(", ")}</span>
            </div>
            <div className="text-base font-bold">
              <i className="fas fa-star px-1 text-yellow-500" />
              {show.rating.average} / 10
            </div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="text-lg font-semibold text-gray-500">
              Language · <span className="text-sm text-gray-400 italic">{show.language}</span>
            </div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="text-lg font-semibold text-gray-500">
              Official Site · <a className="text-sm text-gray-400 italic" href={show.officialSite}>{show.officialSite}</a>
            </div>
          </div>
          <div className="w-full h-px my-1 bg-color bg-gray-700 mb-3" />
          <div
            className="text-base"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const show = await fetch(`${process.env.NEXT_PUBLIC_SHOWS_API}/shows/${id}`).then((res) => res.json());

  return {
    props: {
      show,
    },
  };
}

export default ShowDetails;
