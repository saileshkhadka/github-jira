import ForgeUI, { render, Fragment, Text, IssuePanel } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>sailesh</Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
