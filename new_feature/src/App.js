import React from 'react';
import Header from './components/Header'; // Assuming you already have a Header component
import MainSection from './components/main_section'; // Importing the MainSection component
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer/>
    </div>
  );
};

export default App;
