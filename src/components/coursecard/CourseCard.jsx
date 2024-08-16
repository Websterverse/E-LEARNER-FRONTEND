// import React from 'react'
// import "./CourseCard.css"
// import { server } from '../../main';
// import { useUserData } from '../../Context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import { CourseData } from '../../Context/CourseContext'; 
// import toast from 'react-hot-toast';
// const CourseCard = ({course}) => {

//   const { fetchCourses } = CourseData();


//     const { user, isAuth } = useUserData();
//     const navigate = useNavigate();


//     // const deleteHandler = async (id) => {
//     //   if (confirm("Are you sure you want to delete this course")) {
//     //     try {
//     //       const { data } = await axios.delete(`${server}/api/course/${id}`, {
//     //         headers: {
//     //           token: localStorage.getItem("token"),
//     //         },
//     //       });
  
//     //       toast.success(data.message);
//     //       fetchCourses();
//     //     } catch (error) {
//     //       toast.error(error.response.data.message);
//     //     }
//     //   }
//     // };


//     const deleteHandler = async (id) => {
//       if (confirm("Are you sure you want to delete this course?")) {
//         try {
//           const response = await axios.delete(`${server}/api/course/${id}`, {
//             headers: {
//               token: localStorage.getItem("token"),
//             },
//           });
    
//           // Log the full response to debug
//           console.log('API Response:', response);
    
//           // Ensure data is accessed correctly
//           if (response && response.data) {
//             toast.success(response.data.message);
//             fetchCourses();
//           } else {
//             toast.error("Unexpected response format");
//           }
//         } catch (error) {
//           // Log the full error response for debugging
//           console.error('Error Response:', error.response);
//           if (error.response && error.response.data && error.response.data.message) {
//             toast.error(error.response.data.message);
//           } else {
//             toast.error("An error occurred while deleting the course.");
//           }
//         }
//       }
//     };
    



//     return  (



//     <div className="course-card">
//       <img src={`${server}/${course.image}`} alt="" className="course-image" />
//       <h3>{course.title}</h3>
//       <p>Instructor- {course.createdBy}</p>
//       <p>Duration- {course.duration} weeks</p>
//       <p>Price- ₹{course.price}</p>

// {/* <button className='common-btn' >Get Started</button> */}

// {isAuth ? (
//         <>
//           {user && user.role !== "admin" ? (
//             <>
//               {user.subscription.includes(course._id) ? (
//                 <button
//                   onClick={() => navigate(`/course/study/${course._id}`)}
//                   className="common-btn"
//                 >
//                   Study
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => navigate(`/course/${course._id}`)}
//                   className="common-btn"
//                 >
//                   Get Started
//                 </button>
//               )}
//             </>
//           ) : (
//             <button
//               onClick={() => navigate(`/course/study/${course._id}`)}
//               className="common-btn"
//             >
//               Study
//             </button>
//           )}
//         </>
//       ) : (
//         <button onClick={() => navigate("/login")} className="common-btn">
//           Get Started
//         </button>
//       )}

//       <br />

//       {user && user.role === "admin" && (
//         <button
//           onClick={() => deleteHandler(course._id)}
//           className="common-btn"
//           style={{ background: "red" }}
//         >
//           Delete
//         </button>
//       )}



//     </div>
//   );    
      


// }

// export default CourseCard











import React from "react";
// import "./courseCard.css";
import "./CourseCard.css"
import { server } from "../../main";
import { useUserData } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../Context/CourseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = useUserData();

  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="course-card">
      <img src={`${server}/${course.image}`} alt="" className="course-image" />
      <h3>{course.title}</h3>
      <p>Instructor- {course.createdBy}</p>
      <p>Duration- {course.duration} weeks</p>
      <p>Price- ₹{course.price}</p>
      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="common-btn"
                >
                  Get Started
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          )}
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="common-btn">
          Get Started
        </button>
      )}

      <br />

      {user && user.role === "admin" && (
        <button
          onClick={() => deleteHandler(course._id)}
          className="common-btn"
          style={{ background: "red" }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default CourseCard;
