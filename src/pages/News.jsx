import NewsCard from '../components/NewsCard';

const News = () => {
  const news = [
    { title: 'Hornbill Festival Highlights', summary: 'Nagaland’s iconic cultural festival...', image: '/hornbill.jpg' },
    { title: 'New Eco-Tourism Trails in Arunachal', summary: 'Boosting sustainable travel...', image: '/arunachal.jpg' },
    { title: 'Manipur Celebrates Yaoshang', summary: 'A colorful spring festival...', image: '/manipur.jpg' },
  ];

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, i) => <NewsCard key={i} {...item} />)}
      </div>
    </section>
  );
};

export default News;
