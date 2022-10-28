import libraries from './libraries.js';

class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredLibraries = libraries.filter(library => library.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredLibraries.length) {
        resolve(filteredLibraries);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;