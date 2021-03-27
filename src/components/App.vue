<template>
    <Page actionBarHidden="true"  enableSwipeBackNavigation="true" statusBarStyle="dark" backgroundSpanUnderStatusBar="true">
      <GridLayout rows="*,auto,auto">
        <ScrollView orientation="vertical" row="0" v-show="!isInitialized" class="login_container page">
          <StackLayout class="app_container">
            <GridLayout columns="40, *, 40" rows="auto" class="app_header">
                <Image src="~/assets/images/icons/user.png" class="app_avatar" width="36" row="0" col="0" @tap="loginTwitter"/>
                <Label text="" row="0" col="1"/>
                <Image src="~/assets/images/icons/search-interface-symbol.png" class="app_search" width="20" row="0" col="2" @tap="loginGoogle" />
            </GridLayout>
            <GridLayout columns="*" rows="*" class="banner_container">
                <Image src="~/assets/images/banner/bruno-abatti.jpg" class="app_banner" stretch="aspectFill" width="100%" row="0" col="0"/>
            </GridLayout>
            <GridLayout columns="auto,*,auto" rows="auto">
                <Label text="Trending" row="0" col="0" class="h1 title_header" />
                <Label text="" row="0" col="1"/>
                <Label text="Explore" row="0" col="2" class="explore" />
            </GridLayout>
            <GridLayout columns="*" rows="*">
              <ScrollView orientation="horizontal"  class="app_trending">
                <GridLayout columns="auto,auto,auto,auto,auto" rows="auto,*">
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="0" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" textWrap="true" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="1" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="2" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="3" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="4" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="0" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="1" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="2" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="3" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="4" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                      <Label text="Something else here" row="2" col="0" class="icons" />
                    </GridLayout>
                  </GridLayout>
                </GridLayout>
              </ScrollView>
            </GridLayout>
            <GridLayout columns="auto,*,auto" rows="auto">
                <Label text="Recently Added" row="0" col="0" class="h1 title_header" />
                <Label text="" row="0" col="1"/>
                <Label text="Explore" row="0" col="2" class="explore" />
            </GridLayout>
            <GridLayout columns="*" rows="*">
              <ScrollView orientation="horizontal"  class="app_recent">
                <GridLayout columns="auto,auto,auto,auto,auto" rows="auto,auto,auto,auto">
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="0" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" textWrap="true" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="1" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="2" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="3" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="0" col="4" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="0" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="1" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="2" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="3" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                  <GridLayout columns="auto,auto" rows="auto,auto,auto" row="1" col="4" class="music_detials">
                    <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork" row="0" col="0"/>
                    <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
                      <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
                      <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
                    </GridLayout>
                  </GridLayout>
                </GridLayout>
              </ScrollView>
            </GridLayout>
          </StackLayout>
        </ScrollView>
        <StackLayout row="1" orientation="horizontal" class="music_deck">
          <GridLayout class="music_player" columns="auto,*,auto,auto">
            <Image src="~/assets/images/artists/223-crayon-daddy9ja.jpeg" class="artwork_playing" col="0" @tap="loginTwitter"/>
            <GridLayout columns="*" rows="auto,auto,auto" row="0" col="1" class="music_info">
              <Label text="Jafafa Jafafa Jafafa Jafafa" row="0" col="0" class="music_name" />
              <Label text="Chinko Ekun" row="1" col="0" class="artist_name" />
            </GridLayout>
            <Image src="~/assets/images/icons/play.png" class="" width="35" col="2" @tap="loginTwitter"/>
          </GridLayout>
        </StackLayout>
        <StackLayout row="2" orientation="horizontal" class="music_deck">
          <GridLayout columns="*,*,*,*,*" rows="auto" class="navigator">
            <GridLayout row="0" col="0" rows="*,*">
              <Image src="~/assets/images/icons/home.png" class="" width="20" row="0" @tap="loginTwitter"/>
              <Label text="Home" row="1" class=""/>
            </GridLayout>
            <GridLayout row="0" col="1" rows="*,*">
              <Image src="~/assets/images/icons/explore.png" class="" width="20" row="0" @tap="loginTwitter"/>
              <Label text="Explore" row="1" class=""/>
            </GridLayout>
            <GridLayout row="0" col="2" rows="*,*">
              <Image src="~/assets/images/icons/playlist.png" class="" width="20" row="0" @tap="loginTwitter"/>
              <Label text="Playlist" row="1" class=""/>
            </GridLayout>
            <GridLayout row="0" col="3" rows="*,*">
              <Image src="~/assets/images/icons/search-interface-symbol.png" class="" width="20" row="0" @tap="loginTwitter"/>
              <Label text="Search" row="1" class=""/>
            </GridLayout>
            <GridLayout row="0" col="4" rows="*,*">
              <Image src="~/assets/images/icons/user-p.png" class="" width="20" row="0" @tap="loginTwitter"/>
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
      isLoggedIn: false,
      isInitialized: false,
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
    margin: 10;
    margin-top: 20;
    margin-left: 15;
    margin-right: 15;
  }
  .app_header{
    border-color: #222222;
    border-right: 0;
    border-left: 0;
    border-top: 0;
    border-bottom: 1;
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
    display:block;
  }
  .banner_container {
    margin-top: 20;
  }
  .app_trending .artwork {
    margin-right: 15;
    width: 130;
    border-radius: 10;
  }
  .music_player {
    padding-right: 10;
    padding-left: 10;
    padding-bottom: 10;
  }
  .artwork_playing {
    width: 50;
    margin-right: 10;
  }
  .app_trending .music_detials {
    margin-right: 30;
    margin-bottom: 20;
  }
  .app_trending .music_info {
    font-size: 18px;
    margin-bottom: 10;
    margin-top: 25;
  }
  .app_trending .artist_name {
    font-size: 14px;
    color: #AAAAAA;
  }
  .app_recent .artwork {
    margin-right: 15;
    width: 70;
    border-radius: 5;
  }
  .app_recent .music_detials {
    margin-right: 30;
    margin-bottom: 10;
  }
  .app_recent .music_info {
    font-size: 16px;
    margin-bottom: 10;
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
    margin-left: 10;
    margin-right: 10;
    margin-bottom: 5;
    border-radius: 10;
    text-align: center;
  }
  .music_deck .music_name {
    color: #F50125;
    font-size: 16px;
  }
  .music_deck .artist_name {
    font-size: 13px;
  }
</style>