import Formsy from 'formsy-react';
import { FormsyProps } from 'formsy-react/dist/Formsy';

type Props = FormsyProps;

function FormsyContainer(props: Props) {
  const { onSubmit, children, ...rest } = props;

  return (
    <Formsy onSubmit={onSubmit} {...rest}>
      {children}
    </Formsy>
  );
}

export default FormsyContainer;
