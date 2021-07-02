import { renderHook, act } from '@testing-library/react-hooks';
import { usetitle } from './usetitle';

it('should increment counter', () => {
  const { result } = renderHook(() => usetitle())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
