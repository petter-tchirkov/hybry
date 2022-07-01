<template>
  <div class="table-component">
    <div
      class="menu mb-4 flex justify-center lg:justify-between flex-wrap bg-white"
      :class="{
        'sticky mb-0 py-4 w-full bg-white top-[41px] lg:top-[5%] left-0':
          !topOfPage,
      }"
    >
      <div
        class="menu__left flex-grow lg:flex-grow-0 flex flex-wrap lg:justify-start mb-4 lg:mb-0"
      >
        <div
          class="menu__sort w-full flex-1 lg:w-[242px] lg:h-[42px] flex lg:mr-5"
        >
          <div
            class="sort__all flex-grow px-[30px] py-3 border-r cursor-pointer items-center flex"
            :class="{ 'border-[#c7c6ca] bg-[#F1F1F3]': all }"
            @click="all = true"
          >
            <p class="text-center lg:text-left">All NFTs</p>
          </div>
          <div
            class="sort__wish flex-grow px-7 py-3 cursor-pointer items-center flex"
            :class="{ 'border-[#c7c6ca] bg-[#F1F1F3]': !all }"
            @click="all = false"
          >
            <p class="text-center lg:text-left">Watchlist</p>
          </div>
        </div>
        <div class="menu__metrics relative hidden lg:flex lg:h-[42px]">
          <div
            class="metric w-[230px] px-4 py-3 flex justify-between items-center cursor-pointer"
            @click="isDropdownShown = !isDropdownShown"
          >
            Metrics (4)
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1.17C10.8126 0.983753 10.5592 0.879211 10.295 0.879211C10.0308 0.879211 9.77737 0.983753 9.59001 1.17L6.00001 4.71L2.46001 1.17C2.27265 0.983753 2.0192 0.879211 1.75501 0.879211C1.49082 0.879211 1.23737 0.983753 1.05001 1.17C0.956281 1.26297 0.881887 1.37357 0.831118 1.49543C0.780349 1.61729 0.754211 1.74799 0.754211 1.88C0.754211 2.01202 0.780349 2.14272 0.831118 2.26458C0.881887 2.38644 0.956281 2.49704 1.05001 2.59L5.29001 6.83C5.38297 6.92373 5.49357 6.99813 5.61543 7.04889C5.73729 7.09966 5.868 7.1258 6.00001 7.1258C6.13202 7.1258 6.26273 7.09966 6.38459 7.04889C6.50645 6.99813 6.61705 6.92373 6.71001 6.83L11 2.59C11.0937 2.49704 11.1681 2.38644 11.2189 2.26458C11.2697 2.14272 11.2958 2.01202 11.2958 1.88C11.2958 1.74799 11.2697 1.61729 11.2189 1.49543C11.1681 1.37357 11.0937 1.26297 11 1.17Z"
                fill="#C7C6CA"
              />
            </svg>
          </div>
          <div
            class="metric__dropdown w-[230px] py-6 px-4 absolute mt-2 top-full left-0 bg-white z-20"
            v-show="isDropdownShown"
            tabindex="0"
          >
            <div class="metric__row mb-2.5" @click="selected === ''">
              <input
                class="mr-2"
                type="checkbox"
                checked
                id="followers"
                name="followers"
                v-model="followers"
              />
              <label for="followers">Followers</label>
            </div>
            <div class="metric__row mb-2.5">
              <input
                class="mr-2"
                type="checkbox"
                checked
                id="audience"
                name="audience"
                v-model="audience"
              />
              <label for="audience">Audience Quality</label>
            </div>
            <div class="metric__row mb-2.5">
              <input
                class="mr-2"
                type="checkbox"
                checked
                id="social"
                name="social"
                v-model="socials"
              />
              <label for="social">Social mentions</label>
            </div>
            <div class="metric__row mb-6">
              <input
                class="mr-2"
                type="checkbox"
                checked
                id="influencers"
                name="influencers"
                v-model="influencers"
              />
              <label for="influencers">Influencers</label>
            </div>
            <button class="px-8 py-1.5 bg-violet rounded-3xl text-white">
              Save
            </button>
          </div>
        </div>
      </div>
      <div class="menu__right flex items-center gap-[30px] w-full lg:w-auto">
        <div class="menu-mobile__metrics relative flex lg:hidden">
          <div class="metrics-mobile__dropdown">
            <select
              name="metrics"
              id="metrics"
              v-model="selected"
              class="w-[205px] h-[48px] px-4 py-3 flex justify-between items-center cursor-pointer capitalize appearance-none bg-white"
            >
              <option
                v-for="metric in metrics"
                :key="metric.text"
                :value="metric.text"
              >
                {{ metric.text }}
              </option>
            </select>
            <span></span>
          </div>
        </div>
        <div class="pagination flex items-center">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-4 cursor-pointer"
            @click="prevPage()"
          >
            <path
              d="M8.74992 4.25002H3.05742L5.53242 1.78252C5.67365 1.64129 5.75299 1.44974 5.75299 1.25002C5.75299 1.05029 5.67365 0.858745 5.53242 0.717517C5.39119 0.576289 5.19965 0.496948 4.99992 0.496948C4.8002 0.496948 4.60865 0.576289 4.46742 0.717517L0.717422 4.46752C0.649142 4.53885 0.595618 4.62295 0.559922 4.71502C0.484909 4.89761 0.484909 5.10242 0.559922 5.28502C0.595618 5.37708 0.649142 5.46119 0.717422 5.53252L4.46742 9.28252C4.53714 9.35281 4.6201 9.40861 4.71149 9.44669C4.80288 9.48476 4.90091 9.50437 4.99992 9.50437C5.09893 9.50437 5.19696 9.48476 5.28835 9.44669C5.37975 9.40861 5.4627 9.35281 5.53242 9.28252C5.60272 9.21279 5.65851 9.12984 5.69659 9.03845C5.73467 8.94706 5.75427 8.84903 5.75427 8.75002C5.75427 8.65101 5.73467 8.55298 5.69659 8.46158C5.65851 8.37019 5.60272 8.28724 5.53242 8.21752L3.05742 5.75002H8.74992C8.94883 5.75002 9.1396 5.671 9.28025 5.53035C9.42091 5.3897 9.49992 5.19893 9.49992 5.00002C9.49992 4.80111 9.42091 4.61034 9.28025 4.46969C9.1396 4.32904 8.94883 4.25002 8.74992 4.25002Z"
              fill="#677D80"
            />
          </svg>
          <span class="text-[#677D80] text-md leading-5"
            >{{ currentPage }}/{{ pagesCount }}</span
          >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-4 cursor-pointer"
            @click="nextPage()"
          >
            <path
              d="M9.44 4.71502C9.4043 4.62295 9.35078 4.53885 9.2825 4.46752L5.5325 0.717517C5.46257 0.647588 5.37955 0.592118 5.28819 0.554272C5.19682 0.516427 5.09889 0.496948 5 0.496948C4.80027 0.496948 4.60873 0.576289 4.4675 0.717517C4.39757 0.787446 4.3421 0.870464 4.30426 0.96183C4.26641 1.0532 4.24693 1.15112 4.24693 1.25002C4.24693 1.44974 4.32627 1.64129 4.4675 1.78252L6.9425 4.25002H1.25C1.05109 4.25002 0.860322 4.32904 0.71967 4.46969C0.579018 4.61034 0.5 4.80111 0.5 5.00002C0.5 5.19893 0.579018 5.3897 0.71967 5.53035C0.860322 5.671 1.05109 5.75002 1.25 5.75002H6.9425L4.4675 8.21752C4.3972 8.28724 4.34141 8.37019 4.30333 8.46158C4.26526 8.55298 4.24565 8.65101 4.24565 8.75002C4.24565 8.84903 4.26526 8.94706 4.30333 9.03845C4.34141 9.12984 4.3972 9.21279 4.4675 9.28252C4.53722 9.35281 4.62017 9.40861 4.71157 9.44669C4.80296 9.48476 4.90099 9.50437 5 9.50437C5.09901 9.50437 5.19704 9.48476 5.28843 9.44669C5.37983 9.40861 5.46278 9.35281 5.5325 9.28252L9.2825 5.53252C9.35078 5.46119 9.4043 5.37708 9.44 5.28502C9.51501 5.10242 9.51501 4.89761 9.44 4.71502Z"
              fill="#677D80"
            />
          </svg>
          <div class="refresh flex items-center ml-5" @click="forceUpdate()">
            <button>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.254 0.665978H4.746C3.62081 0.667827 2.5422 1.11549 1.74637 1.91094C0.950552 2.70639 0.50238 3.78478 0.5 4.90998V8.61598C0.5 8.95598 0.778 9.23298 1.117 9.23298C1.28057 9.23245 1.4373 9.16731 1.55306 9.05174C1.66881 8.93617 1.73421 8.77955 1.735 8.61598V4.90998C1.73606 4.11607 2.05197 3.355 2.61345 2.79372C3.17492 2.23243 3.93609 1.91677 4.73 1.91598H9.223C10.906 1.91598 12.249 3.25898 12.249 4.91098V8.15398C12.2482 8.94806 11.9324 9.70939 11.3709 10.2709C10.8094 10.8324 10.0481 11.1482 9.254 11.149H3.681L5.549 9.28098C5.60766 9.22369 5.65427 9.15526 5.6861 9.07969C5.71792 9.00413 5.73432 8.92297 5.73432 8.84098C5.73432 8.75899 5.71792 8.67782 5.6861 8.60226C5.65427 8.5267 5.60766 8.45826 5.549 8.40098C5.49172 8.34232 5.42328 8.2957 5.34772 8.26388C5.27215 8.23205 5.19099 8.21566 5.109 8.21566C5.02701 8.21566 4.94585 8.23205 4.87028 8.26388C4.79472 8.2957 4.72628 8.34232 4.669 8.40098L1.735 11.334C1.67634 11.3913 1.62973 11.4597 1.5979 11.5353C1.56607 11.6108 1.54968 11.692 1.54968 11.774C1.54968 11.856 1.56607 11.9371 1.5979 12.0127C1.62973 12.0883 1.67634 12.1567 1.735 12.214L4.669 15.148C4.72724 15.2073 4.79684 15.2542 4.87365 15.286C4.95045 15.3178 5.03288 15.3338 5.116 15.333C5.28373 15.332 5.44446 15.2656 5.564 15.148C5.62266 15.0907 5.66927 15.0223 5.7011 14.9467C5.73292 14.8711 5.74932 14.79 5.74932 14.708C5.74932 14.626 5.73292 14.5448 5.7011 14.4693C5.66927 14.3937 5.62266 14.3253 5.564 14.268L3.681 12.4H9.254C9.8117 12.4004 10.364 12.2908 10.8793 12.0776C11.3947 11.8643 11.8629 11.5516 12.2573 11.1572C12.6516 10.7629 12.9644 10.2946 13.1776 9.77932C13.3908 9.26399 13.5004 8.71168 13.5 8.15398V4.90998C13.4979 3.78461 13.0498 2.70596 12.254 1.91029C11.4581 1.11463 10.3794 0.666828 9.254 0.664978V0.665978Z"
                  fill="#677D80"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <table class="datatable w-full" v-if="all">
      <thead
        class="datatable__header relative"
        :class="{
          'sticky w-full bg-white top-[28%] lg:top-[12%] left-0 border-b':
            !topOfPage,
        }"
      >
        <th class="py-[15px] text-left text-sm lg:text-md">#</th>
        <th class="py-[15px] text-left text-sm lg:text-md">Name</th>
        <th
          class="py-[15px] justify-end lg:justify-start flex items-center cursor-pointer"
          v-if="followers || selected === 'followers'"
          @click="followersSorted = !followersSorted"
        >
          <span
            class="text-sm lg:text-md mr-2 select-none"
            @click="sortByFollowers()"
            >Followers</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rotate-180': followersSorted }"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
        <th
          class="py-[15px] lg:text-center flex items-center justify-end lg:justify-center cursor-pointer"
          v-if="audience || selected === 'audience quality'"
          @click="audienceSorted = !audienceSorted"
        >
          <span
            class="text-sm lg:text-md mr-2 select-none"
            @click="sortByAudience()"
            >Audience Quality</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rotate-180': audienceSorted }"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
        <th
          class="py-[15px] lg:text-center flex items-center justify-end lg:justify-center cursor-pointer"
          v-if="socials || selected === 'social mentions'"
          @click="socialsSorted = !socialsSorted"
        >
          <span
            class="text-sm lg:text-md mr-2 select-none"
            @click="sortBySocials()"
            >Social Mentions</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rotate-180': socialsSorted }"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
        <th
          class="py-[15px] text-right lg:text-center flex items-center justify-end lg:justify-center cursor-pointer"
          v-if="influencers || selected === 'influencers'"
          @click="influencersSorted = !influencersSorted"
        >
          <span
            class="text-sm lg:text-md mr-2 select-none"
            @click="sortByInfluencers()"
            >Influencers</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rotate-180': influencersSorted }"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
      </thead>
      <tbody>
        <tr
          v-for="row in paginatedAccounts"
          :key="row.index"
          class="datatable__row flex py-4"
        >
          <td class="datatable__id flex items-center">
            <label class="flex items-center">
              <input type="checkbox" :value="row" v-model="watchList" />
              <span class="checkbox" @click.once="addToWatchList()"></span>
              <span class="ml-8 text-lg">{{
                !/\d/.test(row.name) ? "1" : row.name.replace(/\D/g, "")
              }}</span>
            </label>
          </td>
          <td class="flex gap-2.5">
            <div class="datatable__avatar">
              <img :src="row.image" alt="" />
            </div>
            <div class="datatable__name">
              <p>{{ row.name }}</p>
              <span class="text-[#677D80]">PRJ1</span>
            </div>
          </td>
          <td
            class="datatable__followers flex items-center gap-2 lg:gap-6 flex-row-reverse lg:flex-row"
            v-if="followers || selected === 'followers'"
          >
            <p class="py-2 px-4 text-white">{{ row.followers }}</p>
            <span
              class="flex text-[#69B18C] text-sm items-center gap-2 font-bold"
            >
              <svg
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.4641 0.5L6.92823 5.5H0L3.4641 0.5Z"
                  fill="#69B18C"
                />
              </svg>

              {{ row.plus.toFixed(3) }}%
            </span>
          </td>
          <td
            class="datatable__audience text-orange text-lg leading-6 flex justify-end lg:justify-center items-center font-extrabold"
            v-if="audience || selected === 'audience quality'"
          >
            {{ row.audience_quality }}%
          </td>
          <td
            class="text-violet text-lg leading-6 flex justify-end lg:justify-center items-center font-extrabold"
            v-if="socials || selected === 'social mentions'"
          >
            {{ row.social_mentions }}
          </td>
          <td
            class="text-violet text-lg leading-6 flex justify-end lg:justify-center items-center font-extrabold"
            v-if="influencers || selected === 'influencers'"
          >
            {{ row.influencers }}
          </td>
          <td class="datatable__sites xl:flex gap-4 hidden">
            <a
              :href="row.discord"
              class="discord border rounded-3xl flex gap-3 items-center px-[30px] py-2 cursor-pointer"
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
              class="twitter border rounded-3xl flex gap-3 items-center px-[30px] py-2 cursor-pointer"
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
              class="text-white bg-violet border rounded-3xl flex gap-3 items-center px-[30px] py-2 cursor-pointer"
              >Website</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <table class="watchlist w-full" v-if="!all">
      <thead
        class="datatable__header z-10"
        :class="{
          'sticky w-full bg-white top-[116px] left-0 border-b': !topOfPage,
        }"
      >
        <th class="py-[15px] text-sm lg:text-md text-left">#</th>
        <th class="py-[15px] text-sm lg:text-md text-left">Name</th>
        <th
          class="py-[15px] text-right lg:text-left flex items-center justify-end lg:justify-start"
          v-if="followers || selected === 'followers'"
        >
          <span class="text-sm lg:text-md mr-2" @click="sortByFollowersWatch()"
            >Followers</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
        <th
          class="py-[15px] text-right lg:text-center flex items-center justify-end lg:justify-center"
          v-if="audience || selected === 'audience quality'"
        >
          <span class="text-sm lg:text-md mr-2" @click="sortByAudienceWatch()"
            >Audience Quality</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
        <th
          class="py-[15px] text-right lg:text-center flex items-center justify-end lg:justify-center"
          v-if="socials || selected === 'social mentions'"
        >
          <span class="text-sm lg:text-md mr-2" @click="sortBySocialsWatch()"
            >Social Mentions</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
        <th
          class="py-[15px] text-right lg:text-center flex items-center justify-end lg:justify-center"
          v-if="influencers || selected === 'influencers'"
        >
          <span
            class="text-sm lg:text-md mr-2"
            @click="sortByInfluencersWatch()"
            >Influencers</span
          >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
              fill="#242424"
            />
          </svg>
        </th>
      </thead>
      <tbody>
        <tr
          v-for="row in watchListed"
          :key="row.id"
          class="datatable__row flex py-4"
        >
          <td class="datatable__id flex items-center">
            <label class="flex items-center">
              <input
                type="checkbox"
                class="w-6 h-6"
                :value="row"
                v-model="watchList"
              />
              <span class="checkbox" @change="addToWatchList()"></span>
              <span class="ml-8 text-lg">{{
                !/\d/.test(row.name) ? "1" : row.name.replace(/\D/g, "")
              }}</span>
            </label>
          </td>
          <td class="flex gap-2.5">
            <div class="datatable__avatar">
              <img :src="row.image" alt="" />
            </div>
            <div class="datatable__name">
              <p>{{ row.name }}</p>
              <span class="text-[#677D80]">PRJ1</span>
            </div>
          </td>
          <td
            class="datatable__followers flex items-center gap-6 flex-row-reverse lg:flex-row"
            v-if="followers || selected === 'followers'"
          >
            <p class="py-2 px-4 text-white">{{ row.followers }}</p>
            <span class="flex text-[#69B18C] text-sm items-center gap-2">
              <svg
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.4641 0.5L6.92823 5.5H0L3.4641 0.5Z"
                  fill="#69B18C"
                />
              </svg>
              {{ row.plus.toFixed(3) }}%
            </span>
          </td>
          <td
            class="datatable__audience text-orange text-lg leading-6 flex justify-end lg:justify-center items-center font-extrabold"
            v-if="audience || selected === 'audience quality'"
          >
            {{ row.audience_quality }}%
          </td>
          <td
            class="text-violet text-lg leading-6 flex justify-end lg:justify-center items-center font-extrabold"
            v-if="socials || selected === 'social mentions'"
          >
            {{ row.social_mentions }}
          </td>
          <td
            class="text-violet text-lg leading-6 flex justify-end lg:justify-center items-center font-extrabold"
            v-if="influencers || selected === 'influencers'"
          >
            {{ row.influencers }}
          </td>
          <td class="hidden lg:flex gap-4 datatable__sites">
            <a
              :href="row.discord"
              class="discord border rounded-3xl flex gap-3 items-center px-[30px] py-2 cursor-pointer"
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
              class="twitter border rounded-3xl flex gap-3 items-center px-[30px] py-2 cursor-pointer"
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
              class="text-white bg-violet border rounded-3xl flex gap-3 items-center px-[30px] py-2 cursor-pointer"
              >Website</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownShown: false,
      followers: true,
      audience: true,
      socials: true,
      influencers: true,
      selected: "",
      all: true,
      watchList: [],
      perPage: 20,
      currentPage: 1,
      topOfPage: true,
      followersSorted: false,
      audienceSorted: false,
      socialsSorted: false,
      influencersSorted: false,
      metrics: [
        { text: "followers", value: true },
        { text: "audience quality", value: false },
        { text: "social mentions", value: false },
        { text: "influencers", value: false },
      ],
    };
  },
  watch: {
    watchList() {
      this.addToWatchList();
    },
  },
  methods: {
    ...mapActions(["GET_ACCOUNTS"]),
    addToWatchList() {
      console.log("added");
      this.$store.commit("ADD_TO_WATCHLIST", this.watchList);
    },
    closeDropDown() {
      this.isDropdownShown = false;
    },
    nextPage(currentPage, pagesCount) {
      if (this.currentPage < this.pagesCount) {
        this.currentPage++;
      }
    },
    prevPage(currentPage) {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    onResize() {
      if (window.innerWidth < 960) {
        (this.selected = "followers"),
          (this.followers = false),
          (this.audience = false),
          (this.socials = false),
          (this.influencers = false);
      }
    },
    forceUpdate() {
      console.log("updated");
      this.GET_ACCOUNTS();
      this.$forceUpdate();
    },
    sortByFollowers() {
      this.paginatedAccounts.sort((a, b) => b.followers - a.followers);
      this.$forceUpdate();
    },
    sortByAudience() {
      this.paginatedAccounts.sort(
        (a, b) => b.audience_quality - a.audience_quality
      );
      this.$forceUpdate();
    },
    sortBySocials() {
      this.paginatedAccounts.sort(
        (a, b) => b.social_mentions - a.social_mentions
      );
      this.$forceUpdate();
    },
    sortByInfluencers() {
      this.paginatedAccounts.sort((a, b) => b.influencers - a.influencers);
      this.$forceUpdate();
    },
    sortByFollowersWatch() {
      this.watchListed.sort((a, b) => b.followers - a.followers);
      this.$forceUpdate();
    },
    sortByAudienceWatch() {
      this.watchListed.sort((a, b) => b.audience_quality - a.audience_quality);
      this.$forceUpdate();
    },
    sortBySocialsWatch() {
      this.watchListed.sort((a, b) => b.social_mentions - a.social_mentions);
      this.$forceUpdate();
    },
    sortByInfluencersWatch() {
      this.watchListed.sort((a, b) => b.influencers - a.influencers);
      this.$forceUpdate();
    },
    handleScroll() {
      if (window.pageYOffset > 216) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isDropdownShown = false;
      }
    },
  },
  mounted() {
    this.GET_ACCOUNTS();
    window.addEventListener("scroll", this.handleScroll);
    this.watchList = this.$store.state.watchlist;
    this.onResize();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  computed: {
    accounts() {
      return this.$store.getters.ACCOUNTS;
    },
    filteredAccounts() {
      return this.$store.getters.ACCOUNTS.filter((account) => {
        return account.name.toLowerCase().includes(this.search);
      });
    },
    paginatedAccounts() {
      let from = (this.currentPage - 1) * this.perPage;
      let to = from + this.perPage;

      return this.filteredAccounts.slice(from, to);
    },
    watchListed() {
      return this.$store.getters.WATCHLIST.filter((user) => {
        return user.name.toLowerCase().includes(this.search);
      });
    },
    search() {
      return this.$store.state.search;
    },
    pagesCount() {
      return Math.ceil(this.accounts.length / this.perPage);
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
    z-index: 1;
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
    position: relative;
    .checkbox {
      position: absolute;
      height: 24px;
      width: 24px;
      background-image: url("../assets/images/star.svg");
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center center;
    }
    input {
      position: absolute;
      appearance: none;
      -webkit-appearance: none;
    }
    input:checked + .checkbox {
      background-image: url("../assets/images/star-selected.svg") !important;
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
  &__name {
    p {
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
    }
  }
  &__followers {
    grid-area: "followers";
    p {
      background: #3533ae;
      border-radius: 7px;
      width: auto;
    }
  }
  &__audience {
    grid-area: "audience";
  }
  &__socials {
    grid-area: "socials";
  }
  &__influencers {
    grid-area: "influencers";
  }
  &__sites {
    grid-column: 7;
  }
}
.discord,
.twitter {
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
}
.menu {
  z-index: 2;
  &__sort,
  .metric {
    border: 1px solid #c7c6ca;
    border-radius: 7px;
    &__dropdown {
      border: 1px solid #c7c6ca;
      border-radius: 7px;
    }
  }
  select {
    border: 1px solid #c7c6ca;
    border-radius: 7px;
    position: relative;
    & + span {
      position: absolute;
      top: 47%;
      right: 8%;
      width: 11px;
      height: 7px;
      background: url("../assets/images/arrow-down.svg");
      background-size: cover;
    }
  }
}
@media (max-width: 1200px) {
  .datatable {
    &__header {
      grid-template-columns: 80px 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    &__row {
      grid-template-columns: 80px 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
}
@media (max-width: 1024px) {
  .datatable {
    &__row,
    &__header {
      grid-template-columns: 62px 2fr 1fr;
    }
  }
}
</style>
