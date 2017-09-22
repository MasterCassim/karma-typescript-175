/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { Mapping } from "@shared/mapping";

describe("Test", () => {

	it("Test123", () => {
		const mapping = new Mapping<number>();

		mapping.put("key", 5);
		expect(mapping.get("key")).toBe(5);
	});

});
