import React, { useEffect, useState } from "react";

const UnMount = () => {
  useEffect(() => {
    let mount = true;
    setTimeout(() => {
      console.log(mount ? "Component is mounted" : "Component is unmounted");
    }, 5000);
    return () => {
      mount = false;
    };
  }, []);

  return <div>Component to be unmounted</div>;
};

export const EffectPlayground = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label htmlFor="show-component-checkbox">
        <input
          id="show-component-checkbox"
          type="checkbox"
          checked={show}
          onChange={() => setShow(prev => !prev)}
        />
        Show component
      </label>
      {show && <UnMount />}
    </div>
  );
};
