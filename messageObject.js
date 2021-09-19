// const messageObject = [
//   text,image,buttons,location
// ]

// echo "# store" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/wataru1024/store.git
// git push -u origin main

function makeTextMessageObject(text) {
 return  {
  type: "text",
  text: text
 }
}

function makeButtonObject(imgURL) {
  return    {
    thumbnailImageUrl: imgURL,
    imageBackgroundColor: "#FFFFFF",
    title: "this is menu",
    text: "description",
    defaultAction: {
        type: "uri",
        label: "View detail",
        uri: "https://setcalender-3f936.web.app/"
    },
    actions: [
      {
          type: "uri",
          label: "View detail",
          uri: "https://setcalender-3f936.web.app/"
      },
      {
        type: "uri",
        label: "View detail",
        uri: "https://setcalender-3f936.web.app/"
      }
    ]
  }
}
      // {
      //   type: "template",
      //   altText: "This is a buttons template",
      //   template: {
      //       type: "buttons",
      //       thumbnailImageUrl: "https://firebasestorage.googleapis.com/v0/b/setcalender-3f936.appspot.com/o/eventImg%2FbackWood.jpg?alt=media&token=28305e47-170e-4bdf-8e58-16de7e2857cd",
      //       imageAspectRatio: "rectangle",
      //       imageSize: "contain",
      //       imageBackgroundColor: "#FFFFFF",
      //       title: "Menu",
      //       text: "Please select",
      //       defaultAction: {
      //           type: "uri",
      //           label: "",
      //           uri: "https://setcalender-3f936.web.app/"
      //       },
      //       "actions": [
      //         {
      //           type: "uri",
      //           label: "View detail",
      //           uri: "https://setcalender-3f936.web.app/"
      //         },
      //         {
      //           type: "uri",
      //           label: "△",
      //           uri: "https://setcalender-3f936.web.app/"
      //         },
      //         {
      //           type: "uri",
      //           label: "X",
      //           uri: "https://setcalender-3f936.web.app/"
      //         }
      //       ]
      //   }
      // },
      //画像は1MB以下が望ましい
      const button = 
      {
        type: "template",
        altText: "this is a carousel template",
        template: {
            type: "carousel",
            columns: [
                {
                  thumbnailImageUrl: "https://firebasestorage.googleapis.com/v0/b/setcalender-3f936.appspot.com/o/eventImg%2FbackWood.jpg?alt=media&token=28305e47-170e-4bdf-8e58-16de7e2857cd",
                  imageBackgroundColor: "#FFFFFF",
                  title: "this is menu",
                  text: "description",
                  defaultAction: {
                      type: "uri",
                      label: "View detail",
                      uri: "https://setcalender-3f936.web.app/"
                  },
                  actions: [
                    {
                        type: "uri",
                        label: "View detail",
                        uri: "https://setcalender-3f936.web.app/"
                    },
                    {
                      type: "uri",
                      label: "View detail",
                      uri: "https://setcalender-3f936.web.app/"
                    }
                  ]
                },
                {
                  thumbnailImageUrl: "https://firebasestorage.googleapis.com/v0/b/setcalender-3f936.appspot.com/o/eventImg%2FbackWood.jpg?alt=media&token=28305e47-170e-4bdf-8e58-16de7e2857cd",
                  imageBackgroundColor: "#FFFFFF",
                  title: "this is menu",
                  text: "description",
                  defaultAction: {
                      type: "uri",
                      label: "View detail",
                      uri: "https://setcalender-3f936.web.app/"
                  },
                  actions: [
                    {
                        type: "uri",
                        label: "View detail",
                        uri: "https://setcalender-3f936.web.app/"
                    },
                    {
                      type: "uri",
                      label: "View detail",
                      uri: "https://setcalender-3f936.web.app/"
                    }
                  ]
                }
            ],
          imageAspectRatio: "rectangle",
          imageSize: "cover"
        }
      }


      // {
      //   type: "location",
      //   title: "my location",
      //   address: "〒160-0004 東京都新宿区四谷一丁目6番1号", 
      //   latitude: 35.687574,
      //   longitude: 139.72922
      // },
      // {
      //   type: "image",
      //   originalContentUrl: "https://firebasestorage.googleapis.com/v0/b/setcalender-3f936.appspot.com/o/eventImg%2FbackWood.jpg?alt=media&token=28305e47-170e-4bdf-8e58-16de7e2857cd",
      //   previewImageUrl: "https://firebasestorage.googleapis.com/v0/b/setcalender-3f936.appspot.com/o/eventImg%2FbackWood.jpg?alt=media&token=28305e47-170e-4bdf-8e58-16de7e2857cd"
      // },

      // {
      //   type: "template",
      //   altText: "this is a confirm template",
      //   template: {
      //       type: "confirm",
      //       text: "Are you sure?",
      //       actions: [
      //         {
      //           type: "uri",
      //           label: "View detail",
      //           uri: "https://setcalender-3f936.web.app/"
      //         }
      //       ]
      //   }
      // }



/*
 * メッセージ返信用の関数
 */ 
// function reply(event) {
//   // LINE developersのメッセージ送受信設定に記載のアクセストークン
//   var ACCESS_TOKEN = 'jvILoP+W1JGe/xnwgz6lM1CCiy9ypiUsBmCW1xWSsr4adQOE2+JpfJIQcjyCc28TrW/eGmRV7CljuKTMWtpMEPZ3dj9i1ly0yf7mOLM13E5r7lKBn/Afs+zzn/1XTvzKGL5X3OCANJYmEkEuZ27hYwdB04t89/1O/w1cDnyilFU=';

//   // 返信用のURL
//   var url = "https://api.line.me/v2/bot/message/reply";
//   // 送信されたテキスト
//   var text = event.message.text;
  
//   // 送信用の設定
//   var headers = {
//     "Content-Type" : "application/json; charset=UTF-8",
//     'Authorization': 'Bearer ' + ACCESS_TOKEN,
//   };

//   // 返信の設定
//   var postData = {
//     "replyToken" : event.replyToken,
//     "messages" : [
//       {
//         'type':'text',
//         'text': text + ' だってぇ？',
//       }
//     ]
//   };

//   // 設定の反映
//   var options = {
//     "method" : "post",
//     "headers" : headers,
//     "payload" : JSON.stringify(postData)
//   };


//   $.ajax({
//     url: url,
//     dataType: "html",
//     cache: false,
//     success: function(data, textStatus){
//       console.log(data,textStatus)
//     },
//     error: function(xhr, textStatus, errorThrown){
//       // エラー処理
//     }
//   });

// }