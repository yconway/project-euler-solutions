export function log(message: any, ...args: any[]) {
	// tslint:disable-next-line: no-string-literal
	console['log'](message, ...args)
}
