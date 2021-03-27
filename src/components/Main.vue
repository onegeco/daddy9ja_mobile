<!--template>
    <Page statusBarStyle="dark" class="page-layout" backgroundSpanUnderStatusBar="true"  loaded="onLoaded" >
        <ScrollView orientation="vertical">
            <StackLayout  width="100%" height="100%" visibility="visible" id="layoutStack" horizontalAlignment="center"  verticalAlignment="center" orientation="vertical">                   
                <Image class="logo-image anim-fade-in"  id="logoGopher" src="~/assets/images/logo.png" stretch="none" horizontalAlignment="center" />
                <TextField  class="input-field anim-fade-in" id="fieldEmail" hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none" />
                <TextField  class="input-field anim-fade-in" id="fieldPassword" secure="true" hint="Password" /> 
                <Button class="btn btn-outline btn-active btn-rounded-lg  btn-def anim-fade-in"  id="buttonLogin"  text="Sign in" />
            </StackLayout>
        </Scrollview>
    </Page>
</template>

<script>
exports.onLoaded = function (args) {    

}
</script>

<style scoped>
    .page-layout {
        background-color: #000000;
        animation-name: intro-background-intro;
        animation-duration: 2;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }   
    @keyframes intro-background-intro {
        0% {        
            background-color: #000000;
        }
        20%{
            background-color: #000000;
        }
        100% {
            background-color: #000000;
        }
    }
</style-->