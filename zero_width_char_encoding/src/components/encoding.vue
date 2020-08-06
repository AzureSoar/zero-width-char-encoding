<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div style="background:#eee;padding: 20px;maxWidth:500px;margin:0 auto">
        <Card :bordered="false">
            <p slot="title">Encoding</p>
            <Input v-model="inputText" type="textarea" :autosize="true" placeholder="Enter something..." />
        </Card>
        <Button type="primary"  icon="ios-power" @click="handleEncoding">
            Cast an invisibility spell!
        </Button>
        <Card :bordered="false">
            <p>{{inputText}}</p>
        </Card>
    </div>

    <div style="background:#eee;padding: 20px;maxWidth:500px;margin:0 auto">
        <Card :bordered="false">
            <p slot="title">Decoding</p>
            <Input v-model="encodedText" type="textarea" :autosize="true" placeholder="Enter something..." />
        </Card>
        <Button type="primary"  icon="ios-power" @click="handleDecoding">
            Get the secret!
        </Button>
        <Card :bordered="false">
            <p>{{originText}}</p>
        </Card>
    </div>
    </div>
</template>

<script>
// import VueClipboards from 'vue-clipboards2'
export default {
  name: 'encoding',
  props: {
    msg: String
  },
  data() {
      return {
          inputText:"",
          encodedText:"",
          originText:""
      }
  },
  methods: {
      handleEncoding() {
        let dict = ['\u200d','\u200c'] //ZWJ,ZWNJ
        let str = this.inputText
        let res = []
        for(let s of str){
            let binary = s.charCodeAt().toString(2) //字符串每一位的unicode转换成二进制
                // console.log('binary',s.charCodeAt());
            let temp = []
            for(let t of binary){
                temp.push(t==0?dict[0]:dict[1])
            }
            res.push(temp.join('\u200b')) //ZWSP
        //   console.log('s',temp);
        }
        let result = res.join('\u200b\u200b\u200b') //ZWSP*3
        this.inputText = result
        // console.log('res',res.join('\u200b')); 
        this.$copyText(result).then(function (e) {
            alert('success')
        //   window.$Message.success('in your clipboard!')
          console.log(e)
        }, function (e) {
            alert('error')
        //   window.$Message.error('Can not copy!')
          console.log(e)
        })
        this.inputText = ""
      },
      handleDecoding() {
        let dict = ['\u200d','\u200c'] //ZWJ,ZWNJ
        // console.log('123',Array.from(result));
        let str = this.encodedText
        let arr = str.split('\u200b\u200b\u200b') //ZWSP*3
        // console.log('split',arr);
        // let origin = ""
        let origin = arr.map(ele=>{
            let child = ele.split('\u200b')
            let childStr = child.map(i=>i==dict[0]?"0":i==dict[1]?"1":'invalid').join("")
            // console.log('childStr', childStr);
            let originChar = String.fromCharCode(parseInt(childStr,2))
            console.log('childStr', originChar);
            return originChar
        }).join("")
        console.log('object',origin);
        this.originText = origin
        this.encodedText = ""
        //     origin.concat()
        // console.log('origin',origin);
      }

  },
  mounted() {

  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
