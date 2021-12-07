<template>
  <client-only>
    <div>
      <p class="ml-2" style="font-size: 1.2em; color: #707070">
        {{
          $t(
            'こちらからデータの表示期間を変更できます。ここで変更した表示期間は、他のデータには影響しません。初期状態では、最新8週間分のデータを表示しています。最小表示期間は2週間です。'
          )
        }}
      </p>
      <div class="mt-6 mb-3">
        <v-menu
          ref="startDayMenu"
          v-model="startDayMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          class="ml-3"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="startDayFormatted"
              :label="$t('開始日')"
              readonly
              v-bind="attrs"
              dense
              class="ml-3"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="startDay"
            :active-picker.sync="startDayActivePicker"
            :max="startDayMax"
            :min="datePickerMin"
            :locale="locale"
            full-width
          >
            <v-spacer />
            <v-btn text color="primary" @click="startDayMenu = false">
              {{ $t('キャンセル') }}
            </v-btn>
            <v-btn text color="primary" @click="save(false, startDay)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-menu
          ref="endDayMenu"
          v-model="endDayMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          class="ml-3"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="endDayFormatted"
              :label="$t('終了日')"
              readonly
              v-bind="attrs"
              dense
              class="ml-3"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="endDay"
            :active-picker.sync="endDayActivePicker"
            :max="datePickerMax"
            :min="endDayMin"
            :locale="locale"
            full-width
          >
            <v-spacer />
            <v-btn text color="primary" @click="endDayMenu = false">
              {{ $t('キャンセル') }}
            </v-btn>
            <v-btn text color="primary" @click="save(true, endDay)"> OK </v-btn>
          </v-date-picker>
        </v-menu>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { mdiCalendar } from '@mdi/js'
import dayjs from 'dayjs'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import { GraphDataType } from '@/utils/formatGraph'

type Data = {
  datePickerMax: string
  datePickerMin: string
  locale: string
  startDayMenu: boolean
  startDay: string
  startDayMax: string
  startDayFormatted: string
  startDayActivePicker: string
  endDayMenu: boolean
  endDay: string
  endDayMin: string
  endDayFormatted: string
  endDayActivePicker: string
}
type Methods = {
  indexToDate(id: number, format: string, useDayjs: boolean): string | 1
  dateToIndex(date: string): number
  save(isEnd: boolean, date: string): void
}
type Computed = {}
type Props = {
  chartData: GraphDataType[] | string[]
  value: number[]
  withAverage: boolean
}
const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  name: 'DateRangeSelector',
  props: {
    chartData: {
      type: Array,
      required: true,
      default: () => [],
    },
    value: {
      type: Array,
      required: true,
    },
    withAverage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mdiCalendar,
      datePickerMax: this.indexToDate(
        this.chartData.length - 1,
        'YYYY-MM-DD',
        true
      ),
      datePickerMin: this.indexToDate(0, 'YYYY-MM-DD', true),
      locale: this.$i18n.locale,
      startDayMenu: false,
      startDay: this.indexToDate(this.value[0], 'YYYY-MM-DD', true),
      startDayMax: dayjs(this.indexToDate(this.value[1], 'YYYY-MM-DD', true))
        .add(-13, 'day')
        .format('YYYY-MM-DD'),
      startDayFormatted: this.indexToDate(this.value[0]),
      startDayActivePicker: '',
      endDayMenu: false,
      endDay: this.indexToDate(this.value[1], 'YYYY-MM-DD', true),
      endDayMin: dayjs(this.indexToDate(this.value[0], 'YYYY-MM-DD', true))
        .add(13, 'day')
        .format('YYYY-MM-DD'),
      endDayFormatted: this.indexToDate(this.value[1]),
      endDayActivePicker: '',
    }
  },
  methods: {
    indexToDate(
      id: number,
      format: string = 'date',
      useDayjs: boolean = false
    ) {
      if (!this.chartData || this.chartData.length === 0) {
        return 1
      }
      if (id >= this.chartData.length) {
        id = this.chartData.length - 1
      }
      if (useDayjs && this.withAverage) {
        return dayjs((this.chartData as string[])[id]).format(format)
      } else if (this.withAverage) {
        return this.$d(new Date((this.chartData as string[])[id]), format)
      } else if (useDayjs) {
        return dayjs((this.chartData as GraphDataType[])[id].label).format(
          format
        )
      }
      return this.$d(
        new Date((this.chartData as GraphDataType[])[id].label),
        format
      )
    },
    dateToIndex(date: string) {
      if (!this.chartData || this.chartData.length === 0) {
        return 0
      }
      for (let i = 0; i < this.chartData.length; i++) {
        if (this.withAverage) {
          if ((this.chartData as string[])[i] === date) {
            return i
          }
        } else if ((this.chartData as GraphDataType[])[i].label === date) {
          return i
        }
      }
      return 0
    },
    save(isEndDay: boolean, date: string) {
      if (isEndDay) {
        this.endDay = dayjs(date).format('YYYY-MM-DD')
        this.startDayMax = dayjs(date).add(-13, 'day').format('YYYY-MM-DD')
        this.endDayFormatted = this.$d(new Date(date), 'date')
        this.endDayMenu = false
      } else {
        this.startDay = dayjs(date).format('YYYY-MM-DD')
        this.endDayMin = dayjs(date).add(13, 'day').format('YYYY-MM-DD')
        this.startDayFormatted = this.$d(new Date(date), 'date')
        this.startDayMenu = false
      }
      this.$emit('input', [
        this.dateToIndex(this.startDay),
        this.dateToIndex(this.endDay),
      ])
    },
  },
}

export default Vue.extend(options)
</script>
