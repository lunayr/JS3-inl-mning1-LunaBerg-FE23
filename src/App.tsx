import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock";

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const updateDate = () => {
      setDate(new Date());
    };

    intervalId = setInterval(updateDate, 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
  return (
    <div>
      <Clock time={date} />
    </div>
  );
};

export default App;

// {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
