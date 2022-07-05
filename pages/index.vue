<template>
  <main class="main mt-8 lg:mt-10 lg:px-[50px] mb-[100px]">
    <Metrics />
    <DataTable />
  </main>
</template>

<script>
import Metrics from "../components/Metrics.vue";
import DataTable from "../components/DataTable.vue";
export default {
  name: "IndexPage",
  components: { Metrics, DataTable },
  data() {
    return {};
  },
};
</script>
