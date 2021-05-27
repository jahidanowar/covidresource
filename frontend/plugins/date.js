import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/Y hh:mm A");
  }
});
