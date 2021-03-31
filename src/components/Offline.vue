<template>
    <Page actionBarHidden="true"  enableSwipeBackNavigation="true" statusBarStyle="dark" backgroundSpanUnderStatusBar="true">
        <GridLayout rows="*,auto" class="home_container page">
        <!-- Loader -->
        <GridLayout columns="*" rows="*" row="0">
            <Image src="~/assets/images/icons/heart_filled.png" width="60" row="0" col="0" class="offline logo_scale"/>
        </GridLayout>

        <!-- Bottom Navigation -->
        <StackLayout row="2" orientation="vertical">
          <GridLayout columns="*" rows="auto,*" class="navigator">
            <GridLayout row="0" col="0" rows="*">
              <Label text="You are offline and can only play downloaded music" textWrap="true" row="1" class="ofline_label"/>
            </GridLayout>
            <GridLayout row="2" col="0" rows="*" class="ofline_btn">
              <Label text="Play Offline Music" row="1" class="" @tap="gotoDownloads"/>
            </GridLayout>
          </GridLayout>
        </StackLayout>
      </GridLayout>
    </Page>
</template>

<script>
import Downloads  from './Downloads';
export default {
    data() {
        return {
            
        }
    },

    methods: {
        gotoDownloads() {
            this.$navigateTo(Downloads, {
                transition: {
                    name:'slide',
                    duration: 200
                }
            });
        }
    }
}
</script>

<style scoped>
  .page {
    background: #000000;
    color: #ffffff;
  }
  .app_container {
    margin-bottom: 10;
    margin-top: 10;
    margin-left: 15;
    margin-right: 15;
  }
  .home_container {
    padding: 10;
    
  }
  .explore {
    color: #F50125;
    font-size: 15px;
    margin-top: 30;
    margin-bottom: 10;
  }
  .app_avatar {
    margin-left: 10;
  }
  .app_search {
    margin-right: 5;
  }
  .title_header{
    font-weight: 500;
    font-size: 20px;
    margin-top: 30;
    margin-bottom: 20;
    color: #FFFFFF;
  }
  .banner_container {
    margin-top: 10;
  }
  .music_deck {
    background:rgba(0,0,0,1);
    filter:blur(4px);
  }
  .navigator {
    padding-bottom: 10;
    margin-left: 15;
    margin-right: 15;
    margin-bottom: 15;
    text-align: center;
  }
  .music_player {
    padding-right: 15;
    padding-left: 15;
    padding-bottom: 10;
  }
  .artwork_playing {
    width: 50;
    margin-right: 10;
  }
  .music_deck .music_name {
    color: #F50125;
    font-size: 16px;
  }
  .music_deck .artist_name {
    font-size: 13px;
    color: #FFFFFF;
    font-weight: 300;
  }
  .play_pause {
    margin-left: 10;
    margin-right: 10;
  }
  .ofline_btn {
      margin-top: 15;
      font-weight: 500;
  }
  .ofline_btn Label {
    background: #F50125;
    border-radius: 50;
    font-size: 20px;
    color: #FFFFFF;
    text-transform: uppercase;
    width: 220;
    padding: 15;
    text-align: center;
  }
  .ofline_label {
      color: #AAAAAA;
      font-size: 20px;
      width: 270;
  }
</style>