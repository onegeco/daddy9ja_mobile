<template>
    <Page actionBarHidden="true"  enableSwipeBackNavigation="true" statusBarStyle="dark" backgroundSpanUnderStatusBar="true">
        <GridLayout columns="40, *, 40" rows="auto" class="app_header" row="0">
            <Image src="~/assets/images/icons/user.png" class="app_avatar" width="36" row="0" col="0" @tap="loginTwitter"/>
            <Label :text="music.artist" row="0" col="1"/>
            <Image src="~/assets/images/icons/search-interface-symbol.png" class="app_search" width="20" row="0" col="2" @tap="loginGoogle" />
        </GridLayout>
    </Page>
</template>

<script>
export default {
    props: ["music"],
}
</script>

<style scoped>

</style>