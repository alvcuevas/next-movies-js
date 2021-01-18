import Router from "next/router";

const ShowPreview = ({ movie }) => {
  const genres = movie.genres.map((genre, i) =>
    i + 1 !== movie.genres.length ? `${genre}, ` : `${genre}`
  );

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title={movie.name}
      >
        <img
          className="cursor-pointer"
          src={movie.image.medium}
          onClick={() => Router.push(`show/${movie.id}`)}
        />
      </div>
      <div className="border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex justify-between">
          <div className="text-gray-900 font-bold text-xl">{movie.name}</div>
          <div className="text-xl font-semibold text-gray-500">
            <i className="fas fa-star pr-1 text-yellow-500" />
            {movie.rating.average}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <i class="fas fa-globe-asia" /> {movie.language}
        </div>
        <div className="text-sm text-gray-500">{genres}</div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html: `${movie.summary.slice(0, 130)}...`,
          }}
        />
        <div className="flex space-x-3 text-sm font-medium">
          <div className="flex-auto flex space-x-3">
            <a
              className="w-1/2 flex items-center justify-center underline cursor-pointer"
              onClick={() => Router.push(`show/${movie.id}`)}
            >
              Read more
            </a>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400"
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="#F87171">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400"
            type="button"
            aria-label="share"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPreview;
