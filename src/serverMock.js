import pages from './ads.json';
import keyBy from 'lodash/keyBy';

const pagesHash = keyBy(pages, ({page}) => page);

export const getPage = (id = 1) => {
  const page = pagesHash[id];

  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          if (page != null) {
            resolve(page);
          } else {
            reject(`Can't fine page ${id}`);
          }
        },
        500
      );
    }
  );
};
