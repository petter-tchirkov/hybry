<template>
  <table class="datatable w-full">
    <thead class="datatable__header">
      <th class="py-[15px] text-left">#</th>
      <th class="py-[15px] text-left">Name</th>
      <th class="py-[15px] text-left">Followers</th>
      <th class="py-[15px] text-center">Audience Quality</th>
      <th class="py-[15px] text-center">Social mentions</th>
      <th class="py-[15px] text-center">Influencers</th>
    </thead>
    <tr v-for="row in users" :key="row.id" class="datatable__row flex py-3.5">
      <td class="datatable__id flex items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-4"
        >
          <path
            d="M15.5 6.57502C15.575 6.20002 15.275 5.75001 14.9 5.75001L10.625 5.15001L8.675 1.25001C8.6 1.10001 8.525 1.02501 8.375 0.950015C8 0.725015 7.55 0.875015 7.325 1.25001L5.45 5.15001L1.175 5.75001C0.95 5.75001 0.8 5.82502 0.725 5.97502C0.425 6.27501 0.425 6.72501 0.725 7.02501L3.8 10.025L3.05 14.3C3.05 14.45 3.05 14.6 3.125 14.75C3.35 15.125 3.8 15.275 4.175 15.05L8 13.025L11.825 15.05C11.9 15.125 12.05 15.125 12.2 15.125C12.275 15.125 12.275 15.125 12.35 15.125C12.725 15.05 13.025 14.675 12.95 14.225L12.2 9.95002L15.275 6.95002C15.425 6.87501 15.5 6.72502 15.5 6.57502Z"
            fill="#AEACBA"
          />
        </svg>

        {{ row.id }}
      </td>
      <td class="flex gap-2.5">
        <div class="datatable__avatar">
          <img :src="require('../assets/images/' + row.image)" alt="" />
        </div>
        <div class="datatable__name">
          <p>{{ row.name }}</p>
          <span class="text-[#677D80]">PRJ1</span>
        </div>
      </td>
      <td class="datatable__followers flex items-center gap-6">
        <p class="py-2 px-4 text-white">{{ row.followers }}</p>
        <span class="flex text-[#69B18C] text-sm items-center gap-2">
          <svg
            width="7"
            height="6"
            viewBox="0 0 7 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.4641 0.5L6.92823 5.5H0L3.4641 0.5Z" fill="#69B18C" />
          </svg>

          {{ row.plus }}%
        </span>
      </td>
      <td
        class="text-orange text-lg leading-6 flex justify-center items-center font-extrabold"
      >
        {{ row.audience_quality }}%
      </td>
      <td
        class="text-violet text-lg leading-6 flex justify-center items-center font-extrabold"
      >
        {{ row.social_mentions }}
      </td>
      <td
        class="text-violet text-lg leading-6 flex justify-center items-center font-extrabold"
      >
        {{ row.influencers }}
      </td>
      <td class="flex gap-4">
        <a
          :href="row.discord"
          class="discord border rounded-3xl flex gap-3 items-center px-8 py-3"
        >
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1361 1.42627C17.712 0.75997 16.1893 0.27573 14.5973 0C14.4018 0.353476 14.1734 0.82891 14.0159 1.20712C12.3236 0.952616 10.6469 0.952616 8.98573 1.20712C8.82828 0.82891 8.59468 0.353476 8.39741 0C6.80374 0.27573 5.27928 0.761749 3.85518 1.4298C0.982756 5.7704 0.20409 10.0032 0.593424 14.1759C2.49856 15.5986 4.34487 16.4628 6.16003 17.0284C6.6082 16.4116 7.00791 15.7559 7.35224 15.0649C6.69644 14.8157 6.06832 14.5082 5.47482 14.1512C5.63227 14.0345 5.78628 13.9125 5.93508 13.7871C9.55501 15.4802 13.4882 15.4802 17.0648 13.7871C17.2154 13.9125 17.3694 14.0345 17.5251 14.1512C16.9299 14.5099 16.3 14.8174 15.6442 15.0666C15.9885 15.7559 16.3865 16.4134 16.8364 17.0301C18.6533 16.4646 20.5014 15.6004 22.4065 14.1759C22.8633 9.33867 21.6261 5.14476 19.1361 1.42627ZM7.84541 11.6097C6.75874 11.6097 5.86759 10.5952 5.86759 9.35987C5.86759 8.1245 6.73972 7.10828 7.84541 7.10828C8.95114 7.10828 9.84226 8.12272 9.82323 9.35987C9.82495 10.5952 8.95114 11.6097 7.84541 11.6097ZM15.1545 11.6097C14.0678 11.6097 13.1767 10.5952 13.1767 9.35987C13.1767 8.1245 14.0488 7.10828 15.1545 7.10828C16.2602 7.10828 17.1514 8.12272 17.1323 9.35987C17.1323 10.5952 16.2602 11.6097 15.1545 11.6097Z"
              fill="#5865F2"
            /></svg
          >Discord</a
        >
        <a
          :href="row.twitter"
          class="twitter border rounded-3xl flex gap-3 items-center px-8 py-3"
        >
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 2.80003C19.7483 3.12612 18.9534 3.34169 18.14 3.44003C18.9982 2.92735 19.6413 2.12081 19.95 1.17003C19.1436 1.65009 18.2608 1.98832 17.34 2.17003C16.7245 1.5026 15.905 1.05832 15.0098 0.906878C14.1147 0.755433 13.1945 0.905385 12.3938 1.33322C11.593 1.76105 10.9569 2.44256 10.5852 3.27086C10.2135 4.09917 10.1273 5.02742 10.34 5.91003C8.70943 5.82755 7.11444 5.40298 5.65865 4.66389C4.20287 3.9248 2.91885 2.88772 1.89 1.62003C1.52914 2.25019 1.33952 2.96385 1.34 3.69003C1.33872 4.36441 1.50422 5.02864 1.82176 5.62359C2.13929 6.21854 2.59902 6.72574 3.16 7.10003C2.50798 7.08229 1.86989 6.90733 1.3 6.59003V6.64003C1.30489 7.58492 1.63599 8.49912 2.23731 9.22799C2.83864 9.95687 3.67326 10.4557 4.6 10.64C4.24326 10.7486 3.87287 10.8058 3.5 10.81C3.24189 10.807 2.98442 10.7836 2.73 10.74C2.99391 11.5528 3.50462 12.2632 4.19107 12.7722C4.87753 13.2812 5.70558 13.5636 6.56 13.58C5.1172 14.7153 3.33588 15.3349 1.5 15.34C1.16574 15.3411 0.831736 15.3211 0.5 15.28C2.37443 16.4903 4.55881 17.1327 6.79 17.13C8.32969 17.146 9.85714 16.855 11.2831 16.2741C12.7091 15.6932 14.005 14.8339 15.0952 13.7465C16.1854 12.6591 17.048 11.3654 17.6326 9.94093C18.2172 8.51645 18.512 6.98975 18.5 5.45003C18.5 5.28003 18.5 5.10003 18.5 4.92003C19.2847 4.33484 19.9615 3.61745 20.5 2.80003Z"
              fill="#229BEA"
            />
          </svg>
          Twitter</a
        >
        <a
          :href="row.twitter"
          class="text-white bg-violet border rounded-3xl flex gap-3 items-center px-8 py-3"
          >Website</a
        >
      </td>
    </tr>
  </table>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["GET_USERS"]),
  },
  mounted() {
    this.GET_USERS();
  },
  computed: {
    users() {
      return this.$store.getters.USERS;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.datatable {
  &__header {
    display: grid;
    grid-template-columns: 80px 1fr 1fr 1fr 1fr 1fr 555px;
    border-top: 1px solid #c7c6ca;
  }
  &__row {
    display: grid;
    border-bottom: 1px solid #c7c6ca;
    grid-template-columns: 80px 1fr 1fr 1fr 1fr 1fr 555px;
  }
  &__id {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  &__name {
    p {
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
    }
  }
  &__followers {
    p {
      background: #3533ae;
      border-radius: 7px;
      width: auto;
    }
  }
}
.discord,
.twitter {
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
}
</style>
