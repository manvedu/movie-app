import React from 'react';
import SortControl from './SortControl';

export default {
  title: 'Components/SortControl',
  component: SortControl,
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentSelection: 'releaseDate',
  onSelectionChange: (value) => alert(`Selected: ${value}`),
};
