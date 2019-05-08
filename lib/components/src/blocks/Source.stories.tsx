import React from 'react';
import { Source, SourceError } from './Source';

export const componentMeta = {
  title: 'Docs|Source',
  Component: Source,
};

export const noStory = () => <Source error={SourceError.NO_STORY} />;
noStory.title = 'no story';

export const sourceUnavailable = () => <Source error={SourceError.SOURCE_UNAVAILABLE} />;
sourceUnavailable.title = 'source unavailable';

const jsxCode = `
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`.trim();

const jsxProps = {};
export const jsx = () => <Source code={jsxCode} language="jsx" />;

const cssCode = `
@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}

.waitingForConnection {
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(.5, 0, 1, 1);
  -webkit-animation-duration: 1.7s;
}
`.trim();

export const css = () => <Source code={cssCode} language="css" />;
