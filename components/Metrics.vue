<template>
  <div class="metrics grid grid-cols-2 lg:grid-cols-4 mb-10">
    <div class="metrics__item px-5 lg:px-9 py-4">
      <p class="metrics__name mb-1.5">Followers</p>
      <p class="metrics__count mb-1 text-violet">366</p>
      <span class="metrics__percentage">56.68%</span>
    </div>
    <div class="metrics__item px-5 lg:px-9 py-4">
      <p class="metrics__name mb-1.5">Audience Quality</p>
      <p class="metrics__count mb-1 text-orange">77%</p>
      <span class="metrics__percentage">8.381%</span>
    </div>
    <div class="metrics__item px-5 lg:px-9 py-4">
      <p class="metrics__name mb-1.5">Social mentions</p>
      <p class="metrics__count mb-1 text-violet">566</p>
      <span class="metrics__percentage">8.279%</span>
    </div>
    <div class="metrics__item px-5 lg:px-9 py-4">
      <p class="metrics__name mb-1.5">Influencers</p>
      <p class="metrics__count mb-1 text-violet">189</p>
      <span class="metrics__percentage">1.321%</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.metrics {
  border-radius: 20px;
  &__item {
    background: #f7f8fd;
    border: 1px solid #f2f2f2;
    &:first-child {
      border-radius: 20px 0 0 20px;
    }
    &:last-child {
      border-radius: 0 20px 20px 0;
    }
  }
  &__name {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
  }
  &__count {
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
  }
  &__percentage {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #69b18c;
  }
}

@media screen and (max-width: 1024px) {
  .metrics {
    &__item {
      &:first-child {
        border-radius: 20px 0 0 0;
      }
      &:nth-child(2) {
        border-radius: 0 20px 0 0;
      }
      &:nth-child(3) {
        border-radius: 0 0 0 20px;
      }
      &:last-child {
        border-radius: 0 0 20px 0;
      }
    }
    &__name {
      font-size: 16px;
      line-height: 18px;
    }
  }
}
</style>
