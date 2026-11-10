import { useContext } from "react"
import { assets } from "../../assets/assets"
import { AppContext } from "../../context/AppContext"

const CourseCard = ({ course }) => {

  const {currency} = useContext(AppContext)

  return (
    <div>
      <img src={course.courseThumbnail} alt="" />
      <div>
        <h3>
          {course.courseTitle}
        </h3>
        <p>
          {course.educator.name}
        </p>
        <div>
          <p>
            0.1
          </p>
          <div>
            {currency}{[...Array(5)].map((_, i)=> (<img key={i} src={assets.star} alt=""/>))}
          </div>
          <p>
            3
          </p>
        </div>
        <p>
          {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(4)}
        </p>
      </div>
    </div>
  )
}

export default CourseCard
