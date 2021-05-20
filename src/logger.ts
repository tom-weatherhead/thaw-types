// thaw-types/src/logger.ts

// A 'logger' is something that provides a logging service.
// A logger could log errors, warnings, informational messages, etc.
// A logger could log to the console, a file, a database, etc.

import { Observable } from 'rxjs';

export const loggerPriorityFatalError = 1;
export const loggerPriorityError = 2;
export const loggerPriorityWarning = 3;
export const loggerPriorityInfo1 = 4;
export const loggerPriorityInfo2 = 5;
export const loggerPriorityInfo3 = 6;

export const loggerPriorityMinimumError = loggerPriorityWarning;
export const loggerPriorityMinimum = loggerPriorityInfo3;

export interface ILogEntry {
	readonly priority: number;
	readonly datetime?: Date;
	readonly message: string;
}

export interface ILogger {
	// TODO? :
	// isOpen: boolean;
	// hasBeenClosed: boolean;
	// openLog();
	// closeLog();

	log(logEntry: ILogEntry): Observable<unknown>;
	// Or? : log<T>(logEntry: ILogEntry): Observable<T>;
}

export interface ILogMessageDispatcher {
	addListener(logger: ILogger): void;
	log(logEntry: ILogEntry): void;
	// log(logEntry: ILogEntry): Observable<unknown>;
	// flush(): void;
	// close(): void;
}
