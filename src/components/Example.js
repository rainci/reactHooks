import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const [bounceCount, setBounceCount] = useState(0);
  // const debounceSet = debounce(setBounceCount);
  // const debounceSet = React.useCallback(debounce(setBounceCount), []);//useCallback解决防抖问题
  const debounceSet = React.useMemo(() => debounce(setBounceCount), []);
  const handleMouseMove = () => {
    setCount(count+1)
    debounceSet(bounceCount+1)
  }
  return (
    <div onMouseMove={handleMouseMove}>
      Example
      <p>普通次数: {count}</p>
      <p>防抖次数: {bounceCount}</p>
    </div>
  );
};

Example.propTypes = {
};

export default Example;


function debounce(func,delay=1000){
  let timer
  function debounced(...args){
    debounced.cancel();
    timer = setTimeout(()=>{
      // 在此处添加了一行打印代码
      console.log('run-do');
      func.apply(this,args)  
    },delay)  
  }
  debounced.cancel = function(){
    if(timer){
      clearTimeout(timer);
      timer = undefined;
    }
  }
  return debounced
}


// function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;

// // 示例：
// const memoizedCallback = useCallback(
//   () => {
//     doSomething(a, b);
//   },
//   [a, b],
// );
// 通过useCallback的签名可以知道，useCallback第一个参数是一个函数，返回一个 memoized 回调函数，如上面代码中的 memoizedCallback 。useCallback的第二个参数是依赖(deps)，当依赖改变时才更新 memoizedCallback ，也就是在依赖未改变时（或空数组无依赖时）， memoizedCallback 总是指向同一个函数，也就是指向同一块内存区域。当把 memoizedCallbac 当作 props 传递给子组件时，子组件就可以通过shouldComponentUpdate等手段避免不必要的更新。




// function useMemo<T>(factory: () => T, deps: ReadonlyArray<any> | undefined): T;

// // 示例：
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// 通过useMemo的签名可以知道，useMemo第一个参数是一个 factory 函数，该函数的返回结果会通过useMemo缓存下来，只有当useMemo的依赖(deps)改变时才重新执行 factory 函数，memoizedValue 才会被重新计算。 也就是在依赖未改变时（或空数组无依赖时），memoizedValue 总是返回通过useMemo缓存的值。
// 看到这里，相信细心的你也已经发现了，useCallback(fn, deps) 其实相当于 useMemo(() => fn, deps)，所以在最开始我们说：使用useMemo完全可以实现useCallback。

// React 官方有这么一句话:
// 你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们，比如为离屏组件释放内存。


