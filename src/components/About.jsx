import React from "react";
import "./About.css";
import companyLogo from "../images/image3.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h1>About Us</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque sunt in culpa qui officia deserunt mollit anim id
        est laborum
      </p>
      <div className="row">
        <div className="col-lg-6">
          <img className="image" src={companyLogo} alt="Image3" />
        </div>
        <div className="col-lg-6">
          <div className="about-info">
            <div className="about-content">
              <h1>We are LA 16</h1>
              <h4>
                Serving since 2010, we are as proud as thankful for all the
                support. Our team at LA 16 is committed to serving you the best
                you ever had.{" "}
              </h4>
              <h4>
                Your taste is our priority. A well-expertised team at our hand
                we serve the best food of the county and will continue to do so.
              </h4>
              <h4>
                A 3-time Award-winning place is waiting for you. We love giving
                a reason for happiness to our people. Come again soon.
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Odit rem
                iusto possimus. Doloremque a sunt in fugiat nam maiores
                molestiae expedita provident temporibus et? Autem eaque pariatur
                delectus commodi voluptas!Loremlofa-rotate-180 Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Quos id perspiciatis
                quidem voluptate nobis odio aperiam unde consequuntur laboriosam
                minima? Deserunt magni architecto neque nesciunt quod facilis et
                dolores perferendis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vitae hic incidunt temporibus ipsum. Beatae
                deserunt facere quo aspernatur error! Fuga minima hic animi esse
                a cupiditate voluptatem placeat sapiente quam. Odit rem iusto
                possimus. Doloremque a sunt in fugiat nam maiores molestiae
                expedita provident temporibus et? Autem eaque pariatur delectus
                commodi voluptas!Loremlofa-rotate-180 Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Quos id perspiciatis quidem
                voluptate nobis odio aperiam unde consequuntur laboriosam
                minima? Deserunt magni architecto neque nesciunt quod facilis et
                dolores perferendis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vitae hic incidunt temporibus ipsum. Beatae
                deserunt facere quo aspernatur error! Fuga minima hic animi esse
                a cupiditate voluptatem placeat sapiente quam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
