import { inject, provide } from 'vue';
import type { InjectionKey } from 'vue';

export default function useContext<T extends (...args: any[]) => any>(contextName: string, fn: T) {
  type Context = ReturnType<T>;

  const { useProvide, useInject: useStore } = createContext<Context>(contextName);

  function setupStore(...args: Parameters<T>) {
    const context: Context = fn(...args);
    return useProvide(context);
  }

  return {
    /** Setup store in the parent component */
    setupStore,
    /** Use store in the child component */
    useStore
  };
}

/** Create context */
function createContext<T>(contextName: string) {
  const injectKey: InjectionKey<T> = Symbol(contextName);

  function useProvide(context: T) {
    provide(injectKey, context);

    return context;
  }

  function useInject() {
    return inject(injectKey) as T;
  }

  return {
    useProvide,
    useInject
  };
}
