import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = (path) => {
  const navigate = useNavigate();

  useEffect(() => {
    let didCancel = false;
    const goToPage = () => navigate(path);
    if (!didCancel) {
      goToPage();
    }
    return () => {
      didCancel = true;
    };
  }, [navigate, path]);
};

export default useRedirect;
