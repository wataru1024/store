console.log("hello!!");
const LIFF_userId = document.getElementById("userId");
const LIFF_displayName = document.getElementById("displayName");
const profileImg = document.getElementById("ProfileImg");
const ProfileImgSrc = document.getElementById("ProfileImgSrc");
liff.init({
  liffId:"1656222252-xaAQqqWK"
});

const sendText = document.getElementById("sendText");
sendText.onclick = ()=>{
  liff.getProfile().then((Profile)=>{
    LIFF_displayName.innerText = Profile.displayName;
    LIFF_userId.innerText = Profile.userId;
    profileImg.src = Profile.pictureUrl;
    ProfileImgSrc.innerText = Profile.pictureUrl
    liff.sendMessages([
      {
        type: "text",
        text: "Hello, world(^^)"
      },


    ])
    // liff.closeWindow();
  })
}


