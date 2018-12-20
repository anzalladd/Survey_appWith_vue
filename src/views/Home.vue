<template>
  <div id="app">
    <!-- If you want to show survey, uncomment the line below -->
    <survey :survey="survey"></survey>
    <!-- If you want to show survey editor, uncomment the line below -->
    <survey-editor></survey-editor>
  </div>
</template>

<script>
import * as SurveyVue from 'survey-vue'
import 'bootstrap/dist/css/bootstrap.css';
var Survey = SurveyVue.Survey
Survey.cssType = "bootstrap";
import PostService from '../services/PostService.js'
import * as widgets from "surveyjs-widgets";
import "inputmask/dist/inputmask/phone-codes/phone.js";

widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.signaturepad(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);

export default {
  name: 'app',
  components: {
    Survey,
  },
  data () {
    var json = []
    var model = new SurveyVue.Model(json)
    return {
        survey: model
    }
  },
  mounted(){
    this.getJson()
  },
  methods:{
    async getJson(){
      const response = await PostService.fetchPost()
      this.json = response.data.posts
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
