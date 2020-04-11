/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * Check value is undefined or null
 * @param value
 */
export const isVoid = (value: unknown): value is void => {
	return typeof value === 'undefined' || value === null;
};