/*
 * @Author: jsonchou
 * @Date: 2019-08-01 18:04:40
 * @Last Modified by: jsonchou
 * @Last Modified time: 2020-07-23 19:55:06
 */
const path = require('path');
const chalk = require('chalk');
const doneRainbow = require('done-rainbow');
const { execSync } = require('child_process');
const { version, zax } = require('../../../package.json');
const checkNpm = require('./checkNpm');

const RELEASE_LOG = process.argv[2] || '';

const {
	innerModule, needBuild, test, docs, cleanDirs,
} = zax;

const increaseVersion = () => {
	const prefix = version.slice(0, version.lastIndexOf('.'));
	const suffix = version.slice(version.lastIndexOf('.') + 1);
	return `${prefix}.${parseInt(suffix) + 1}`;
};

const decreaseVersion = () => {
	const prefix = version.slice(0, version.lastIndexOf('.'));
	const suffix = version.slice(version.lastIndexOf('.') + 1);
	return `${prefix}.${parseInt(suffix) - 1}`;
};

const doRun = async (cmd) => {
	try {
		execSync(`npm run ${cmd}`, { stdio: 'inherit' });
	} catch (err) {
		console.log(`npm run ${cmd}`, err);
		throw err;
	}
};

const doPublish = async () => {
	if (!RELEASE_LOG) {
		console.error(chalk.bold.red('please input release log'));
		return;
	}

	const safeNpm = checkNpm(innerModule);

	if (!safeNpm) {
		return;
	}

	cleanDirs && cleanDirs.length && await doRun('clean');

	test && await doRun('test');

	docs && await doRun('docs');

	needBuild && await doRun('build');

	let version = increaseVersion();

	try {
		execSync('git add .', { stdio: 'inherit' });
		const logInfo = `chore(release): v${version} ${RELEASE_LOG}`;
		execSync(`git commit -am "${logInfo}"`, { stdio: 'inherit' });
		execSync('git push', { stdio: 'inherit' });
	} catch (err) {
		console.log('git error', err);
		return
	}

	try {
		// + 版本
		execSync(`npm version ${version} `, { stdio: 'inherit' });
		execSync('npm publish', { stdio: 'inherit' });
	} catch (err) {
		// - 版本
		console.log('npm publish error', err);
		version = decreaseVersion()
		execSync(`npm version ${version} `, { stdio: 'inherit' });
		return
	}

	execSync('git status', { stdio: 'inherit' });
	execSync('git push', { stdio: 'inherit' });

	doneRainbow(`version ${version} published!`);
};

doPublish();
