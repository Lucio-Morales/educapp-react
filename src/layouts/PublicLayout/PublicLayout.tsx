import { Outlet } from 'react-router-dom';
import Header from '../../components/ui/header/Header';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-14 flex-grow flex justify-center">
        <div className=" max-w-6xl mx-auto w-full p-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PublicLayout;
