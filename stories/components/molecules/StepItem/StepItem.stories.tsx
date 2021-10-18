import { Meta, Story } from '@storybook/react';
import StepItem, {
  StepItemProps,
} from '../../../../components/molecules/StepItem';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

// const Template = (args: InputProps) => <Input {...args} />;
const Template: Story<StepItemProps> = (args) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '1. Start',
  icon: 'step1',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
