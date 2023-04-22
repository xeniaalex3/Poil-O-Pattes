import './style.scss';

function Map() {
  return (
    <div>
      <iframe 
        src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        className="iframe"
        title="This is a unique title"
      />
    </div>
  );
}

export default Map;
