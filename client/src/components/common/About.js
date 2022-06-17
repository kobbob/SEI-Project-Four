import { Link, useNavigate } from 'react-router-dom'
// import ReactPlayer from 'react-player'



// Import helpers
import { userIsAuthenticated } from '../helpers/auth'


const About = () => {
  console.log(userIsAuthenticated())

  // Navigate
  const navigate = useNavigate()

  // ? This function removes the token and navigates to the login page
  const handleLogout = () => {
    // Remove the token from local storage
    window.localStorage.removeItem('architecture-waste-age')
    // Navigate to the gallery page
    navigate('/')
  }

  return (
    <div id="about-sidebar">

      <section className="section">
        <h1 className="title">ARCHITECTURE IN AN AGE OF WASTE</h1>
      </section>

      <section className="section" id="hero">
        {/* <span id="about">Source: </span> */}
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 content">
              <h2 className="title">&apos;Time is a Great Architect&apos;</h2>
              <p id="about">
                &quot;We must face the problem of waste &#8211; we can no longer ignore what happens to things when we get rid of them. Instead of thinking of objects as things that have an end life, they can have many lives. This is not just an exhibition it is a campaign, and we all have an active part in our future.&quot; &#8211; Gemma Curtin, Curator of &apos;Waste Age&apos; (2021-2022), the Design Museum, London.
                <br />
                <br />
                In the exhibition &apos;Waste Age&apos;, among other designers represented, two Architect&apos;s vision in re&#8211;adapting existing architecture was shown through a project situated in Bordeaux, France. The 1960s housing estate of Grand-Parc was family to an era of post&#8211;war social housing built in much of Europe at the time. An inititative driven by the French government to bulldoze a large amount of these properties
                was challenged by Lacaton and Vassal. Their manifesto was to &apos;never demolish... always add, transform and reuse&apos;.

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
              <p id="about">
                Rather than demolishing and completely rebuilding the estate that housed 8,800 people (originally designed to accomodate 13,000), the three blocks were refurbished by adding an extension of balconies and winter gardens to the facade (which were stripped away).
                Not only acting as a more visual barrier, this new facade created a thermal layer of insulation, and place for residents to gain some outdoor space. This renovation cost roughly half as much as the new-build scheme, focusing in on a reduction of waste and energy (that is a huge contributor in construction). &quot;Sustainabilty is also about the way
                money is spent on doing something that lasts longer&quot;, Lacaton says.
                <br />
                <br />
                In reference to the late modernist structures (but not exclusive to), imaginative re-use of such buildings and environments can reflect the same social dynamism and ambition with which they were formed in. The spirit of working progressively to improve what we can and for imagining a better world.
              </p>
              {/* <p className="sources">
                (Sources:<br /> &apos;Time is a Great Architect&apos; - Alvaro Siza (2014); <br />&apos;Building study: Lacaton & Vassal&apos;s renovation of a Bordeaux housing estate&apos; (C. Slessor (2019), Architects Journal);<br /> &apos;Grand Parc, Bordeaux review &#8211; a rush of light, air and views&apos; (C. Slessor (2019), The Guardian))
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="section" id="waste-age">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 content">
              <div className="vimeo-player">
                <ReactPlayer />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 
      <section className="section" id="waste-age">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 content">
              <p id="about">
                In reference to the late modernist structures (but not exclusive to), imaginative re-use of such buildings and environments can reflect the same social dynamism and ambition with which they were formed in. The spirit of working progressively to improve what we can and for imagining a better world.
              </p>
              <p className="sources">
                (Sources:<br /> &apos;Time is a Great Architect&apos; - Alvaro Siza (2014); <br />&apos;Building study: Lacaton & Vassal&apos;s renovation of a Bordeaux housing estate&apos; (C. Slessor (2019), Architects Journal);<br /> &apos;Grand Parc, Bordeaux review &#8211; a rush of light, air and views&apos; (C. Slessor (2019), The Guardian))
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section" id="nav">
        <ul className="container" id="about">
          <li className="nav-list"><Link to='/'>Gallery</Link></li>
          {userIsAuthenticated() ?
            <>
              <li className="nav-list"><Link to='/profile'>Profile</Link></li>
              <li className="nav-list"><button onClick={handleLogout}>Sign Out</button></li>
            </>
            :
            <>
              <li className="nav-list"><Link to='/signin'>Sign In</Link></li>
            </>
          }
        </ul>
      </section> */}

    </div>
  )
}

export default About