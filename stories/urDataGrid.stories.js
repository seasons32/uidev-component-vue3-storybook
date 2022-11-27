import urDataGrid from '@grid/urDataGrid/urDataGrid.vue';

export default {
  title: 'UI Dev/DataGrid',
  component: urDataGrid,
  argTypes: { },
};

const Template = (args) => ({
  components: { urDataGrid },
  setup() {
    return { args };
  },
  template: `<ur-data-grid ref="grid" :headers="columns" :data-set-options="{id: 'id'}"/>`,
  data() {return {
    list : [
      {"id":"ID_1","str1":"sum do","str3":"First","num2":1,"num5":305508,"code2":"Cherry"},
      {"id":"ID_2","str1":"sum do","str3":"Second","num2":2,"num5":305508,"code2":"Cherry"},
      {"id":"ID_3","str1":"sum do","str3":"Third","num2":3,"num5":305508,"code2":"Cherry"},
      {"id":"ID_4","str1":"sum do","str3":"Fourth","num2":4,"num5":305508,"code2":"Cherry"},
      {"id":"ID_5","str1":"sum do","str3":"Fifth","num2":5,"num5":305508,"code2":"Cherry"},
      {"id":"ID_6","str1":"sum do","str3":"Sixth","num2":6,"num5":305508,"code2":"Cherry"},
      {"id":"ID_7","str1":"sum do","str3":"Seventh","num2":7,"num5":305508,"code2":"Cherry"},
      {"id":"ID_8","str1":"sum do","str3":"Eighth","num2":8,"num5":305508,"code2":"Cherry"},
      {"id":"ID_9","str1":"sum do","str3":"Ninth","num2":9,"num5":305508,"code2":"Cherry"},
      {"id":"ID_10","str1":"sum do","str3":"Tenth","num2":10,"num5":305508,"code2":"Cherry"}
    ],
    columns : [
      {value:'id'   ,text:'ID'     , width:80 },
      {value:'str1' ,text:'Name'   , width:150},
      {value:'str3' ,text:'Address'},
      {value:'num2' ,text:'Age'    , width:100, type:'number'},
      {value:'num5' ,text:'Balance', width:150, type:'number'},
      {value:'code2',text:'Fruit' , width:100, type:'code'},
    ]
  }},
  mounted() {this.$refs.grid.setData(this.list, {id: 'id'})}
});

export const Default = Template.bind({});
// Default.args = {};

