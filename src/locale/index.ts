import get from 'lodash/get';
import en from './en.json';

function useLocale() {
  return {
    t: (key: string): string => get(en, key, key.toString()),
  };
}

export default useLocale;
