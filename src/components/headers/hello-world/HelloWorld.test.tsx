import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('should render to the DOM',()=>{
  const {getByText} = render(<HelloWorld/>)

  expect(getByText(/hello world/i)).toBeInTheDocument()
})
