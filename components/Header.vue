<template>
  <div
    class="header__container px-[15px] lg:px-[50px] z-10"
    :class="{ 'sticky w-full bg-white top-0 left-0': !topOfPage }"
  >
    <header
      class="header py-2 lg:py-[21px] grid items-center"
      :class="{ 'py-1 lg:py-1': !topOfPage }"
    >
      <div class="header__logo w-1/3">
        <h1 class="text-orange">HYBRY</h1>
      </div>
      <div class="header__nav gap-[50px] items-center w-5/12 hidden lg:flex">
        <p class="cursor-pointer selected">Dashboard</p>
        <p class="cursor-pointer">Influencers</p>
      </div>
      <div class="header__right hidden lg:flex gap-2.5 items-center">
        <div class="header__search">
          <div
            class="search relative rounded-full flex justify-end items-center"
            :class="{ 'border-2': isSearchShown }"
          >
            <input
              type="text"
              name="search"
              placeholder="Username..."
              class="search__input py-2.5 pl-4 outline-none bg-transparent"
              :class="{ 'w-0 py-0 pl-0': !isSearchShown }"
              v-model="search"
              @input="setSearch()"
              @blur="isSearchShown = false"
            />
            <button
              class="search__btn flex justify-center items-center"
              @click="isSearchShown = !isSearchShown"
            >
              <svg
                class=""
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="!isSearchShown"
              >
                <path
                  d="M20.71 18.79L17 15.11C18.4401 13.3144 19.1375 11.0353 18.9488 8.74133C18.7601 6.44733 17.6997 4.31281 15.9855 2.77667C14.2714 1.24053 12.0338 0.419537 9.73295 0.482497C7.43207 0.545457 5.24275 1.48759 3.61517 3.11517C1.98759 4.74275 1.04546 6.93207 0.982497 9.23295C0.919537 11.5338 1.74053 13.7714 3.27667 15.4855C4.81281 17.1997 6.94733 18.2601 9.24133 18.4488C11.5353 18.6375 13.8144 17.9401 15.61 16.5L19.29 20.18C19.383 20.2738 19.4936 20.3482 19.6154 20.3989C19.7373 20.4497 19.868 20.4758 20 20.4758C20.132 20.4758 20.2627 20.4497 20.3846 20.3989C20.5065 20.3482 20.6171 20.2738 20.71 20.18C20.8903 19.9936 20.991 19.7444 20.991 19.485C20.991 19.2257 20.8903 18.9765 20.71 18.79ZM10 16.5C8.61556 16.5 7.26218 16.0895 6.11103 15.3203C4.95989 14.5511 4.06268 13.4579 3.53287 12.1788C3.00306 10.8997 2.86443 9.49226 3.13453 8.13439C3.40463 6.77653 4.07131 5.52925 5.05028 4.55028C6.02925 3.57131 7.27653 2.90463 8.63439 2.63453C9.99226 2.36443 11.3997 2.50306 12.6788 3.03287C13.9579 3.56268 15.0511 4.45989 15.8203 5.61103C16.5895 6.76218 17 8.11556 17 9.50003C17 11.3565 16.2625 13.137 14.9498 14.4498C13.637 15.7625 11.8565 16.5 10 16.5Z"
                  fill="#242424"
                />
              </svg>
              <svg
                v-else
                class=""
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.71 18.79L17 15.11C18.4401 13.3144 19.1375 11.0353 18.9488 8.74133C18.7601 6.44733 17.6997 4.31281 15.9855 2.77667C14.2714 1.24053 12.0338 0.419537 9.73295 0.482497C7.43207 0.545457 5.24275 1.48759 3.61517 3.11517C1.98759 4.74275 1.04546 6.93207 0.982497 9.23295C0.919537 11.5338 1.74053 13.7714 3.27667 15.4855C4.81281 17.1997 6.94733 18.2601 9.24133 18.4488C11.5353 18.6375 13.8144 17.9401 15.61 16.5L19.29 20.18C19.383 20.2738 19.4936 20.3482 19.6154 20.3989C19.7373 20.4497 19.868 20.4758 20 20.4758C20.132 20.4758 20.2627 20.4497 20.3846 20.3989C20.5065 20.3482 20.6171 20.2738 20.71 20.18C20.8903 19.9936 20.991 19.7444 20.991 19.485C20.991 19.2257 20.8903 18.9765 20.71 18.79ZM10 16.5C8.61556 16.5 7.26218 16.0895 6.11103 15.3203C4.95989 14.5511 4.06268 13.4579 3.53287 12.1788C3.00306 10.8997 2.86443 9.49226 3.13453 8.13439C3.40463 6.77653 4.07131 5.52925 5.05028 4.55028C6.02925 3.57131 7.27653 2.90463 8.63439 2.63453C9.99226 2.36443 11.3997 2.50306 12.6788 3.03287C13.9579 3.56268 15.0511 4.45989 15.8203 5.61103C16.5895 6.76218 17 8.11556 17 9.50003C17 11.3565 16.2625 13.137 14.9498 14.4498C13.637 15.7625 11.8565 16.5 10 16.5Z"
                  fill="#EE684B"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="header__auth">
          <AuthBtn />
        </div>
      </div>
      <div
        class="header__mobile flex lg:hidden gap-4 items-center justify-self-end"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2825 15.2176L13.5001 12.4576C14.5801 11.1109 15.1032 9.40152 14.9617 7.68103C14.8201 5.96053 14.0248 4.35964 12.7392 3.20753C11.4536 2.05543 9.77541 1.43968 8.04974 1.4869C6.32408 1.53412 4.68209 2.24072 3.46141 3.46141C2.24072 4.68209 1.53412 6.32408 1.4869 8.04974C1.43968 9.77541 2.05543 11.4536 3.20753 12.7392C4.35964 14.0248 5.96053 14.8201 7.68103 14.9617C9.40152 15.1032 11.1109 14.5801 12.4576 13.5001L15.2176 16.2601C15.2873 16.3303 15.3702 16.3861 15.4616 16.4242C15.553 16.4623 15.651 16.4819 15.7501 16.4819C15.8491 16.4819 15.9471 16.4623 16.0385 16.4242C16.1299 16.3861 16.2128 16.3303 16.2825 16.2601C16.4177 16.1202 16.4933 15.9333 16.4933 15.7388C16.4933 15.5443 16.4177 15.3574 16.2825 15.2176ZM8.25005 13.5001C7.2117 13.5001 6.19666 13.1921 5.33331 12.6153C4.46995 12.0384 3.79704 11.2185 3.39968 10.2591C3.00232 9.29983 2.89836 8.24423 3.10093 7.22583C3.3035 6.20743 3.80351 5.27197 4.53774 4.53774C5.27197 3.80351 6.20743 3.3035 7.22583 3.10093C8.24423 2.89836 9.29983 3.00232 10.2591 3.39968C11.2185 3.79704 12.0384 4.46995 12.6153 5.33331C13.1921 6.19666 13.5001 7.2117 13.5001 8.25005C13.5001 9.64244 12.9469 10.9778 11.9624 11.9624C10.9778 12.9469 9.64244 13.5001 8.25005 13.5001Z"
            fill="#242424"
          />
        </svg>
        <div class="header__burger" @click="showHideSidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <SIdebar v-if="isSidebarOpened" />
      </div>
    </header>
  </div>
