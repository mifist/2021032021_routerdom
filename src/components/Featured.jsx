import {useParams} from 'react-router-dom'

const Featured = () => {
  const {name} = useParams();
  return (
    <div className="main-content">
      <h2>Featured: {name}</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching courses
        about <strong>{name}</strong>!
      </p>
    </div>
  );
};

export default Featured;
