// thaw-types/src/colour.ts

export interface IRGBColour {
	r: number; // Red: integer [0...255]
	g: number; // Green: integer [0...255]
	b: number; // Blue: integer [0...255]
}

export interface IRGBAColour extends IRGBColour {
	a: number; // Alpha: real number [0...1]
}
