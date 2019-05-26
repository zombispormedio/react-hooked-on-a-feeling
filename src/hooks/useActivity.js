import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback
} from "react";
import PropTypes from "prop-types";

const ActivityContext = createContext({
  activity: [],
  notify: message => {
    console.log(`Activity: ${message}`);
    console.warn(`Activity provider is missing`);
  }
});

export const useActivity = () => useContext(ActivityContext);

export const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);
  const notify = useCallback(
    message => setActivity(prev => [...prev, { message, at: new Date() }]),
    []
  );
  const value = useMemo(() => ({ activity, notify }), [activity]);
  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
};

ActivityProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const withActivity = TargetComponent => {
  const WithActivityComponent = props => (
    <ActivityProvider>
      <TargetComponent {...props} />
    </ActivityProvider>
  );
  WithActivityComponent.displayName = `withActivity(${TargetComponent.displayName ||
    TargetComponent.name})`;

  return WithActivityComponent;
};
