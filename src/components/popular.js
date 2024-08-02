import one from "../assets/1.jpeg"
import two from "../assets/2.jpg"
import three from "../assets/3.jpeg"
import four from "../assets/4.jpeg"
import five from "../assets/5.jpeg"
import six from "../assets/6.jpeg"
import seven from "../assets/7.jpeg"
import eight from "../assets/8.jpeg"






function Popular(){
    return(
        <div class="popular">
        <div class="popular__container">
            <div class="course-cards">
                <img src={one}/>
                <h3>2024 PYTHON Visualisazion</h3>
                <p> van Rossum</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>999 <del>16999</del></p>

            </div>
            <div class="course-cards">
                <img src={two}/>
                <h3>2024 Web Development Bootcamp</h3>
                <p> Guido van Rossum</p>
                <p>4.6 ⭐⭐⭐⭐</p>
                <p>799 <del>14999</del></p>

            </div>
            <div class="course-cards">
            <img src={three}/>
                <h3> Master UI/UX Designing With Figma</h3>
                <p> Guido van Rossum</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>799 <del>19999</del></p>

            </div>
            <div class="course-cards">
            <img src={four}/>
                <h3>Basic to Advance Java Core Training</h3>
                <p> Guido van Rossum</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>699 <del>18999</del></p>

            </div>
            <div class="course-cards">
            <img src={five}/>
                <h3>2024 C++ full stack Development</h3>
                <p> Brendan Eich</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>899 <del>12999</del></p>

            </div>
            <div class="course-cards">
            <img src={six}/>
                <h3>2024 2024 MEAN Strack Development</h3>
                <p> Guido </p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p>699 <del>17999</del></p>

            </div>
            <div class="course-cards">
            <img src={seven}/>
                <h3>2024 MERN Strack Development</h3>
                <p> Guido van Rossum</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>799 <del>16999</del></p>

            </div>
            <div class="course-cards">
            <img src={eight}/>
                <h3>2024 PYTHON Programming Language</h3>
                <p> Guido van Rossum</p>
                <p>3.4 ⭐⭐⭐</p>
                <p>999 <del>13999</del></p>

            </div>

        </div>
    </div>
    )
}

export default Popular