import { useState } from 'react';

export function usetitle() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  return { count, increment }
}
