<template>
    <Page actionBarHidden="true"  enableSwipeBackNavigation="true" statusBarStyle="dark" backgroundSpanUnderStatusBar="true">
      <GridLayout rows="auto,*,auto,auto" class="home_container page">
        <GridLayout columns="40, *, 40" rows="auto" class="app_header" row="0">
            <Image src="~/assets/images/icons/user.png" class="app_avatar" width="36" row="0" col="0"/>
            <Label text="Username" row="0" col="1" class="h1 username"/>
            <Image src="~/assets/images/icons/menu.png" class="app_search" width="20" row="0" col="2" />
        </GridLayout>

        <ScrollView orientation="vertical" row="1" v-if="!isLoading">
          <StackLayout class="app_container">

            <!-- Quick picks-->
            <!--GridLayout columns="auto,*,auto" rows="auto" >
                <Label text="Quick Picks" row="0" col="0" class="h1 title_header" />
            </GridLayout-->
            <GridLayout columns="*" rows="*" >
              <GridLayout columns="*,*,*,*,*" rows="*" class="app_picks">
                <GridLayout rows="auto,auto" row="0" col="0" class="music_detials">
                  <Image src="~/assets/images/icons/microphone.png" class="grid_item" row="0"/>
                  <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                    <Label text="Artists" row="0" class="grid_name" />
                  </GridLayout>
                </GridLayout>
                <GridLayout rows="auto,auto" row="0" col="1" class="music_detials">
                  <Image src="~/assets/images/icons/musical-note.png" class="grid_item" row="0"/>
                  <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                    <Label text="Songs" row="0" class="grid_name" />
                  </GridLayout>
                </GridLayout>
                <GridLayout rows="auto,auto" row="0" col="2" class="music_detials">
                  <Image src="~/assets/images/icons/album.png" class="grid_item" row="0"/>
                  <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                    <Label text="Albums" row="0" class="grid_name" />
                  </GridLayout>
                </GridLayout>
                <GridLayout rows="auto,auto" row="0" col="3" class="music_detials">
                  <Image src="~/assets/images/icons/love.png" class="grid_item" row="0"/>
                  <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                    <Label text="Genres" row="0" class="grid_name" />
                  </GridLayout>
                </GridLayout>
                <GridLayout rows="auto,auto" row="0" col="4" class="music_detials">
                  <Image src="~/assets/images/icons/bar-chart.png" class="grid_item" row="0"/>
                  <GridLayout rows="auto,auto,auto" row="1" class="music_info">
                    <Label text="Charts" row="0" class="grid_name" />
                  </GridLayout>
                </GridLayout>
              </GridLayout>
            </GridLayout>
            
            <!-- Recently Added-->
            <GridLayout columns="auto,*,auto" rows="auto" >
                <Label text="Newly Added" row="0" col="0" class="h1 title_header" />
                <Label text="" row="0" col="1"/>
                <Label text="See More" row="0" col="2" class="explore" />
            </GridLayout>
            <GridLayout columns="*" rows="*">
              <ScrollView orientation="horizontal"  class="app_recent">
                <GridLayout columns="auto,auto,auto,auto,auto" :rows="rows">
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" :key="index" v-for="(recentSongs,index) in recentUpload" :row="index % 3" :col="index % 5" class="music_detials">
                    <Image :src="`https://daddy9ja.com/storage/songs/${ recentSongs.url }/single/${ recentSongs.artwork_file }`" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label :text="recentSongs.music_name" row="0" col="0" class="music_name" textWrap="true" />
                      <Label textWrap="true" class="artist_name" row="1" col="0">
                        <FormattedString>
                            <Span  :text="recentSongs.artist"/>
                            <Span v-if="recentSongs.featuring != ''" text=" ft. "/>
                            <Span v-if="recentSongs.featuring != ''" :text="recentSongs.featuring"/>
                        </FormattedString>
                      </Label>
                    </GridLayout>
                  </GridLayout>
                </GridLayout>
              </ScrollView>
            </GridLayout>

            <!-- Albums -->
            <GridLayout columns="auto,*,auto" rows="auto" >
                <Label text="Hot New Albums" row="0" col="0" class="h1 title_header" />
                <Label text="" row="0" col="1"/>
                <Label text="See All" row="0" col="2" class="explore" />
            </GridLayout>
            <GridLayout columns="*" rows="*" >
              <ScrollView orientation="horizontal"  class="app_rec_albums">
                <GridLayout columns="*,*,*,*,*">
                  <GridLayout rows="auto,auto" col="0" class="music_detials">
                    <Image src="~/assets/images/icons/sound_2.png" class="artwork" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Daddy9ja Music" row="0" class="album_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="1" class="music_detials">
                    <Image src="~/assets/images/icons/sound_2.png" class="artwork" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Daddy9ja Music" row="0" class="album_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="2" class="music_detials">
                    <Image src="~/assets/images/icons/sound_2.png" class="artwork" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Daddy9ja Music" row="0" class="album_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="3" class="music_detials">
                    <Image src="~/assets/images/icons/sound_2.png" class="artwork" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Daddy9ja Music" row="0" class="album_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="4" class="music_detials">
                    <Image src="~/assets/images/icons/sound_2.png" class="artwork" row="0"/>
                    <GridLayout rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Daddy9ja Music" row="0" class="album_name" />
                    </GridLayout>
                  </GridLayout>
                </GridLayout>
              </ScrollView>
            </GridLayout>

            <!-- Accounts to follow -->
            <GridLayout >
                <Label text="Accounts to follow" class="h1 title_header" />
            </GridLayout>
            <GridLayout columns="*" rows="*" >
              <ScrollView orientation="horizontal"  class="app_rec_artists">
                <GridLayout columns="auto,auto,auto,auto,auto">
                  <GridLayout rows="auto,auto" col="0" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artists" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Chinko Ekun" row="0" class="artist_name" />
                      <Label text="Something else here" row="1" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="1" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artists" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Chinko Ekun" row="0" class="artist_name" />
                      <Label text="Something else here" row="1" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="2" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artists" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Chinko Ekun" row="0" class="artist_name" />
                      <Label text="Something else here" row="1" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="3" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artists" row="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Chinko Ekun" row="0" class="artist_name" />
                      <Label text="Something else here" row="1" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout rows="auto,auto" col="4" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artists" row="0"/>
                    <GridLayout rows="auto,auto,auto" row="1" class="music_info">
                      <Label text="Chinko Ekun" row="0" class="artist_name" />
                      <Label text="Something else here" row="1" class="icons" />
                    </GridLayout>
                  </GridLayout>
                </GridLayout>
              </ScrollView>
            </GridLayout>

          </StackLayout>
        </ScrollView>

        <!-- Music Deck-->
        <StackLayout row="2" v-show="isPlaying" orientation="horizontal" class="music_deck">
          <GridLayout class="music_progress">
            <Progress :value="currentProgress" />
          </GridLayout>
          <GridLayout class="music_player" columns="auto,*,auto,auto">
            <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork_playing" col="0" />
            <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
              <Label text="Jafafa" row="0" col="0" class="music_name" />
              <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
            </GridLayout>
            <Image src="~/assets/images/icons/play-button.png" class="play_pause" width="35" col="2" />
            <Image src="~/assets/images/icons/menu.png" class="" width="20" col="3" />
          </GridLayout>
        </StackLayout>

        <!-- Bottom Navigation -->
        <StackLayout row="3" orientation="horizontal" class="music_deck">
          <GridLayout columns="*,*,*,*,*" rows="auto" class="navigator">
            <GridLayout row="0" col="0" rows="*,*">
              <Image src="~/assets/images/icons/explore.png" class="" width="20" row="0" />
              <Label text="Explore" row="1" class=""/>
            </GridLayout>
            <GridLayout row="0" col="1" rows="*,*">
              <Image src="~/assets/images/icons/playlist.png" class="" width="20" row="0" />
              <Label text="Playlist" row="1" class=""/>
            </GridLayout>
            <GridLayout row="0" col="2" rows="*,*">
              <Image src="~/assets/images/icons/home_active.png" class="" width="20" row="0" />
              <Label textWrap="true" row="1" class="">
                <FormattedString>
                  <Span text="Home" style="color: #FFFFFF"/>
                </FormattedString>
              </Label>
            </GridLayout>
            <GridLayout row="0" col="3" rows="*,*">
              <Image src="~/assets/images/icons/search-interface-symbol.png" class="" width="20" row="0" />
              <Label text="Search" row="1" class=""/>
            </GridLayout>
            <GridLayout row="0" col="4" rows="*,*">
              <Image src="~/assets/images/icons/user-p.png" class="" width="20" row="0" />
              <Label text="My Library" row="1" class=""/>
            </GridLayout>
          </GridLayout>
        </StackLayout>
      </GridLayout>
    </Page>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {

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
  .app_banner {
    border-radius: 15;
    display: block;
    max-width: 100%;
    background-image: url('~/assets/images/banner/bruno-abatti.jpg');
    background-position: center center;
  }
  .banner_container {
    margin-top: 10;
  }
  .app_trending .artwork {
    margin-right: 15;
    width: 120;
    border-radius: 10;
    height: 120;
    background-color:rgba(255,255,255,0.025);
  }
  .app_trending .music_detials {
    margin-right: 30;
    margin-bottom: 20;
  }
  .app_trending .music_info {
    font-size: 18px;
    margin-bottom: 10;
    margin-top: 25;
    width: 160;
  }
  .app_trending .music_name {
    font-size: 19px;
  }
  .app_trending .artist_name {
    font-size: 15px;
    color: #AAAAAA;
  }
  .trend_icon {
    font-size: 16px;
  }
  .app_recent .artwork {
    margin-right: 15;
    width: 70;
    border-radius: 5;
    height: 70;
    background-color:rgba(255,255,255,0.025);
  }
  .app_recent .music_detials {
    margin-right: 30;
    margin-bottom: 15;
  }
  .app_recent .music_info {
    font-size: 16px;
    margin-bottom: 10;
    width: 200;
    margin-top: 10;
  }
  .app_recent .artist_name {
    font-size: 13px;
    color: #AAAAAA;
  }
  .music_deck {
    background:rgba(0,0,0,1);
    filter:blur(4px);
  }
  .navigator {
    background:rgba(255,255,255,0.025);
    padding-top: 15;
    padding-bottom: 10;
    margin-left: 15;
    margin-right: 15;
    margin-bottom: 5;
    border-radius: 10;
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
  .app_rec_artists .music_detials {
    text-align: center;
    margin-right: 30;
  }
  .app_rec_artists .music_info {
    text-align: center;
    width: 130;
  }
  .app_rec_artists .artists {
    width: 130;
    border-radius: 100%;
    margin-bottom: 10;
    text-align: center;
  }
  .app_rec_artists {
    margin-bottom: 20;
  }
  .app_rec_artists .icons {
    color: #F50125;
  }
  .app_rec_artists .artist_name {
    font-size: 18px;
    color: #FFFFFF;
  }
  .app_rec_albums .artwork {
    width: 130;
    border-radius: 10;
    margin-bottom: 10;
    text-align: center;
  }
  .app_rec_albums .music_detials {
    text-align: center;
    margin-right: 30;
  }
  .app_rec_albums .album_name {
    font-size: 18px;
    color: #AAAAAA;
    width: 130;
    text-align: center;
  }
  .app_picks {
    margin-bottom: 10;
  }
  .app_picks .grid_item {
    width: 50;
    border-radius: 100%;
    height: 50;
  }
  .app_picks .grid_name {
    font-size: 15px;
    color: #AAAAAA;
    width: 70;
    text-align: center;
  }
  .app_picks .music_detials {
    margin-top: 20;
  }
  .username {
      font-size: 25px;
      text-align: center;
      color: #FFFFFF;
  }
</style>