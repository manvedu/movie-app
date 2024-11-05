import React from 'react';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

export const DefaultDialog = () => (
  <Dialog title="Example Dialog" onClose={() => alert("Dialog Closed")}>
    <p>This is an example of dialog content.</p>
  </Dialog>
);
