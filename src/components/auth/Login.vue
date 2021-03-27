<template>
  <Page actionBarHidden="true" class="" enableSwipeBackNavigation="false" statusBarStyle="dark" backgroundSpanUnderStatusBar="true">
    <ScrollView orientation="vertical" v-show="!isInitialized" class="login_container page">
      <StackLayout width="100%" height="100%" visibility="visible" id="layoutStack" horizontalAlignment="center"  verticalAlignment="center" orientation="vertical">
        <StackLayout class="welcome_msg anim-fade-in">
          <Label textWrap="true" class="h1 login_text_1" v-show="isLoggingIn"  >
            <FormattedString>
              <Span text="Let's sign you in" />
              <Span text="." fontWeight="bold" style="color: #F50125"/>
            </FormattedString>
          </Label>
        </StackLayout>
          <FlexboxLayout alignItems="flex-start" class="socials anim-fade-in">
            <GridLayout width="33%" height="50">
            <Image src="~/assets/images/social/facebook_2.png" class="" width="40" @tap="loginFacebook" />
                </GridLayout>
                <GridLayout width="33%" height="50">
                    <Image src="~/assets/images/social/search_2.png" class="" width="40" @tap="loginGoogle" />
                </GridLayout>
                <GridLayout width="33%" height="50">
                    <Image src="~/assets/images/social/twitter_2.png" class="" width="40" @tap="loginTwitter"/>
                </GridLayout>
            </FlexboxLayout>
            <StackLayout class="login_form anim-fade-in">
                <StackLayout class="input-field" v-show="isLoggingIn">
                    <TextField class="input" hint="Email" keyboardType="email" editable="true" autocorrect="false" autocapitalizationType="none" v-model="user.email"
                        returnKeyType="next" @returnPress="focusPassword"/>
                </StackLayout>
                <StackLayout class="input-field" v-show="isLoggingIn">
                    <TextField ref="password" class="input form-control" hint="Password" editable="true" secure="true" keyboardType="password" autocorrect="false" :returnKeyType="isLoggingIn ? 'done' : 'next'" v-model="user.password"
                    @returnPress="done"/>
                </StackLayout>
                <StackLayout class="login_base" v-show="!isInitialized" @tap="toggleForm">
                    <Label textWrap="true" class="login-label">
                        <FormattedString>
                            <Span :text="isLoggingIn ? 'Don\'t have an account?' : 'Back to Login' " />
                            <Span :text="isLoggingIn ? ' Register' : ''" fontWeight="bold" style="color: #F50125"/>
                        </FormattedString>
                    </Label>
                    <Button :text="isLoggingIn ? 'SIGN IN' : 'SIGN UP'" @tap="submit" class="btn btn-accent"  v-show="isLoggingIn"/>
                </StackLayout>
            <StackLayout>
                <Label textWrap="true" class="login-fgt" @tap="forgotPassword" v-show="isLoggingIn"  >
                    <FormattedString>
                        <Span text="Having problem logging in? " />
                        <Span text="Reset Password" fontWeight="bold" style="color: #F50125"/>
                    </FormattedString>
                </Label>
            </StackLayout>
            </StackLayout>
        </StackLayout>
    </ScrollView>
	</Page>
</template>

<script >

  export default {
    data() {
      return {
        isLoggingIn: true,
        isLoggedIn: false,
        user: {
          email: "",
          password: "",
          username: "",
        },
        isInitialized: false,
        error: '',
      }
    },

    methods: {
        
    }
  }
</script>

<style scoped>
    .page {
        padding: 80;
        background: #000000;
        color: #ffffff;
        max-height: 100%;
        height: 100%;
    }
    .login_form {
        margin-top: 50;
        padding: 20;
    }
    .input-field {
		  margin-top: 20px !important;
      width: 100%;
      display: block;
      margin-bottom: 50px;
	  }
	.input-field .input {
		font-size: 18px;
        background-color: #111111;
        placeholder-color: #FFFFFF;
        color: #FFFFFF;
        border-radius: 20px;
        width: 100%;
        display: block;
        margin: 0px;
        padding: 40px 40px;
        border-width: 0px;
	}
    .login-label {
        color: #FFFFFF;
        margin-bottom: 15;
        font-size: 14px;
        text-align: center;
    }
    .login-fgt {
        margin-top: 100;
        font-size: 14px;
        text-align: center;
    }
    .login_base {
        margin-top: 50;
    }
    Button {
        margin: 0;
        padding: 0px;
    }
    .h1, .h2, .h3 {
        color: #FFFFFF;
    }
    .welcome_msg {
        text-align: center;
    }
    .login_text_1 {
        font-weight: 500;
        margin-bottom: 25;
        font-size: 30px;
        margin-top: 10;
        margin-bottom: 20;
        /*color: #f50125;*/
    }
    .login_text_2 {
        font-size: 17px;
        margin-top: 100px;
    }
    .btn {
        border-radius: 50px;
        color: #FFFFFF;
        margin: 0px;
    }
    .btn-accent {
		background: #F50125;
		border-radius: 50;
		font-size: 20px;
        color: #FFFFFF;
        text-transform: uppercase;
        font-weight: 500;
    }
    .socials {
        text-align: center;
        font-size: 25px;
        width: 80%;
    }
    .d9-icon {
       /* background: #eeeeee;
        border-radius: 50%;
        padding: 20;
        margin: 10px 0;
        height: 70;
        width: 70;
        color: #000000;
        font-size: 25px;
        text-align: center;
        display: block;
        margin: auto;
        font-weight: 500; */
    }
    .log_splach {
      width: 100%;
      height: 100%;
      justify-content: center;
      padding-top: 200;
    }
    .anim-fade-in{    
    animation-name: intro-element-intro;
    animation-duration: 2;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);    
}
@keyframes intro-element-intro {
    0% {
        opacity:0;
        transform: translate(0, 1000);
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    100% {
        opacity:1;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
        transform: translate(0, 0) ;        
    }
}
</style>
