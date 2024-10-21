import { Button } from "./ui/button";

const Clock = () => {
  return (
    <div className="bg-red w-screen p-4 flex justify-center flex-col items-center gap-10 text-white">
      <h2 className="text-3xl">Contest closes in:</h2>
      <div className="text-7xl">00:00:00</div>
      <Button className="bg-white text-black text-4xl p-12 font-bold	hover:bg-neutral-300 rounded-none transition ease	duration-300">
        I want in
      </Button>
    </div>
  );
};

export default Clock;
