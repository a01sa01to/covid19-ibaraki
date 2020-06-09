<template>
  <div class="RelaxationStep">
    <div class="RelaxationStep-heading">
      <h3 class="RelaxationStep-title">
        {{ $t('社会経済活動再開に向けた対策の段階的緩和') }}
      </h3>
      <div class="RelaxationStep-link">
        <link-to-information-about-roadmap />
      </div>
    </div>
    <div class="RelaxationStep-content">
      <div class="RelaxationStep-block RelaxationStep-block-description">
        <p>
          {{
            $t(
              '社会経済活動再開に向けた対策の段階的緩和については、6つの指標における直近1週間の平均値等から判断して、「Stage1」から「Stage4」までの4段階を設定し、段階的に県としての対策を緩和します。'
            )
          }}
        </p>
      </div>
      <div class="RelaxationStep-block RelaxationStep-block-steps">
        <ul class="RelaxationStep-steps-list">
          <li v-for="i in steps" :key="i" class="RelaxationStep-steps-item">
            <span
              v-if="i === nowStage"
              class="RelaxationStep-steps RelaxationStep-steps-on"
            >
              {{ $t('Stage{num}', { num: i }) }}
            </span>
            <span v-else class="RelaxationStep-steps RelaxationStep-steps-off">
              {{ $t('Stage{num}', { num: i }) }}
            </span>
          </li>
        </ul>
        <p v-if="nextStage" class="RelaxationStep-changed-text">
          {{
            $t('{date} Stage{num}に移行', {
              date: formattedDayForDisplay,
              num: nextStage,
            })
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkToInformationAboutRoadmap from '@/components/LinkToInformationAboutRoadmap.vue'
import Data from '@/data/data.json'

export default Vue.extend({
  components: {
    LinkToInformationAboutRoadmap,
  },
  data() {
    const nowStage = Data.ibk_corona_next.nowStage
    const nextStage = Data.ibk_corona_next.nextStage
    return {
      nowStage,
      nextStage,
      steps: [4, 3, 2, 1],
    }
  },
  computed: {
    formattedDayForDisplay() {
      const dateChanged = new Date(Data.ibk_corona_next.moveDate)
      const date = this.$d(dateChanged, 'dateWithDayOfWeek')
      return this.$t('{date}', { date })
    },
  },
})
</script>

<style lang="scss">
$mediumLarge: 900;
$tinySmall: 420;

@function px2vw($px, $vw: $mediumLarge) {
  @return $px / $vw * 100vw;
}

.RelaxationStep {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .RelaxationStep-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .RelaxationStep-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .RelaxationStep-link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      padding-left: 12px;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .RelaxationStep-steps {
    position: relative;
    display: block;
    font-size: px2vw(14);
    margin-left: px2vw(16);
    text-align: center;
    padding: px2vw(5) px2vw(10) px2vw(5) px2vw(25);
    z-index: 3;
    &-on {
      color: $white;
      background-color: $green-1;
    }
    &-off {
      color: $gray-2;
      background-color: $gray-4;
    }
    &::after,
    &::before {
      position: absolute;
      content: '';
      border-style: solid;
      border-color: transparent;
      border-width: px2vw(15.5) 0 px2vw(15.5) px2vw(15.5);
      top: 50%;
    }
    &::after {
      right: 0.1rem;
      transform: translate(100%, -50%);
    }
    &-on::after {
      border-left-color: $green-1;
    }
    &-off::after {
      border-left-color: $gray-4;
    }
    &::before {
      left: px2vw(15);
      transform: translate(-100%, -50%);
      border-left-color: $white;
    }
  }

  @include lessThan($small) {
    .RelaxationStep-steps {
      font-size: 1rem;
      margin-left: 1.4rem;
      padding: 0.5rem 0.5rem 0.5rem 2rem;
      &::after,
      &::before {
        border-width: 1.3rem 0 1.3rem 1.3rem;
      }
      &-on::before,
      &-off::before {
        left: 1.2rem;
      }
    }
  }

  @include lessThan($tinySmall) {
    .RelaxationStep-steps {
      font-size: 0.8rem;
      margin-left: 1rem;
      padding: 0.32rem 0.32rem 0.32rem 1rem;
      &::after,
      &::before {
        border-width: 1rem 0 1rem 0.8rem;
      }
      &-on::before,
      &-off::before {
        left: 0.8rem;
      }
    }
  }

  @include largerThan($mediumLarge) {
    .RelaxationStep-steps {
      font-size: 1.4rem;
      margin-left: 1.6rem;
      padding: 0.5rem 0.5rem 0.5rem 2rem;
      &::after,
      &::before {
        border-width: 1.55rem 0 1.55rem 1.55rem;
      }
      &-on::before,
      &-off::before {
        left: 1.45rem;
      }
    }
  }

  .RelaxationStep-content {
    @include font-size(14);

    display: flex;
    flex-wrap: wrap;

    .RelaxationStep-block {
      padding: 12px;
      flex: 1 1 100%;

      @include largerThan($large) {
        &-description {
          flex-basis: 40%;
        }
        &-steps {
          flex-basis: auto;
        }
      }

      @include lessThan($tinySmall) {
        &-steps {
          margin: 0 -8px;
        }
      }
    }

    .RelaxationStep-steps-list {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      list-style: none;
      padding: 0;
      font-weight: bold;
      white-space: nowrap;
      width: 100%;

      @include lessThan($tiny) {
        margin-left: -6px;
      }

      .RelaxationStep-steps-item {
        margin-bottom: 12px;
        flex: 0 1 20%;

        @include largerThan($large) {
          flex: 1 1 auto;
        }

        @include lessThan($tinySmall) {
          flex: 0 1 25%;
        }
      }
      .RelaxationStep-steps-item:first-child {
        .RelaxationStep-steps {
          border-radius: 5px 0 0 5px;
          margin-left: 0;
          &::before {
            display: none;
          }
        }
      }
    }

    .RelaxationStep-changed-text {
      text-align: center;
      font-weight: bold;
      color: $green-1;
      @include font-size(16);
    }
  }
}
</style>
