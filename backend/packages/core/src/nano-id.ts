import { customAlphabet } from 'nanoid'

export const createDefinedUUID = customAlphabet('1234567890abcdef', 10)