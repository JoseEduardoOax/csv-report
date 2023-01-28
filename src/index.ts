import { MatchReader } from './MatchReaders';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWtihHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
