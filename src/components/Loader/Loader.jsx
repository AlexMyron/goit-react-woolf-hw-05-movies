import { CircleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div>
      <CircleLoader
        color="#007bff"
        speedMultiplier={2}
        cssOverride={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '100',
        }}
      />
    </div>
  );
};

export default Loader;
