import React from 'react';
import './Home.css'

const Hero = () => {
  return (
      <div className="overlay" id="home">
        <section className="intro"> 
          <div className="content">
            <h1>Welcome User.</h1>
            <h4>This is some sub headinng under the Home of the website.</h4>
            <button >Get Started</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto exercitationem aperiam commodi veritatis blanditiis quisquam tenetur dicta perspiciatis cupiditate placeat tempora animi id, delectus veniam esse aliquid, quidem repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio officiis nihil dolore laboriosam, asperiores hic, beatae ducimus placeat dignissimos commodi dolores qui ullam consequatur ex quidem necessitatibus alias ipsam?</p>
          </div>
        </section>
      </div>  
  );
}

export default Hero;
