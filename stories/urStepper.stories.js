import urStepper from '@components/element/urStepper/urStepper.vue';
import urIconButton from '@components/element/urIconButton/urIconButton.vue';
// import urIcon from './urIcon.stories.js'

// import { defineCustomElement } from 'vue'
// const ExampleElement = defineCustomElement(urIconButton)

// register
// customElements.define('my-example', ExampleElement)


// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI Dev/Stepper',
  component: urStepper,
  subcomponents: { urIconButton },
  // excludeStories: /*.Data$/,
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { urStepper, urIconButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ur-stepper v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Stepper',
};

