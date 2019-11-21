import React from 'react';

const Example = () => {
  return (
    <div>
      Example
    </div>
  );
};

Example.propTypes = {
};

export default Example;




function debounce(func, delay = 1000) {
  let timer;

  function debounced(...args) {
    debounced.cancel();
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }

  debounced.cancel = function () {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  }
  return debounced
}
