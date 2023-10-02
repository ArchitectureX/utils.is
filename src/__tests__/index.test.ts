import { describe, expect, it } from '@jest/globals'

import is from '../index'

describe('is', () => {
  describe('array', () => {
    it('should return true for arrays', () => {
      expect(is([1, 2, 3]).array()).toBe(true)
      expect(is([]).array()).toBe(true)
    })

    it('should return false for non-arrays', () => {
      expect(is({}).array()).toBe(false)
      expect(is(123).array()).toBe(false)
      expect(is('test').array()).toBe(false)
    })
  })

  describe('defined', () => {
    it('should return true for defined values', () => {
      expect(is(0).defined()).toBe(true)
      expect(is([]).defined()).toBe(true)
      expect(is('').defined()).toBe(true)
    })

    it('should return false for undefined or null', () => {
      expect(is(undefined).defined()).toBe(false)
      expect(is(null).defined()).toBe(false)
    })
  })

  describe('email', () => {
    it('should return true for valid emails', () => {
      expect(is('test@example.com').email()).toBe(true)
    })

    it('should return false for invalid emails', () => {
      expect(is('test@.com').email()).toBe(false)
      expect(is('test@com').email()).toBe(false)
      expect(is('test.com').email()).toBe(false)
    })
  })

  describe('empty', () => {
    it('should return true for empty values', () => {
      expect(is('').empty()).toBe(true)
      expect(is([]).empty()).toBe(true)
      expect(is({}).empty()).toBe(true)
      expect(is({ key: undefined }).empty()).toBe(true)
    })

    it('should return false for non-empty values', () => {
      expect(is('test').empty()).toBe(false)
      expect(is([1, 2, 3]).empty()).toBe(false)
      expect(is({ key: 'value' }).empty()).toBe(false)
    })
  })

  describe('json', () => {
    it('should return true for valid JSON strings', () => {
      expect(is('{"key": "value"}').json()).toBe(true)
    })

    it('should return false for invalid JSON strings', () => {
      expect(is('{"key": "value}').json()).toBe(false)
      expect(is('not json').json()).toBe(false)
    })

    it('should return false for non-string values', () => {
      expect(is({}).json()).toBe(false)
      expect(is([]).json()).toBe(false)
    })
  })

  describe('number', () => {
    it('should return true for numbers', () => {
      expect(is(123).number()).toBe(true)
    })

    it('should return false for non-numbers', () => {
      expect(is('123').number()).toBe(false)
      expect(is([]).number()).toBe(false)
      expect(is({}).number()).toBe(false)
    })
  })

  describe('string', () => {
    it('should return true for strings', () => {
      expect(is('test').string()).toBe(true)
    })

    it('should return false for non-strings', () => {
      expect(is(123).string()).toBe(false)
      expect(is([]).string()).toBe(false)
      expect(is({}).string()).toBe(false)
    })
  })
})
