<template>
  <main class="main mt-8 lg:mt-10 px-[15px] lg:px-[50px]">
    <Metrics />
    <DataTable />
  </main>
</template>

<script>
import Metrics from "../components/Metrics.vue";
import DataTable from "../components/DataTable.vue";
import TableMenu from "../components/TableMenu.vue";
export default {
  name: "IndexPage",
  components: { Metrics, DataTable, TableMenu },
};
</script>
