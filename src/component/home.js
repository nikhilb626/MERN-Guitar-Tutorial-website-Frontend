import React from 'react';
import Navbar from './navbar';
import Contact from './contact';
const Home = () => {
    return (
        <>
        <div className="home_container">
        <Navbar />

        <div className="qoute_container">
            A guitar is more than just a sound box,Its a sound of your soul
        </div>

        <div className="joinBtn">Join Now</div>

        </div>


        <div className="classes_container">
            <div className="heading">Classes</div>

            <div className="classes_boxes">
                <div className="box">
                    <div className="box_image">
                        <img src="./media/g2.jpg" alt="photo" />
                    </div>
                    <div className="level">Beginners Class</div>
                <div className="timing">5pm - 6pm</div>
                <div className="pricing">$20 only</div>
                <div className="joinbutton">Join Now</div>
                </div>


                <div className="box">
                    <div className="box_image">
                        <img src="./media/g1.jpg" alt="photo" />
                    </div>
                    <div className="level">InterMediate Class</div>
                <div className="timing">6pm - 7pm</div>
                <div className="pricing">$39 only</div>
                <div className="joinbutton">Join Now</div>
                </div>


                <div className="box">
                    <div className="box_image">
                        <img src="./media/g3.jpg" alt="photo" />
                    </div>
                    <div className="level">Advanced Class</div>
                <div className="timing">7pm - 8pm</div>
                <div className="pricing">$49 only</div>
                <div className="joinbutton">Join Now</div>
                </div>

            </div>


        <div className="about_container">
            <div className="heading">About Us</div>

            <div className="about_profile">
                <img src="./media/profile.jpg" alt="photo" />
            </div>

            <div className="heading2">Guitar lessions near you</div>

            <div className="heading3">Finding a guitar lesson and the right teacher</div>
            <p>Guitar lessons can be one of the most useful ways to improve your ability and have more fun playing guitar. Finding the right guitar lessons and the right guitar instructor can be a difficult task: you don't know what you are getting until you try it. Lessons.com is a great space for you to figure out what the best guitar lessons for you are - this can be done with ratings on the site and in extra teacher information. In addition to this, here are some things you can do to find the right guitar lessons and teachers.</p>

            <p>Start off figuring out what style you are looking for. Is it acoustic or electric? What music styles are you looking for? From country and bluegrass all the way to heavy metal and rock, there are so many different styles of guitar music. If you are just starting out and are not sure what to begin with, this is okay. Some instructors are very good at teaching beginners and helping them find out what they are passionate and good at. If you do know what you are interested in, the best thing to do is to find an instructor that teaches that style. On Lessons.com you can do this by reading through the teacher\'s description.</p>

<p>After you have selected a style and a teacher, you may want to keep some extra questions in mind for your first guitar lesson. An in person lesson can be very valuable, if you show up, and if you do the work that the instructor gives you for when you are not meeting. One of the greatest methods of improving is to consistently play. Play multiple times a week, get those practice repetitions in.</p>


<p>Right now, you are at your jumping off point. Find what you are interested in, and pick an instructor and try it out. There is no time like the present, and jumping right in to lessons can take you one step further than you were before. Before long you will discover the fun of taking lessons for guitar.</p>


            

        </div>



 <Contact />





        </div>

     
        </>
    )
}

export default Home;
