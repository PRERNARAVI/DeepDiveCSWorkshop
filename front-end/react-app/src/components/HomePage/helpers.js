/* eslint-disable react/forbid-foreign-prop-types */
function getUnhandledProps(ComponentProps, props) {
  if (ComponentProps) {
    if (typeof Object.keys(ComponentProps) !== 'undefined' && Object.keys(ComponentProps).length > 0) {
      // You have an array
      const handledProps = Object.keys(ComponentProps); 
      return Object.keys(props).reduce((acc, prop) => {
        if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
        return acc;
      }, {});
    }
  } else {
    // return nothing
  }
    
    
  }
  
  export { getUnhandledProps };