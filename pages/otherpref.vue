<template>
	<div class="OtherPref">
		<page-header class="mb-3">
			{{ $t('他県の') }}{{ $t('新型コロナ') }}{{  $t('対策サイト') }}
		</page-header>
		<static-card>
			<p>
				{{ $t('各都道府県の運営者・GitHubリポジトリを確認したい場合は、パソコンからこのページをご覧ください。') }}
			</p>
		</static-card>
		<div class="Others-Card">
      <v-simple-table class="Others-Card-Table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t('都道府県名') }}</th>
              <th class="text-center">{{ $t('公開サイト') }}</th>
              <th class="text-center">{{ $t('運営者') }}</th>
              <th class="text-center">{{ $t('GitHub リポジトリ') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pref text-center">{{ $t('茨城県') }}<br>({{ $t('本サイト') }})</td>
              <td class="site text-center"><a href="#">https://covid19-ibaraki.netlify.com/</a></td>
              <td class="admin text-center">{{ $t('個人') }}</td>
              <td class="repo text-center"><a href="https://github.com/a01sa01to/covid19-ibaraki">a01sa01to/covid19-ibaraki</a></td>
            </tr>
						<tr>
							<td class="pref text-center">{{ $t('北海道') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.hokkaido.dev/" target="_blank">https://stopcovid19.hokkaido.dev/</a></td>
							<td class="admin text-center">{{ $t('JUST道IT') }}&nbsp;&nbsp;({{ $t('有志') }}{{ $t('団体') }})</td>
							<td class="repo text-center"><a href="https://github.com/codeforsapporo/covid19" target="_blank">codeforsapporo/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('青森県') }}</td>
							<td class="site text-center"><a href="https://covid19.codeforaomori.org" target="_blank">https://covid19.codeforaomori.org</a></td>
							<td class="admin text-center">Code for Aomori</td>
							<td class="repo text-center"><a href="https://github.com/CodeForAomori/covid19" target="_blank">CodeForAomori/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('青森県') }}</td>
							<td class="site text-center"><a href="https://covid19-aomori.info/" target="_blank">https://covid19-aomori.info/</a></td>
							<td class="admin text-center">Aomori Hackers&nbsp;&nbsp;({{ $t('有志') }}{{ $t('団体') }})</td>
							<td class="repo text-center"><a href="https://github.com/covid19-aomori/website" target="_blank">covid19-aomori/website</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('岩手県') }}</td>
							<td class="site text-center"><a href="https://iwate.stopcovid19.jp/" target="_blank">https://iwate.stopcovid19.jp/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/MeditationDuck/covid19" target="_blank">MeditationDuck/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('宮城県') }}</td>
							<td class="site text-center"><a href="https://miyagi.stopcovid19.jp/" target="_blank">https://miyagi.stopcovid19.jp/</a></td>
							<td class="admin text-center">Code for Shiogama</td>
							<td class="repo text-center"><a href="https://github.com/code4shiogama/covid19-miyagi" target="_blank">code4shiogama/covid19-miyagi</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('福島県') }}</td>
							<td class="site text-center"><a href="https://fukushima-covid19.firebaseapp.com" target="_blank">https://fukushima-covid19.firebaseapp.com</a></td>
							<td class="admin text-center">GDG Fukushima</td>
							<td class="repo text-center"><a href="https://github.com/donuzium/covid19" target="_blank">donuzium/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('栃木県') }}</td>
							<td class="site text-center"><a href="https://covid19-tochigi.netlify.com/" target="_blank">https://covid19-tochigi.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/covid19-tochigi/covid19" target="_blank">covid19-tochigi/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('群馬県') }}</td>
							<td class="site text-center"><a href="https://stopcovid19-gunma.netlify.com/" target="_blank">https://stopcovid19-gunma.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('個人') }}</td>
							<td class="repo text-center"><a href="https://github.com/SatoshiRC/covid19-gunma" target="_blank">SatoshiRC/covid19-gunma</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('埼玉県') }}</td>
							<td class="site text-center"><a href="https://saitama.stopcovid19.jp/" target="_blank">https://saitama.stopcovid19.jp/</a></td>
							<td class="admin text-center">Code for TODA</td>
							<td class="repo text-center"><a href="https://github.com/codefortoda/covid19-saitama" target="_blank">codefortoda/covid19-saitama</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('東京都') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.metro.tokyo.lg.jp" target="_blank">https://stopcovid19.metro.tokyo.lg.jp</a></td>
							<td class="admin text-center">{{ $t('東京都') }}&nbsp;&nbsp;(<b>{{ $t('公式') }}</b>)</td>
							<td class="repo text-center"><a href="https://github.com/tokyo-metropolitan-gov/covid19" target="_blank">tokyo-metropolitan-gov/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('千葉県') }}</td>
							<td class="site text-center"><a href="https://chiba-covid19.mypl.net/" target="_blank">https://chiba-covid19.mypl.net/</a></td>
							<td class="admin text-center">{{ $t('地域情報サイト「まいぷれ」') }}</td>
							<td class="repo text-center"><a href="https://github.com/keisuke-kimura/covid19" target="_blank">keisuke-kimura/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('千葉県') }}</td>
							<td class="site text-center"><a href="https://covid19.civictech.chiba.jp/" target="_blank">https://covid19.civictech.chiba.jp/</a></td>
							<td class="admin text-center">Civic Tech Zen Chiba</td>
							<td class="repo text-center"><a href="https://github.com/civictechzenchiba/covid19-chiba" target="_blank">civictechzenchiba/covid19-chiba</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('千葉市') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.code4chiba.org/" target="_blank">https://stopcovid19.code4chiba.org/</a></td>
							<td class="admin text-center">Code for Chiba</td>
							<td class="repo text-center"><a href="https://github.com/codeforchiba/covid19" target="_blank">codeforchiba/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('神奈川県') }}</td>
							<td class="site text-center"><a href="https://www.pref.kanagawa.jp/osirase/1369/" target="_blank">https://www.pref.kanagawa.jp/osirase/1369/</a></td>
							<td class="admin text-center">{{ $t('神奈川県') }}&nbsp;&nbsp;(<b>{{ $t('公式') }}</b>)</td>
							<td class="repo text-center"></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('新潟県') }}</td>
							<td class="site text-center"><a href="https://niigata.stopcovid19.jp/" target="_blank">https://niigata.stopcovid19.jp/</a></td>
							<td class="admin text-center">Code for Niigata</td>
							<td class="repo text-center"><a href="https://github.com/CodeForNiigata/covid19" target="_blank">CodeForNiigata/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('新潟県') }}</td>
							<td class="site text-center"><a href="https://stopcovid19-niigata-unofficial.netlify.com" target="_blank">https://stopcovid19-niigata-unofficial.netlify.com</a></td>
							<td class="admin text-center">air-h-128k-il</td>
							<td class="repo text-center"><a href="https://github.com/air-h-128k-il/covid19" target="_blank">air-h-128k-il/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('福井県') }}</td>
							<td class="site text-center"><a href="https://covid19-fukui.com/" target="_blank">https://covid19-fukui.com/</a></td>
							<td class="admin text-center">{{ $t('個人') }}</td>
							<td class="repo text-center"><a href="https://github.com/nomunomu0504/covid19" target="_blank">nomunomu0504/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('福井県') }}</td>
							<td class="site text-center"><a href="https://covid19-fukui.bosai-signal.jp/" target="_blank">https://covid19-fukui.bosai-signal.jp/</a></td>
							<td class="admin text-center">{{ $t('丹南ケーブルテレビ株式会社') }}</td>
							<td class="repo text-center"><a href="https://github.com/westar7/fukui-covid19" target="_blank">westar7/fukui-covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('山梨県') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.yamanashi.dev/" target="_blank">https://stopcovid19.yamanashi.dev/</a></td>
							<td class="admin text-center">{{ $t('stopcovid19.yamanashi.devチーム') }}</td>
							<td class="repo text-center"><a href="https://github.com/covid19-yamanashi/covid19" target="_blank">covid19-yamanashi/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('長野県') }}</td>
							<td class="site text-center"><a href="https://stop-covid19-nagano.netlify.com/" target="_blank">https://stop-covid19-nagano.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/hisayan/covid19" target="_blank">hisayan/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('岐阜県') }}</td>
							<td class="site text-center"><a href="https://covid19-gifu.netlify.com/" target="_blank">https://covid19-gifu.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('個人') }}</td>
							<td class="repo text-center"><a href="https://github.com/CODE-for-GIFU/covid19" target="_blank">CODE-for-GIFU/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('愛知県') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.code4.nagoya/" target="_blank">https://stopcovid19.code4.nagoya/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/code4nagoya/covid19" target="_blank">code4nagoya/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('三重県') }}</td>
							<td class="site text-center"><a href="https://covid19-mie.netlify.com/" target="_blank">https://covid19-mie.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('高専生チーム') }}&nbsp;&nbsp;({{ $t('有志') }})</td>
							<td class="repo text-center"><a href="https://github.com/FlexiblePrintedCircuits/covid19-mie" target="_blank">FlexiblePrintedCircuits/covid19-mie</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('滋賀県') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.pref.shiga.jp/" target="_blank">https://stopcovid19.pref.shiga.jp/</a></td>
							<td class="admin text-center">{{ $t('滋賀県') }}&nbsp;&nbsp;(<b>{{ $t('公式') }}</b>)</td>
							<td class="repo text-center"><a href="https://github.com/Shiga-pref-org/covid19" target="_blank">Shiga-pref-org/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('京都府') }}</td>
							<td class="site text-center"><a href="https://stopcovid19-kyoto.netlify.com/" target="_blank">https://stopcovid19-kyoto.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/stopcovid19-kyoto/covid19" target="_blank">stopcovid19-kyoto/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('大阪府') }}</td>
							<td class="site text-center"><a href="https://covid19-osaka.info/" target="_blank">https://covid19-osaka.info/</a></td>
							<td class="admin text-center">{{ $t('大阪府') }}&nbsp;&nbsp;(<b>{{ $t('公式') }}</b>)</td>
							<td class="repo text-center"><a href="https://github.com/codeforosaka/covid19" target="_blank">codeforosaka/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('兵庫県') }}</td>
							<td class="site text-center"><a href="https://stop-covid19-hyogo.org/" target="_blank">https://stop-covid19-hyogo.org/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/stop-covid19-hyogo/covid19" target="_blank">stop-covid19-hyogo/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('奈良県') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.code4nara.org/" target="_blank">https://stopcovid19.code4nara.org/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/code4nara/covid19" target="_blank">code4nara/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('岡山県') }}</td>
							<td class="site text-center"><a href="https://covid19-okayama.netlify.com/" target="_blank">https://covid19-okayama.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('学生エンジニア') }}&nbsp;&nbsp;({{ $t('有志') }})</td>
							<td class="repo text-center"></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('広島県') }}</td>
							<td class="site text-center"><a href="https://covid19-hiroshima.netlify.com/" target="_blank">https://covid19-hiroshima.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('個人') }}</td>
							<td class="repo text-center"><a href="https://github.com/tatsuya1970/covid19" target="_blank">tatsuya1970/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('山口県') }}</td>
							<td class="site text-center"><a href="https://covid19-yamaguchi.netlify.com" target="_blank">https://covid19-yamaguchi.netlify.com</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/nishidayoshikatsu/covid19-yamaguchi" target="_blank">nishidayoshikatsu/covid19-yamaguchi</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('香川県') }}</td>
							<td class="site text-center"><a href="https://covid19-kagawa.netlify.com/" target="_blank">https://covid19-kagawa.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('学生エンジニア') }}&nbsp;&nbsp;({{ $t('有志') }})</td>
							<td class="repo text-center"></td>
						</tr>
						<tr>
						<td class="pref text-center">{{ $t('香川県') }}</td>
						<td class="site text-center"><a href="https://covid19-kagawa.jp/" target="_blank">https://covid19-kagawa.jp/</a></td>
						<td class="admin text-center">{{ $t('学生エンジニア') }}&nbsp;&nbsp;({{ $t('有志') }})</td>
						<td class="repo text-center"><a href="https://github.com/i15317/covid19" target="_blank">i15317/covid19</a></td>
					</tr>
						<tr>
							<td class="pref text-center">{{ $t('愛媛県') }}</td>
							<td class="site text-center"><a href="https://ehime-covid19.com/" target="_blank">https://ehime-covid19.com/</a></td>
							<td class="admin text-center">{{ $t('ボランティア') }}({{ $t('有志') }})</td>
							<td class="repo text-center"><a href="https://github.com/ehime-covid19/covid19" target="_blank">ehime-covid19/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('高知県') }}</td>
							<td class="site text-center"><a href="https://covid19-kochi.netlify.com" target="_blank">https://covid19-kochi.netlify.com</a></td>
							<td class="admin text-center">{{ $t('学生エンジニア') }}({{ $t('有志') }})</td>
							<td class="repo text-center"></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('九州') }}</td>
							<td class="site text-center"><a href="https://dev-covid19-kyusyu.netlify.com" target="_blank">https://dev-covid19-kyusyu.netlify.com</a></td>
							<td class="admin text-center">{{ $t('九州') }}({{ $t('有志') }})</td>
							<td class="repo text-center"><a href="https://github.com/Code-for-Kyushu/covid19" target="_blank">Code-for-Kyushu/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('福岡市') }}</td>
							<td class="site text-center"><a href="https://stopcovid19.codeforfukuoka.org/" target="_blank">https://stopcovid19.codeforfukuoka.org/</a></td>
							<td class="admin text-center">Code for Fukuoka</td>
							<td class="repo text-center"><a href="https://github.com/Code-for-Fukuoka/covid19" target="_blank">Code-for-Fukuoka/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('長崎県') }}</td>
							<td class="site text-center"><a href="https://stopcovid19-nagasaki.netlify.com/" target="_blank">https://stopcovid19-nagasaki.netlify.com/</a></td>
							<td class="admin text-center">Code for Nagasaki</td>
							<td class="repo text-center"><a href="https://github.com/CodeForNagasaki/covid19" target="_blank">CodeForNagasaki/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('熊本県') }}</td>
							<td class="site text-center"><a href="https://kumamoto.stopcovid19.jp/" target="_blank">https://kumamoto.stopcovid19.jp/</a></td>
							<td class="admin text-center">Code for Kumamoto</td>
							<td class="repo text-center"><a href="https://github.com/codeforkumamoto/covid19" target="_blank">codeforkumamoto/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('大分県') }}</td>
							<td class="site text-center"><a href="https://oita.stopcovid19.jp/" target="_blank">https://oita.stopcovid19.jp/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/covid19-oita/covid19" target="_blank">covid19-oita/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('宮崎県') }}</td>
							<td class="site text-center"><a href="https://covid19-miyazaki.netlify.com/" target="_blank">https://covid19-miyazaki.netlify.com/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/covid19-miyazaki/covid19" target="_blank">covid19-miyazaki/covid19</a></td>
						</tr>
						<tr>
							<td class="pref text-center">{{ $t('鹿児島県') }}</td>
							<td class="site text-center"><a href="https://covid19.codeforkagoshima.dev/" target="_blank">https://covid19.codeforkagoshima.dev/</a></td>
							<td class="admin text-center">{{ $t('有志') }}</td>
							<td class="repo text-center"><a href="https://github.com/codeforkagoshima/covid19" target="_blank">codeforkagoshima/covid19</a></td>
						</tr>

          </tbody>
        </template>
      </v-simple-table>
    </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
		PageHeader,
		StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('他県の新型コロナ対策サイト') as string
    }
  }
})
</script>

<style lang="scss">
@include largerThan($medium){
	.OtherPref .StaticCard{
		display: none;
	}
}

.Others {
  &-Card {
    @include card-container();

    padding: 1px; // tr:hover で外枠が消えないように
    &-Table {
      th {
        font-size: 14px !important;
      }
      tr:hover {
        background: $white !important;
      }

      @include largerThan($medium) {
        tbody tr {
          height: 96px;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }
        tbody tr {
          height: auto;

          .pref {
            font-weight: bold;
            border-bottom: none !important;
            padding-top: 12px;
            padding-bottom: 8px;
          }

          .site{
            border-bottom: none !important;
						margin-bottom: 12px;
          }

					.admin{
						display: none;
					}

          .repo {
            // padding-bottom: 12px;
						display: none;
          }
		}

		td {
			display: block;
		}

        tbody td {
          height: auto;
        }

      }
    }
  }
}
</style>
