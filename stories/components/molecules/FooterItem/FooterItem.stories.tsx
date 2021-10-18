import { Meta, Story } from '@storybook/react';
import FooterItem, {
  FooterItemProps,
} from '../../../../components/molecules/FooterItem';

export default {
  title: 'Components/Molecules/FooterItem',
  component: FooterItem,
} as Meta;

// const Template = (args: InputProps) => <Input {...args} />;
const Template: Story<FooterItemProps> = (args) => <FooterItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Company',
  list1: 'About Us',
  list2: 'Press Release',
  list3: 'Terms of Use',
  list4: 'Privacy & Policy',
};
