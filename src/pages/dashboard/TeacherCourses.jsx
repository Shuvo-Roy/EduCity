import React, { useState } from "react";
export default function TeacherCourses() {
  const [lessons, setLessons] = useState([
    { title: "", lessonName: "", video: null },
  ]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleUpdatedLesson = (index, field, value) => {
    const updatedLessons = [...lessons];
    updatedLessons[index][field] = value;
    setLessons(updatedLessons);
  };

  const handleAddLesson = () => {
    setLessons([...lessons, { title: "", lessonName: "", video: null }]);
    console.log("added");
  };

  const handleCreateCourse = () => {
    const newCourse = {
      title: courseTitle,
      category,
      lessons: lessons.map((lessons) => ({
        lessonName: lessons.lessonName,
        video: lessonsVideo.video,
      })),
    };
    const storedCourse = JSON.parse(localStorage.getItem("course"));
    const updatedLessons = [...storedCourse, newCourse];
    localStorage.setItem("course", JSON.stringify(updatedLessons));
  };

  return (
    <div className="bg-sky-100 bg-opacity-30">
      <div className="flex flex-col items-center p-16">
        <div className="w-full bg-white rounded-lg">
          <div className="p-8">
            <h1 className="text-2xl font-semibold text-slate-900 md:text-2xl text-center">
              Create New Courses
            </h1>
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6 gap-4">
                <div className="w-full px-3 md:mb-0">
                  <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2">
                    Course Title
                  </label>
                  <input
                    className="appearance-none block w-full text-slate-700 border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Full Stack Web Development"
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2">
                    Category
                  </label>
                  <input
                    className="appearance-none block w-full  text-slate-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                    id="grid-last-name"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Web Development / Programming / Database etc."
                  />
                </div>
                {lessons.map((lesson, index) => (
                  <div key={index} className="flex flex-wrap gap-4 w-full">
                    <div className="w-full px-3 md:mb-0">
                      <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2">
                        Lesson Name
                      </label>
                      <input
                        className="appearance-none block w-full text-slate-700 border border-slate-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Lesson Name"
                        value={lesson.name}
                        onChange={(e) =>
                          handleLessonChange(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2">
                        Video Upload
                      </label>
                      <input
                        className="block w-full text-sm text-gray-700 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-dbgMain hover:file:bg-emerald-400 file:disabled:opacity-50 file:disabled:pointer-events-none"
                        type="file"
                        accept="video/*"
                        onChange={(e) =>
                          handleLessonChange(index, "video", e.target.files[0])
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <button
                  type="button"
                  className="bg-dbgMain hover:bg-emerald-400 rounded w-full py-2"
                  onClick={handleAddLesson}
                >
                  Add Lesson
                </button>
                <button
                  className="bg-dbgMain hover:bg-emerald-400 rounded w-full py-2"
                  onClick={handleCreateCourse}
                >
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
