
import './Page.css';

function Page({ name, content }) {
  return (
    <div className="page">
      <div className="page-content">
        <h1>{name}</h1>

        {content.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Page;
