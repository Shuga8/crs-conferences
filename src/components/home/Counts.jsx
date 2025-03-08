import React, { useEffect, useRef, useState } from "react";

const Counts = () => {
  const attendeesCountRef = useRef(0);
  const activitesCountRef = useRef(0);
  const speakersCountRef = useRef(0);
  const paperSubmissionsCountRef = useRef(0);
  const [attendeesCount, setAttendeesCount] = useState(0);
  const [activitesCount, setActivitesCount] = useState(0);
  const [speakersCount, setSpeakersCount] = useState(0);
  const [paperSubmissionsCount, setPaperSubmissionsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (attendeesCountRef.current < 1000) {
        attendeesCountRef.current += 10;
        setAttendeesCount(attendeesCountRef.current);
      } else {
        clearInterval(interval);
      }

      if (activitesCountRef.current < 20) {
        activitesCountRef.current += 1;
        setActivitesCount(activitesCountRef.current);
      }

      if (speakersCountRef.current < 10) {
        speakersCountRef.current += 1;
        setSpeakersCount(speakersCountRef.current);
      }

      if (paperSubmissionsCountRef.current < 300) {
        paperSubmissionsCountRef.current += 5;
        setPaperSubmissionsCount(paperSubmissionsCountRef.current);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counts flex flex-wrap justify-center md:justify-normal lg:justify-center gap-x-4 gap-y-0.5 py-5 lg:py-10 px-2 select-none">
      <div className="basis-[170px] h-[100px] flex flex-col justify-center items-center ">
        <div className="count text-center text-black text-2xl md:text-3xl xl:6xl">
          {attendeesCount}+
        </div>
        <div className="text-yellow-950 text-sm md:text-base font-[500] text-center">
          Attendees
        </div>
      </div>

      <div className="basis-[170px] h-[100px] flex flex-col justify-center items-center">
        <div className="count text-center text-black text-2xl md:text-3xl xl:6xl">
          {activitesCount}+
        </div>
        <div className="text-yellow-950 text-sm md:text-base  font-[500] text-center">
          Activities
        </div>
      </div>

      <div className="basis-[170px] h-[100px] flex flex-col justify-center items-center">
        <div className="count text-center text-black text-2xl md:text-3xl xl:6xl">
          {speakersCount}+
        </div>
        <div className="text-yellow-950 text-sm md:text-base font-[500] text-center">
          Speakers
        </div>
      </div>

      <div className="basis-[170px] h-[100px] flex flex-col justify-center items-center">
        <div className="count text-center text-black text-2xl md:text-3xl xl:6xl">
          {paperSubmissionsCount}+
        </div>
        <div className="text-yellow-950 text-sm md:text-base font-[500] text-center">
          Paper Submissions
        </div>
      </div>
    </div>
  );
};

export default Counts;
