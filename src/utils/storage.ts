
const storagePrefix = import.meta.env.VITE_STORAGE_PREFIX || '';

export const localStg = createStorage<StorageType.Local>('local', storagePrefix);

/** The storage type */
export type StorageType = 'local' | 'session';

export function createStorage<T extends object>(type: StorageType, storagePrefix: string) {
  const stg = type === 'session' ? window.sessionStorage : window.localStorage;

  const storage = {
    /**
     * Set session
     *
     * @param key Session key
     * @param value Session value
     */
    set<K extends keyof T>(key: K, value: T[K]) {
      const json = JSON.stringify(value);

      stg.setItem(`${storagePrefix}${key as string}`, json);
    },
    /**
     * Get session
     *
     * @param key Session key
     */
    get<K extends keyof T>(key: K): T[K] | null {
      const json = stg.getItem(`${storagePrefix}${key as string}`);
      if (json) {
        let storageData: T[K] | null = null;

        try {
          storageData = JSON.parse(json);
        } catch {}

        if (storageData) {
          return storageData as T[K];
        }
      }

      stg.removeItem(`${storagePrefix}${key as string}`);

      return null;
    },
    remove(key: keyof T) {
      stg.removeItem(`${storagePrefix}${key as string}`);
    },
    clear() {
      stg.clear();
    }
  };
  return storage;
}
