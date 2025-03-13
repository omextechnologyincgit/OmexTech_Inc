// CareersPage.jsx
import React, { useEffect, useState } from 'react';
import imagecareer from '../assets/careersimagemain.jpg';
import imagecareer2 from '../assets/perksandbenefits.jpg';
import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaUserGraduate, 
  FaHandshake, 
  FaGlobe, 
  FaMedal, 
  FaRocket, 
  FaChartLine, 
  FaCoffee, 
  FaDog, 
  FaGem,
  FaUsers,
  FaRegCalendarAlt,
  FaRegLightbulb,
  FaSearch,
  FaMapMarkerAlt,
  FaRegClock,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCloud,
  FaRegSmile,
  FaArrowRight
} from 'react-icons/fa';
import '../Careers style Component/CareersClaude.css';
import engiimage from '../assets/graduates.jpg';
import freshers from '../assets/freshers.jpg';
import professionals from '../assets/professionals.jpg';

const CareersClaude = () => {
  const [scrollY, setScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      icon: <FaCode />,
      description: 'Join our team to build beautiful, responsive web applications using React.',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      icon: <FaServer />,
      description: 'Design and implement scalable APIs and microservices architectures.',
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      icon: <FaCloud />,
      description: 'Manage our cloud infrastructure and CI/CD pipelines for rapid deployment.',
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Austin, TX',
      type: 'Full-time',
      icon: <FaRegLightbulb />,
      description: 'Define product vision and work with teams to deliver exceptional user experiences.',
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      icon: <FaMobileAlt />,
      description: 'Create beautiful, intuitive interfaces that delight our users.',
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Austin, TX',
      type: 'Full-time',
      icon: <FaDatabase />,
      description: 'Use machine learning and analytics to drive business decisions and product features.',
    },
    {
      id: 7,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      icon: <FaChartLine />,
      description: 'Create and execute marketing strategies to grow our user base.',
    },
    {
      id: 8,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Austin, TX',
      type: 'Full-time',
      icon: <FaRegSmile />,
      description: 'Ensure our customers get the most value from our software solutions.',
    },
  ];

  // Handle scrolling animation detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter jobs based on search and department
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  // Get unique departments for filter
  const departments = ['All', ...new Set(jobs.map(job => job.department))];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p>Build the future with us. We're looking for exceptional talent to help us create innovative software solutions.</p>
          
        </div>
        <div className="hero-image">
          <img src={imagecareer} alt="Team collaboration"  style={{width:'500px',height:'500px'}}/>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className={`culture-section ${scrollY > 200 ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Our Culture</h2>
          <p>At our company, we believe in creating an environment where innovation thrives and people grow.</p>
        </div>
        <div className="culture-grid">
          <div className="culture-card">
            <div className="culture-icon">
              <FaRocket />
            </div>
            <h3>Innovation First</h3>
            <p>We're not afraid to challenge the status quo and push the boundaries of what's possible.</p>
          </div>
          <div className="culture-card">
            <div className="culture-icon">
              <FaUsers />
            </div>
            <h3>Collaborative Environment</h3>
            <p>We work together across teams to solve complex problems and deliver exceptional solutions.</p>
          </div>
          <div className="culture-card">
            <div className="culture-icon">
              <FaGem />
            </div>
            <h3>Quality Obsessed</h3>
            <p>We're committed to excellence in everything we do, from code to customer service.</p>
          </div>
          <div className="culture-card">
            <div className="culture-icon">
              <FaRegLightbulb />
            </div>
            <h3>Continuous Learning</h3>
            <p>We invest in our team's growth through mentorship, education, and challenging opportunities.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`benefits-section ${scrollY > 600 ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Benefits & Perks</h2>
          <p>We take care of our team so they can focus on doing their best work.</p>
        </div>
        <div className="benefits-container">
          <div className="benefits-image">
            <img src={imagecareer2} alt="Office space" />
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaMedal />
              </div>
              <div className="benefit-content">
                <h3>Competitive Compensation</h3>
                <p>Salary packages that recognize your value and contribution.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaRegCalendarAlt />
              </div>
              <div className="benefit-content">
                <h3>Flexible PTO</h3>
                <p>Take time off when you need it. We trust you to manage your schedule.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaUserGraduate />
              </div>
              <div className="benefit-content">
                <h3>Learning Budget</h3>
                <p>Better annual budget for conferences, courses, and books.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaGlobe />
              </div>
              <div className="benefit-content">
                <h3>Remote-Friendly</h3>
                <p>Work from anywhere with flexible hours and distributed teams.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaCoffee />
              </div>
              <div className="benefit-content">
                <h3>Catered Lunches</h3>
                <p>Free daily lunches for in-office employees.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaDog />
              </div>
              <div className="benefit-content">
                <h3>Pet-Friendly Office</h3>
                <p>Bring your furry friends to work with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className={`positions-section ${scrollY > 1200 ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Open Positions</h2>
          <p>Find your perfect role and help us build something amazing.</p>
        </div>
        <div className="job-filters">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search positions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="department-filter">
            {departments.map(dept => (
              <button 
                key={dept} 
                className={`filter-button ${selectedDepartment === dept ? 'active' : ''}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
        <div className="jobs-container">
          {filteredJobs.length > 0 ? filteredJobs.map(job => (
            <div className="job-card" key={job.id}>
              <div className="job-icon">
                {job.icon}
              </div>
              <div className="job-details">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className="job-meta">
                  <span><FaMapMarkerAlt /> {job.location}</span>
                  <span><FaBriefcase /> {job.department}</span>
                  <span><FaRegClock /> {job.type}</span>
                </div>
              </div>
              <button className="apply-button">Apply Now</button>
            </div>
          )) : (
            <div className="no-jobs">
              <h3>No positions found matching your criteria</h3>
              <p>Try adjusting your search or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className={`process-section ${scrollY > 1800 ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Our Hiring Process</h2>
          <p>We've designed our interview process to be thorough but respectful of your time.</p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Application Review</h3>
              <p>Our team reviews your resume and application, typically within 5 business days.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Initial Conversation</h3>
              <p>A 30-minute call with our recruiting team to discuss your experience and interest.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Technical Assessment</h3>
              <p>A take-home assignment or coding exercise relevant to the role you're applying for.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Team Interviews</h3>
              <p>Virtual interviews with the hiring manager and potential teammates.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Final Decision</h3>
              <p>We aim to make a decision within one week after your final interview.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`testimonials-section ${scrollY > 2300 ? 'visible' : ''}`}>
        <div className="section-header">
          <h2 style={{fontWeight:'bold'}}>Join With Omex Technology Inc</h2>
          <p>Hear from the people who make our company great.</p>
        </div>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={engiimage} alt="Employee" style={{width:'380px',height:'250px'}}/>
            </div>
            <div className="testimonial-content">
              <p>"At Omex Technology, we’re excited to welcome passionate engineering graduates who are eager to learn and grow. Our entry-level roles and internships provide hands-on experience,
               mentorship, and a platform to launch your career in tech."</p>
              <div className="testimonial-author">
                <h4>Engineering Graduates</h4>
                <span>Junior Developers</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={freshers} alt="Employee" style={{width:'300px',height:'250px'}} />
            </div>
            <div className="testimonial-content">
              <p>"Omex Technology offers a thriving environment for experienced professionals looking to elevate their careers. With a focus on innovation, collaboration, and leadership, we provide a space for seasoned engineers."</p>
              <div className="testimonial-author">
                <h4>Freshers & Experienced</h4>
                <span>Senior Developers</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={professionals} alt="Employee" style={{width:'500px',height:'250px'}} />
            </div>
            <div className="testimonial-content">
              <p>"Omex Technology offers a thriving environment for experienced professionals looking to elevate their careers. With a focus on innovation, collaboration, and leadership, we provide a space for seasoned engineers to work on cutting-edge projects that shape the future of technology."</p>
              <div className="testimonial-author">
                <h4>Senior Professionals</h4>
                <span>Managers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`cta-section ${scrollY > 2700 ? 'visible' : ''}`}>
        <div className="cta-content">
          <h2>Ready to Join Our Team?</h2>
          <p>We're always looking for exceptional talent to help us build the future of software.</p>
          <div className="cta-buttons">
            <button className="primary-button">
              <span>View Open Positions</span>
              <FaArrowRight className="button-icon" />
            </button>
            <button className="secondary-button">
              <span>Learn More About Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersClaude;