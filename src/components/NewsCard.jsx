const NewsCard = ({ title, summary, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-4 space-y-2">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{summary}</p>
    </div>
  </div>
);

export default NewsCard;
