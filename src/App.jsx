import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="h-screen bg-red-600 text-black">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nostrum
      quibusdam placeat. Ipsa dicta temporibus, rem quos modi eligendi
      accusantium soluta repellendus quis non nisi maiores excepturi nemo
      eveniet eaque?
    </div>
  );
}

export default App;
