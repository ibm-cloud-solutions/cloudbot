# Facebook Messenger chat integration setup

If you want to use Facebook Messenger to communicate with the the bot get started with the following steps:

## Get a Facebook Credentials for the bot

- [Create a Facebook Page](https://www.facebook.com/pages/create/)
![Create a Facebook Page](../images/Facebook_Create_Page.png)

	- Navigate to the "About" section in your page and find your `FB_PAGE_ID` in the bottom
		![Facebook Page About Section](../images/Facebook_About.png)
		![Facebook Page ID](../images/Facebook_Page_ID.png)

- [Create a Facebook App](https://developers.facebook.com/quickstarts/?platform=web)
![Facebook for Developers](../images/Facebook_For_Developers.png)

	- Copy your `FB_APP_ID` and `FB_APP_SECRET` from the app's dashboard
    ![Facebook App ID & Secret](../images/Facebook_App_ID_and_Secret.png)

	- Go to your app settings and, under Product Settings, click "Add Product." Select "Messenger."
    ![Facebook Messenger Setup](../images/Facebook_Messenger_Setup.png)
	- Select your page and generate an access token `FB_PAGE_TOKEN`
    ![Facebook Messenger Token](../images/Facebook_Messenger_Token.png)
