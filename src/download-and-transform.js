import fetch from 'node-fetch';
import JSZip from 'jszip';
import {mkdir, writeFile} from 'fs/promises';
import {join, dirname, basename} from 'path';
import {tmpdir} from 'os';
import {compileFromFile} from 'json-schema-to-typescript';


const downloadSchemas = async (jsonSchemasZipUrl) => {
	const tempFolder = tmpdir();
	const response = await fetch(jsonSchemasZipUrl);
	const zip = new JSZip();
	const {files} = await zip.loadAsync(await response.arrayBuffer()); // Load the zip file asynchronously
	const tmpFiles = [];
	for (const file of Object.values(files)) {
		if (!file.name.endsWith('.json')) {
			continue;
		}
		const filepath = join(tempFolder, file.name);
		await writeFile(filepath, await file.async('string'));
		tmpFiles.push(filepath);
	}
	return tmpFiles;
};

const transformSchemas = async (outputFolder, files) => {
	const typesFolder = join(__dirname, '..', outputFolder);

	const indexContent = ['// This file is auto-generated by tools/transform-snapshot.js'];
	await mkdir(typesFolder, {recursive: true});
	for (const file of files) {
		const tsContent = await compileFromFile(file, {cwd: dirname(file), additionalProperties: false});
		const typename = basename(file).replace('.json', '');
		const filepath = join(typesFolder, `${typename}.ts`);
		await writeFile(filepath, tsContent);
		indexContent.push(`export * as ${typename} from './${typename}';`);
	}
	await writeFile(join(typesFolder, 'index.ts'), indexContent.join('\n'));
};

const downloadAndTransform = async (jsonSchemasZipUrl, outputFolder) => {
	const files = await downloadSchemas(jsonSchemasZipUrl);
	await transformSchemas(outputFolder, files);
};

export default downloadAndTransform;
