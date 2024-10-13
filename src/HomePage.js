import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <Banner />
      <Features />
      <CourseSearch />
      <TutorList />
    </div>
  );
}

const Header = () => (
  <header className="header">
        <h1>Tutor Connect</h1>
        <div className="header-buttons">
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Try for Free</Link>
        </div>
  </header>
);

const Banner = () => (
  <div className="banner">
    <h2>Find your tutor and improve your knowledge</h2>
  </div>
);

const Features = () => (
  <div className="features">
    <div className="feature-item">
      <div className="feature-icon">😊</div>
      <h3>Happy mind</h3>
      <p>Unlock inner happiness and embrace a positive state of mind.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">💤</div>
      <h3>Better Sleep</h3>
      <p>Drift into deep, rejuvenating sleep and wake up refreshed.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">🧘</div>
      <h3>Less Stress</h3>
      <p>Unlock inner happiness and embrace a positive state of mind.</p>
    </div>
  </div>
);

const CourseSearch = () => (
  <div className="course-search">
    <h3>Get course help now:</h3>
    <input 
      type="text" 
      placeholder="Search for courses or tutors..." 
      className="search-input" 
    />
    <button type="button" className="search-btn">Search</button>
  </div>
);


const TutorList = () => (
  <div className="tutor-list">
    <h3 className="tutor-list-title">Our Vetted List of Elite Tutors</h3>
    <div className="tutors">
      <TutorCard />
      <TutorCard />
      <TutorCard />
    </div>
  </div>
);

const TutorCard = () => (
  <div className="tutor-card">
    <div className="profile-pic-container">
    <img className="profile-pic" src="https://tutorax.com/wp-content/uploads/2021/11/Orthopedagogue-rencontre-orthopedagogie.jpg" alt="Profile Picture"/>
        <div className="rating">
            ⭐n/5
        </div>
    </div>
    
    <h3 className="tutor-name">Tutor Name</h3> 
    
    <Link to="/login" className="take-course-button">
      Take Course
    </Link>
    <div className="details">
      <span>Course Title</span>
      <span>Cost/hr</span>
    </div>
  </div>
);

export default HomePage;

