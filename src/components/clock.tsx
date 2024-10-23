import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Clock = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeRemaining = () => {
    const now = new Date();
    const midnight = new Date(now);

    midnight.setHours(24, 0, 0, 0);

    return midnight.getTime() - now.getTime();
  };

  const addTimeRemainingToState = () => {
    const time = calculateTimeRemaining();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    setTimeRemaining({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    addTimeRemainingToState();
    const interval = setInterval(addTimeRemainingToState, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red w-screen p-4 flex justify-center flex-col items-center gap-10 text-white">
      <h2 className="text-3xl">Contest closes in:</h2>
      <div className="flex flex-row justify-around w-1/2">
        {ClockSection(timeRemaining.days, "DAYS")}
        {ClockSection(timeRemaining.hours, "HOURS")}
        {ClockSection(timeRemaining.minutes, "MINUTES")}
        {ClockSection(timeRemaining.seconds, "SECONDS")}
      </div>
      <Button className="bg-white text-black text-4xl p-12 font-bold	hover:bg-neutral-300 rounded-none transition ease	duration-300">
        I want in
      </Button>
    </div>
  );
};

const ClockSection = (value: number, dateType: string) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-7xl font-thin">{value}</span>
      <span className="font-bold	">{dateType}</span>
    </div>
  );
};

export default Clock;
