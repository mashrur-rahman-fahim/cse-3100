import './AboutUs.css';

export const AboutUs = () => {
  const teamMembers = [
    { name: 'Emma Johnson', designation: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Liam Smith', designation: 'Adoption Specialist', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Olivia Brown', designation: 'Veterinary Consultant', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Noah Wilson', designation: 'Volunteer Coordinator', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ];

  return (
    <div className="about-container">
      <h1 className="about-heading">About Purrfect Adoption</h1>
      <p className="about-text">
        Welcome to Purrfect Adoption! We are dedicated to finding loving homes for adorable cats. 
        Our mission is to connect cat lovers with their furry friends while ensuring each cat 
        finds a safe, warm, and caring forever home.
      </p>

      <h2 className="about-subheading">Our Mission</h2>
      <p className="about-text">
        We believe every cat deserves a loving family. Our goal is to rescue cats in need, provide 
        them with proper care, and match them with the purrfect adopters. Together, we can make 
        every paw count!
      </p>

      <h2 className="about-subheading">Why Choose Us?</h2>
      <ul className="about-list">
        <li>We prioritize the well-being of every cat.</li>
        <li>Our adoption process is simple and transparent.</li>
        <li>We offer guidance and resources to help you care for your new furry friend.</li>
        <li>We’re passionate about creating happy families, one adoption at a time!</li>
      </ul>

      <h2 className="about-subheading">Our Team</h2>
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
