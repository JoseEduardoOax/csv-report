import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReaders';

// const reader = new MatchReader('football.csv');
// reader.read();

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
console.log(`Man United won ${manUnitedWins} games`);
