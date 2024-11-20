export default function Home() {
  return (
    <div className="w-[1200px] h-screen m-auto border border-black">
      <div className='px-3 md:w-screen md:px-6'>
        <div className='flex items-center justify-between'>
          <h2 className="mb-[52px] font-sans font-semibold leading-10">Blog</h2>
        </div>
        <article className="w-full">
          dadad
          {/* {Object.entries(posts.reduce(yearEntriesCb, {}))
            .sort(([a], [b]) => +b - +a)
            .map((item, idx) => {
              return <PostItem key={idx} data={item} />;
            })
          } */}
        </article>
      </div>
    </div>
  );
}
