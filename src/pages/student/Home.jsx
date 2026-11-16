import Companies from "../../components/student/Companies"
import CoursesSection from "../../components/student/CoursesSection"
import Hero from "../../components/student/Hero"
import Testimonials from "../../components/student/TestimonialsSection"

const Home = () => {
  return (
    <div className='f1ex flex-col items-center space-y-7 text-center bg-gray-300' >
      <Hero />
      <Companies />
      <CoursesSection />
      <Testimonials />
    </div>
  )
}

export default Home
