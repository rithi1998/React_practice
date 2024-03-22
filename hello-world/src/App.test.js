import { render, screen } from '@testing-library/react';
import App from './App';
import FirstBind from './Bind';
import { Welcome } from './FunctionalComponents';
import renderer from 'react-test-renderer';
// test('renders learn react link', () => {
//   render(<FirstBind />);
//   const linkElement = screen.getByTestId("Rithi");
//   expect(linkElement).toBeInTheDocument()
// })

// it('Functional component',()=>{
//   render(<Welcome/>);
//   const FunctionElement=screen.getByText("Hello Raj");
//   expect(FunctionElement).toBeInTheDocument()
// })

test('renders the components',()=>{
  const tree=renderer.create(
    <div>
      <FirstBind/>
      <Welcome/>
    </div>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});