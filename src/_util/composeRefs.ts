import { Ref } from 'react';

// 同时处理多个 ref
export default function composeRefs<T>(...refs: Ref<T>[]) {
  return (instance: T) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const ref of refs) {
      if (instance && (instance as any).element && typeof ref === 'function') {
        ref((instance as any).element);
      } else if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        (ref as any).current = instance;
      }
    }
  };
}
