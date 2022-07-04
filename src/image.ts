// thaw-types/src/image.ts

// pixel iterator -> reader, writer ; nextSlice() : slice = row or col

export interface IImage {
	// Image attributes: width, height, colourModel, numChannels, imageData

	createPixelIterator(options?: {
		startRow?: number; // default is 0
		startCol?: number; // default is 0
		width?: number; // default is imageWidth - startCol
		height?: number; // default is imageheight - startRow
		isReader?: boolean; // default is true
		slicesAreRows?: boolean; // default is true
	}): IPixelIterator;

	// or:
	// createPixelReader(options: {...} = {}): IPixelReader;
	// createPixelWriter(options: {...} = {}): IPixelWriter;
}

export interface IPixelIterator {
	gotoNextPixel(): boolean; // Returns false iff the boundary is reached
	gotoNextSlice(): boolean; // Returns false iff the boundary is reached
}

export interface IPixelReader extends IPixelIterator {
	read(): number[]; // Reads the channels of the current pixels; e.g. [255, 255, 0] for yellow in 8-bits-per-channel RGB
}

export interface IPixelWriter extends IPixelIterator {
	write(channelValues: number[]): void;
}
