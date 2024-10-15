import SearchForm from './SearchForm';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialQuery: 'Search...',
  onSearch: (query) => alert(query),
};
