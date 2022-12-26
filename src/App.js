import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { router } from './Routes/Routes/Routes';

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
