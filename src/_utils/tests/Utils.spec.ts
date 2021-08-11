import { createHoverColor, createPressedColor } from '../color'
import { formatLength } from '..'

describe('color', () => {
  it('should work with createHoverColor', () => {
    expect(createHoverColor('#666666')).toBe('rgba(126, 126, 126, 1)')
    expect(createHoverColor('rgb(42, 148, 125)')).toBe('rgba(76, 165, 146, 1)')
  })

  it('should work with createPressedColor', () => {
    expect(createPressedColor('#666666')).toBe('rgba(90, 90, 90, 1)')
    expect(createPressedColor('rgb(42, 148, 125)')).toBe(
      'rgba(37, 130, 110, 1)'
    )
  })
})

describe('css', () => {
  it('should work with formatLength', () => {
    expect(formatLength(7)).toBe('7px')
    expect(formatLength(2, { offset: 3 })).toBe('5px')
    expect(formatLength(3, { offset: 4, c: 2 })).toBe('14px')
    expect(formatLength('3')).toBe('3px')
    expect(formatLength('3', { attachPx: false })).toBe('3')
    expect(formatLength('2', { offset: 3 })).toBe('5px')
    expect(formatLength('3', { offset: 4, c: 2 })).toBe('14px')
    expect(formatLength('4px')).toBe('4px')
    expect(formatLength('2px', { offset: 3 })).toBe('5px')
    expect(formatLength('3px', { offset: 4, c: 2 })).toBe('14px')
  })
})