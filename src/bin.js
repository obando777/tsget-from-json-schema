import minimist from 'minimist';
import downloadAndTransform from "./download-and-transform";

const argv = minimist(process.argv.slice(2));

const jsonSchemasZipUrl = argv._[0];
const outputFolder = argv._[1];

if(jsonSchemasZipUrl && outputFolder){
	downloadAndTransform(jsonSchemasZipUrl, outputFolder).catch(console.error);
} else {
	console.error('Usage: tsget-from-json-schema <jsonSchemasZipUrl> <outputFolder>');
}
