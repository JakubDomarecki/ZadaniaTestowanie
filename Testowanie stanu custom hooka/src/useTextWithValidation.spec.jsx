import { useTextWithValidation } from "./useTextWithValidation"
import {renderHook, act} from '@testing-library/react'

describe('<UseTextWidthValidation/>', () => {
  test('should return empty string and valid as false', () => {
    const {result} = renderHook(useTextWithValidation)
    
    expect(result.current.text).toBe('')
    expect(result.current.isValid).toBe(false)
  }) 

  it('return valid true if text is correcrtly provided', () => {
    const {result} = renderHook(useTextWithValidation)

    act(() => {
      result.current.handleChange('valid text');
    })

    expect(result.current.isValid).toBeTruthy()
  }) 

  it('return valid false id text is provided incorrectly', () => {
    const {result} = renderHook(useTextWithValidation)

    act(() => {
      result.current.handleChange('FUIOSDFBUISDAFBDUIASFBDUIASFBASDUFASDUFSD');
    })

    expect(result.current.isValid).toBeFalsy
  })

  it('return correctly new text', () => {
    const {result} = renderHook(useTextWithValidation)

    act(() => {
      result.current.handleChange('SIEMANOOO')
    })

    expect(result.current.text).toBe('SIEMANOOO')

  })

})