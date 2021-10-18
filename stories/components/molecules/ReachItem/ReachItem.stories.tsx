import { Meta, Story } from '@storybook/react';
import ReachItem, {
  ReachItemProps,
} from '../../../../components/molecules/ReachItem';

export default {
  title: 'Components/Molecules/ReachItem',
  component: ReachItem,
} as Meta;

// const Template = (args: InputProps) => <Input {...args} />;
const Template: Story<ReachItemProps> = (args) => <ReachItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  info1: '290M+',
  info2: 'Players Top Up',
};
