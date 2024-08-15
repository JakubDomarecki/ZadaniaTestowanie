import {renderHook} from '@testing-library/react'
import { useDocumentTitle } from './useDocumentTitle'

describe('useDocumentTitle hook', () => {
  test('initial text is the same as provided', () => {
    renderHook(() => useDocumentTitle('siemano') )
    
    expect(document.title).toBe('siemano')
    
  })

  test('props updates work correcrtly', () => {
    const {rerender} = renderHook(({title}) => useDocumentTitle(title), {
      initialProps: {title: 'first props'}
    })
    
    rerender({title: 'updated props'})
    expect(document.title).toBe('updated props')
  })

  test('document title is correcrly cleaned on unmount', () => {
    const {unmount} = renderHook(() => useDocumentTitle('siemano'))

    unmount();

    expect(document.title).toBe("Cleanup title")

  })
})