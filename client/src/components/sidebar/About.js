// import { Link } from 'react-router-dom'

const About = () => {


  return (
    <div id="about-sidebar">

      <section className="section">
        <h1 className="title">ARCHITECTURE IN AN AGE OF WASTE</h1>
      </section>

      <section className="section" id="hero">
        <span>Source: </span>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 content">
              <h2 className="title">&quot;Quotation about something&quot;</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus magna id quam euismod, quis consectetur augue malesuada. Aenean et libero elementum, consequat eros in, vehicula risus. Phasellus imperdiet pretium massa, ut tincidunt neque mollis sed,
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce nibh lectus, maximus in condimentum sit amet, imperdiet vel metus.<br /><br /> Vivamus rhoncus massa eu nisi ultrices consequat. Cras at porttitor quam. Pellentesque feugiat elit odio, vel mattis arcu ullamcorper eget. Vestibulum vitae viverra mauris, porta pharetra nulla. Donec ipsum mauris, malesuada ac facilisis viverra, faucibus id libero. Mauris nec ipsum sit amet elit luctus pulvinar interdum a urna.,
                Etiam a nunc nec neque gravida tincidunt. Nulla et interdum libero. Pellentesque ultricies, ex ac blandit congue, elit dolor rhoncus sem, non eleifend nisl metus ac tellus. Suspendisse tincidunt fringilla aliquam. Morbi scelerisque orci nisl, maximus pulvinar augue auctor et.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <div className="image image-one"></div>
            </div>
            <div className="column is-one-third">
              <div className="image image-two"></div>
            </div>
            <div className="column is-one-third">
              <div className="image image-three"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="waste-age">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus magna id quam euismod, quis consectetur augue malesuada. Aenean et libero elementum, consequat eros in, vehicula risus. Phasellus imperdiet pretium massa, ut tincidunt neque mollis sed,
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce nibh lectus, maximus in condimentum sit amet, imperdiet vel metus. Vivamus rhoncus massa eu nisi ultrices consequat. Cras at porttitor quam. <br /><br />Pellentesque feugiat elit odio, vel mattis arcu ullamcorper eget. Vestibulum vitae viverra mauris, porta pharetra nulla. Donec ipsum mauris, malesuada ac facilisis viverra, faucibus id libero. Mauris nec ipsum sit amet elit luctus pulvinar interdum a urna.,
                Etiam a nunc nec neque gravida tincidunt. Nulla et interdum libero.<br /><br /> Pellentesque ultricies, ex ac blandit congue, elit dolor rhoncus sem, non eleifend nisl metus ac tellus. Suspendisse tincidunt fringilla aliquam. Morbi scelerisque orci nisl, maximus pulvinar augue auctor et.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="nav">
        <nav className="container">
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#sign-up">Sign Up</a></li>
          <li><a href="#join-us">Join Us</a></li>
        </nav>
      </section>

    </div>
  )
}

export default About