<template>
  <div class="pagination">
    <div class="page" v-for="page in pages" :key="page">{{ page }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersPerPage: 20,
      pageNumber: 1,
    };
  },
  computed: {
    users() {
      return this.$store.getters.USERS;
    },
    pages() {
      return Math.ceil(this.users.length / 20);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users.slice(from, to);
    },
  },
  methods: {
    paginateUsers() {
      console.log(this.paginatedUsers);
      this.$store.commit("SET_PAGINATED_USERS", this.paginatedUsers);
    },
  },
  mounted() {
    this.paginateUsers();
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  .page {
    padding: 8px;
    border: 1px solid #e7e7e7;
  }
}
</style>
