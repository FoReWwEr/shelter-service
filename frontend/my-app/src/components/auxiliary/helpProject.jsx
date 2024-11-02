import { useNavigate } from 'react-router-dom';

const useNavigateToHelp = () => {
  const navigate = useNavigate();

  const navigateToHelp = () => {
    navigate('/shelter-service');
    setTimeout(() => {
      const element = document.getElementById('help');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return navigateToHelp;
};

export default useNavigateToHelp;
