import ShowPreview from '../components/ShowPreview';

export default function Home({ shows }) {
  return (
    <div className="container mx-auto px-4">
      <div class="grid grid-cols-3 gap-6 mt-6 mb-6">
        { shows.map(movie => <ShowPreview movie={movie} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const shows = await fetch(`${process.env.NEXT_PUBLIC_SHOWS_API}/shows`).then(res => res.json());

  return {
    props: {
      shows: shows.slice(0, 18)
    },
  };
}
