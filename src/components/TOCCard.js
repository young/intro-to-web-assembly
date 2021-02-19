import React from "react";
import Link from "gatsby-link";
import * as helpers from "../util/helpers";

const sortFn = helpers.sorter;

const LessonCard = ({ content, title }) => {
  console.log(sortFn);

  const sections = content
    .map(lesson => lesson.node.frontmatter)
    .sort(sortFn)
    .reduce((acc, lesson) => {
      if (!acc.length) {
        acc.push([lesson]);
        return acc;
      }

      const lastSection = acc[acc.length - 1][0].section.split(",")[0];
      if (lastSection === lesson.section.split(",")[0]) {
        acc[acc.length - 1].push(lesson);
      } else {
        acc.push([lesson]);
      }

      return acc;
    }, []);

  return (
    <div className="relative bg-white grid p-8 px-10 mt-20 w-full max-w-6xl mx-auto md:w-5/6 lg:w-4/5 xl:w-3/4 border-2 border-gray shadow rounded-xl mb-10">
      <div className="py-4 bg-yellow w-48 shadow-lg transform-gpu -rotate-12 absolute -mt-6">
        <h2 className="text-black font-bold text-center">{title}</h2>
        <div className="w-6 h-6 bg-gray absolute rounded-full bottom-14 left-20"></div>
      </div>
      <ol className="mt-10">
        {sections.map(section => (
          <li key={section[0].section} className="my-2">
            <h3 className="py-2">{section[0].section}</h3>
            <ol className="list-decimal ml-8 leading-8 font-light">
              {section.map(lesson => (
                <li key={lesson.path} className="text-purple-light">
                  <Link to={lesson.path}>{lesson.title}</Link>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LessonCard;
