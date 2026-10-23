import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src="/images/now.jpg" alt="Delicious Burger Club burger" />
      </div>

      <div className="about-content">
        <h2>About Burger Club</h2>

        <h3>More Than Just a Burger — It's an Experience!</h3>

        <p>
          Welcome to Burger Club, where great taste meets quality.
          We believe every burger should be delicious, flavorful,
          and satisfying. Our goal is to bring burger lovers
          a memorable experience with every bite.
        </p>

        <div className="about-features">
          <div className="feature">
            <h4>🍔 Our Quality</h4>
            <p>We focus on great taste and carefully prepared burgers.</p>
          </div>

          <div className="feature">
            <h4>❤️ Our Passion</h4>
            <p>We love creating delicious burgers that bring people together.</p>
          </div>

          <div className="feature">
            <h4>🚚 Our Promise</h4>
            <p>We aim to make ordering your favorite burger simple and convenient.</p>
          </div>
        </div>

        <a href="#menu" className="about-button">
          Explore Our Menu
        </a>
      </div>
    </section>
  );
}

export default About;
