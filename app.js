const iFileImg = document.getElementById("iFileImg");
const fileImg = document.getElementById("fileImg");
iFileImg.addEventListener("change",(e)=>{
  var reader = new FileReader();
  var imgReader =new Image()
  reader.readAsDataURL(e.target.files[0]) 
  reader.onload = ()=>{
    imgReader.src = reader.result;
    imgReader.onload = ()=>{
      console.log("hitget",imgReader.naturalHeight)
      console.log("width",imgReader.naturalWidth)
      let isHw = imgReader.naturalWidth <= imgReader.naturalHeight;
      let isHightOver160 = imgReader.naturalHeight >= 160;
      let isWidthOver300 = imgReader.naturalWidth >= 300;

      if(isHw==true) {
        fileImg.style.width = "auto";
        fileImg.style.height = 160+"px";        
      }
      if(isHw==false) {
        fileImg.style.width = "100%";
        fileImg.style.height = "auto";       
      }
      // if (isHw==false )
      // if (imgReader.naturalHeight >= imgReader.naturalWidth) {
      //   fileImgBox.classList.add("fileImgBox_Hw")
      // }
      // if (imgReader.naturalHeight <= imgReader.naturalWidth  && imgReader.naturalHeight <= 160) {
      //   fileImgBox.classList.add("fileImgBox_Wh")
      // }
      // if (imgReader.naturalHeight <= imgReader.naturalWidth  && imgReader.naturalHeight >= 160) {
      //   fileImgBox.classList.add("fileImgBox_160Wh")
      // }
  
    }

    console.log(reader)
    fileImg.src = reader.result
  }
});

// -----------------------------
let textarea = document.getElementById('textarea');
//textareaのデフォルトの要素の高さを取得
let clientHeight = textarea.clientHeight;

//textareaのinputイベント
textarea.addEventListener('input', ()=>{
    //textareaの要素の高さを設定（rows属性で行を指定するなら「px」ではなく「auto」で良いかも！）
    textarea.style.height = clientHeight + 'px';
    //textareaの入力内容の高さを取得
    let scrollHeight = textarea.scrollHeight;
    //textareaの高さに入力内容の高さを設定
    textarea.style.height = scrollHeight + 'px';
});

//-----------------------


const labelBox = document.querySelector(".labelBox")
const addLabelBtn = document.querySelector("#addLabelBtn");
function AddLabel() {
  const label = document.createElement("input");
  label.classList.add("label")
  label.placeholder = "選択肢"
  labelBox.appendChild(label);
}
addLabelBtn.onclick = ()=>{
  console.log(labelBox.children)
  if ( labelBox.children.length < 4 ) {
    AddLabel();
  }
}

let imgURL = "https//~~"
let title = "title"

const createLabelBtn = document.querySelector("#createLabelBtn")
createLabelBtn.onclick = ()=>{
  for(value of labelBox.children) {
    actions.push( makeAction(value.value) );
  }
  makeColumn(imgURL,title,actions)
}


let actions = [];
function makeAction(label) {
  return {
    type: "uri",
    label: label,
    uri:  "https://setcalender-3f936.web.app/?question="+true+"&label="+label
  }
}


let columns = [];
function makeColumn(imgURL,title,actions) {
  return    {
    thumbnailImageUrl: imgURL,
    imageBackgroundColor: "#FFFFFF",
    title: title,
    text: "description",
    defaultAction: {
        type: "uri",
        label: "View detail",
        uri: "https://setcalender-3f936.web.app/"
    },
    actions: actions
  }
}
// columns.push( makeColumn(imgURL,title) )

function makeCarousel (columns) {
  return       {
    type: "template",
    altText: "this is a carousel template",
    template: {
        type: "carousel",
        columns: columns,
      imageAspectRatio: "rectangle",
      imageSize: "cover"
    }
  }

}