</template>

<script>
import SIdebar from "./SIdebar.vue";
import AuthBtn from "./AuthBtn.vue";
export default {
  data() {
    return {
      search: "",
      topOfPage: true,
      isSearchShown: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
    showHideSidebar() {
      this.$store.commit("showHideSidebar");
    },
    setSearch() {
      this.$store.commit("SEARCH_ACCOUNTS", this.search);
    },
  },
  computed: {
    isSidebarOpened() {
      return this.$store.state.isSidebarOpened;
    },
  },
  components: { SIdebar, AuthBtn },
};
</script>

<style lang="scss" scoped>
.header {
  transition: all 0.2s ease-in-out;
  grid-template-columns: repeat(3, 1fr);
  &__right {
    justify-self: end;
  }
  &__container {
    border-bottom: 1px solid #f2f2f2;
  }
  &__container.sticky {
    .header__nav {
      transition: all 0.2s ease-in-out;
      p {
        &::before {
          display: none;
        }
      }
    }
  }
  &__logo {
    h1 {
      font-size: 24px;
      line-height: 32px;
      font-weight: 900;
    }
  }
  &__nav {
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
    }
    .selected {
      color: #5e58d6;
      position: relative;
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        top: 52px;
        height: 2px;
        background: #5e58d6;
      }
    }
  }
  .search {
    --size: 44px;
    display: flex;
    height: var(--size);
    position: relative;

    &__input {
      flex-grow: 1;
      transition: width 0.5s ease-in-out;
      &:focus {
        outline: none;
      }
    }

    &__btn {
      width: var(--size);
      height: var(--size);
    }
  }
}

@media (max-width: 1024px) {
  .header {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
