import one from "../assets/four.jpeg"
import two from "../assets/three.jpeg"
import three from "../assets/two.jpeg"
import four from  "../assets/one.jpeg"

function Recommended(){
    return(
        <div class="recommended">
        <h1>Recommended for you..</h1>
        <p> pic the best fit</p>

        <div class="recommended__container">
            <div class="course-cards">
                <img src={one}/>
                <h3>2024 JAVA SCRIPT AND React JS </h3>
                <p> Brendan Eich</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>599 <del>15000</del></p>

            </div>

            <div class="course-cards">
                <img src={two}/>
                <h3>2024 Web Development Course</h3>
                <p> Brendan Eich</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>9999 <del>25999</del></p>


            </div>

            <div class="course-cards">
                <img src={three}/>
                <h3>2024 JAVA Programming Language</h3>
                <p> Brendan Eich</p>
                <p>3.2 ⭐⭐⭐ </p>
                <p>699 <del>16000</del></p>

            </div>

            <div class="course-cards">
                <img src={four}/>
                <h3>2024 PYTHON Programming Language</h3>
                <p> Guido van Rossum</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>799 <del>16999</del></p>

            </div>


        </div>
    </div>
    )
}

export default Recommended