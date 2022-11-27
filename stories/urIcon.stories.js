import urIcon from '@components/element/urIcon/urIcon.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI Dev/Icon',
  component: urIcon,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // onClick: {},
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { urIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ur-icon v-bind="args" icon-type="line" icon-size="medium"></ur-icon>',
});

export const Call = Template.bind({});
Call.args = {
  icon: 'call',
};

export const Mail = Template.bind({});
Mail.args = {
  icon: 'mail',
};

export const Add = Template.bind({});
Add.args = {
  icon: 'add',
};
