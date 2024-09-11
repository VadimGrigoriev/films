import Star from '../Star/Star';
import './Stars.css'

function Stars({counts=0}) {
  if (typeof counts !== 'number' || counts < 1 || counts > 5) {
    return null;
  }

  const stars = [];
  for (let i = 0; i < counts; i++) {
    stars.push(i);    
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map(star => (
        <li key={star}>
          <Star />
        </li>
      ))}
    </ul>
  );
}

export default Stars;
