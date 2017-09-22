/**
 * Created by tofr on 09.03.2017.
 */
export interface MappingElement {
	id: string;
}

export interface MappingType<T> {
	[key: string]: T;
}

export class Mapping<T> {
	private mapping: MappingType<T> = Object.create(null);

	public put(key: string, element: T): Mapping<T> {
		this.mapping[key] = element;
		return this;
	}

	public putAll(extractor: (element: T) => string, array: T[]): Mapping<T> {
		for (const element of array) {
			this.put(extractor(element), element);
		}
		return this;
	}

	public updateAll(fct: (element: T) => any) {
		for (const prop in this.mapping) {
			fct(this.mapping[prop]);
		}
	}

	public remove(key: string): Mapping<T> {
		delete this.mapping[key];
		return this;
	}

	public clear(): Mapping<T> {
		this.mapping = {};
		return this;
	}

	public get(key: string): T | undefined {
		return this.mapping[key];
	}
}
