const {sortAlphabetically, sortByNameLength, sortByLineLength} = require('../src/sorters');

const a = {
  key: { name: 'Avraam' },
  end: 10, start: 5
};

const b = {
  key: { name: 'Mavridis' },
  end: 20, start: 12 
}

describe('Sorterts', () => {
  it('should sort alphabetically', () => {
    expect(sortAlphabetically(b,a)).toEqual(true);
    expect(sortAlphabetically(a,b)).toEqual(false);
  });

  it('should sort by name length', () => {
    expect(sortByNameLength(b,a)).toEqual(true);
    expect(sortByNameLength(a,b)).toEqual(false);
  });

  it('should sort by line length', () => {
    expect(sortByLineLength(a,b)).toEqual(false);
    expect(sortByLineLength(b,a)).toEqual(true);
  });
});
