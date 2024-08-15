import {renderHook} from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'
import { act } from 'react'

describe('useLocalStorage hook', () => {
  test('should initialize with the initial value when localStorage does not have the key,', () => {

    const {result} = renderHook(() => useLocalStorage('testKey', 'defaultValue'))
    
    expect(result.current[0]).toBe('defaultValue')
  })


  it('should initialize with the local storage data', () => {
    const LocalStorageData = 'data from localstorage'
    localStorage.setItem('test', JSON.stringify(LocalStorageData))

    const {result} = renderHook(() => useLocalStorage('test', 'initialValue'));

    expect(result.current[0]).toBe(LocalStorageData)

  });


  test("should be able to update the value", () => {
    const {result} = renderHook(() => useLocalStorage('key', 'initialValue'))

    act(() => {
      result.current[1]("newValue")
    })

    expect(result.current[0]).toBe('newValue')
    expect(localStorage.getItem('key')).toBe(JSON.stringify('newValue'))
  })


  test('should update the value when localStorage changes', () => {
    const {result} = renderHook(() => useLocalStorage('key', 'initialValue'))

    act(() => {
      localStorage.setItem('key', JSON.stringify('externalValue'))
      window.dispatchEvent(new Event("storage"));
    })

    expect(result.current[0]).toBe('externalValue')
  })
})