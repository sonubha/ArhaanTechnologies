import React, { useEffect, useState } from 'react';

const SplashScreen = ({ logo, onFinish }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => onFinish(), 3000); // 3 seconds animation
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={styles.container} className={animate ? 'animate' : ''}>
      <img
        src={logo}
        alt="Logo"
        style={styles.logo}
        className={animate ? 'zoomAndFade' : ''}
      />
      <style>{`
        @keyframes zoomAndFade {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(20);
            opacity: 0;
          }
        }

        .zoomAndFade {
          animation: zoomAndFade 3s forwards;
        }

        .animate {
          animation: fadeOut 3s forwards;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  logo: {
    width: 150,
    height: 'auto',
  },
};

export default SplashScreen;
