import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="d-flex flex-col h-screen">
      <header>E-commerce</header>
      <main>
        <Outlet />
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;
