import Button from './../components/Buttons';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
    },
}

const Template = args => <Button {...args} />

export const Red = Template.bind({});
Red.args = {
    backgroundColor: 'red',
    children: 'Press Me',
    size: "md"
}
